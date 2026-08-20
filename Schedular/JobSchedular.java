package Schedular;

import java.util.PriorityQueue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class JobSchedular {
    public static class Job {
        String id;
        long runAt;

        Job(String id, long runAt) {
            this.id = id;
            this.runAt = System.currentTimeMillis() + runAt;
        }
    }

    PriorityQueue<Job> minHeap = new PriorityQueue<>((a, b) -> Long.compare(a.runAt, b.runAt));

    ExecutorService workerPool = Executors.newFixedThreadPool(5);

    Object lock = new Object();

    JobSchedular() {
        Thread coordinator = new Thread(this::runCoordinator);
        coordinator.start();
    }

    public void scheduleJob(String id, long delayMs) {
        Job job = new Job(id, delayMs);

        synchronized (lock) {
            minHeap.add(job);

            if (minHeap.peek() == job) {
                lock.notify();
            }
        }
    }

    public void runCoordinator() {
        while (true) {
            synchronized (lock) {
                while (minHeap.isEmpty()) {
                    try {
                        lock.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                long now = System.currentTimeMillis();
                Job currJob = minHeap.peek();

                if (currJob.runAt <= now) {
                    Job readjob = minHeap.poll();
                    workerPool.submit(() -> execute(readjob));
                } else {
                    long wakeUpTime = currJob.runAt - now;
                    lock.wait(wakeUpTime);
                }
            }
        }
    }

    private void execute(Job job) {
        System.out.println("🚀 Executed [" + job.id + "] on Thread: " + Thread.currentThread().getName());
    }
}


