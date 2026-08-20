// class MinStack {
//     private Stack<Integer> stack;
//     private Stack<Integer> minStack;

//     public MinStack() {
//         stack = new Stack();
//         minStack = new Stack();
//     }
    
//     public void push(int val) {
//         if(!minStack.isEmpty()){
//             int min = Math.min(minStack.peek() , val);
//             minStack.push(min);
//         }else{
//             minStack.push(val);
//         }
//         stack.push(val);
//     }
    
//     public void pop() {
//         stack.pop();
//         minStack.pop();
//     }
    
//     public int top() {
//         return stack.peek();
//     }
    
//     public int getMin() {
//         return minStack.peek();
//     }
// }

