class Solution {
    public int leastInterval(char[] tasks, int n) {
        Map<Character,Integer> map = new HashMap<>();
        for(char c:tasks){
            map.put(c,map.getOrDefault(c,0)+1);
        }

        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());

        for(int freq:map.values()){
            pq.offer(freq);
        }

        int time =0;
        while(!pq.isEmpty()){
            int count =n+1;
            List<Integer> list = new ArrayList<>();
            while(count>0 && !pq.isEmpty()){  
                int curr = pq.poll();
                if(curr>1){
                    list.add(curr-1);
                }
                time++;
                count--;
            }

            if(!list.isEmpty()){
                time+=count;
            }

            for(int num:list){
                pq.offer(num);
            }
        }
        return time;
    }
}



// Input: tasks = ["A","A","A","B","B","B"], n = 2

// Output: 8
//  A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B