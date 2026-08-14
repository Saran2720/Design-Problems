public class Main {
    public static void main(String[] args) {
        System.out.println("--- Test 1: New / Empty Stack ---");
        Stack stack = new Stack();
        stack.isEmpty(); // Expected: Empty
        stack.size();    // Expected: 0
        stack.peek();    // Expected: stack is empty warning
        stack.pop();     // Expected: stack is empty warning

        System.out.println("\n--- Test 2: Push Operations & Peek ---");
        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.size();    // Expected: 3
        stack.peek();    // Expected: 30
        stack.isEmpty(); // Expected: not empty

        System.out.println("\n--- Test 3: Pop Operations (LIFO Order) ---");
        stack.pop();     // Expected: 30 removed
        stack.peek();    // Expected: 20
        stack.pop();     // Expected: 20 removed
        stack.pop();     // Expected: 10 removed

        System.out.println("\n--- Test 4: Stack Underflow & Empty Check ---");
        stack.isEmpty(); // Expected: Empty
        stack.size();    // Expected: 0
        stack.pop();     // Expected: pop failed
        stack.peek();    // Expected: no peek ele

        System.out.println("\n--- Test 5: Re-pushing after emptying ---");
        stack.push(100);
        stack.peek();    // Expected: 100
        stack.size();    // Expected: 1
    }
}
