// class MyQueue {
//     Stack<Integer> inputStack;
//     Stack<Integer> outputStack;
//     public MyQueue() {
//         inputStack= new Stack<>();
//         outputStack=new Stack<>();
//     }
    
//     public void push(int x) {
//         inputStack.push(x);
//     }
    
//     public int pop() {
//         shiftStack();
//         return outputStack.pop();
//     }
    
//     public int peek() {
//         shiftStack();
//          return outputStack.peek();
//     }
    
//     public boolean empty() {
//         return inputStack.isEmpty() && outputStack.isEmpty();
//     }


//     private void shiftStack(){
//         if(outputStack.isEmpty()){
//             while(!inputStack.isEmpty()){
//                 outputStack.push(inputStack.pop());
//             }
//         }
//     }
// }

// /