// class MyStack {
//     Queue <Integer> q;
//     public MyStack() {
//         q= new LinkedList<>();
//     }
    
//     public void push(int x) {
//         if(!q.isEmpty()){
//             int size=q.size();
//             q.offer(x);
//             for(int i=0;i<size;i++){
//                 q.offer(q.poll());
//             }
//         }else{
//             q.offer(x);
//         }
//     }
    
//     public int pop() {
//         return q.poll();
//     }
    
//     public int top() {
//         return q.peek();
//     }
    
//     public boolean empty() {
//         return q.isEmpty();
//     }
// }

