public class Queue {
    private int[] arr;
    private int start;
    private int end;
    private int capacity;
    private int size;


    public Queue(int capacity){
        this.capacity = capacity;
        arr = new int[capacity];
        start=0;
        end =-1;
        this.size =0;
    }

    public void add(int num){
        if(size==capacity){
            System.err.println("queue is full ");
            return;
        }

        end = (end+1)%capacity;
        arr[end] = num;
        size++;
        System.err.println("num added to the queue "+ arr[end]);
    }

    public void remove(){
        if(size==0){
            System.err.println("queue is empty not able to remove");
        };

        start = (start+1)%capacity;
        size--;
        
        System.err.println("element removed " + arr[start-1]);
    }

    public void peek(){
        if(size==0) System.err.println("queue is empty");

        System.err.println(arr[start] + " peak element");
          
    }
    public void size(){
        System.err.println("size "+ this.size);
    }
}
