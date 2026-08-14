

class Node{
    int val;
    Node next;

    public Node(int val){
        this.val = val;
        next=null;
    }
}

public class Stack {
    private Node top;
    private int size;
    public Stack(){
        this.top = null;
        this.size=0;
    }

    public void push(int num){
        Node newNode = new Node(num);
        newNode.next = top;
        top = newNode;
        size++;
    }

    public void pop(){
        if(size==0){
            System.err.println("stack is empty so pop falied");
        }else{
            Node remove = top;
            top = top.next;
            remove.next=null;
            size--;
            System.err.println("Element removed " + remove.val);
        }
    }

    public void peek(){
        if(size==0){
            System.err.println("stack is empty so no peek ele");
            
        }else{
            System.err.println(top.val+ " is the peek ele");
        }


    }

    public void isEmpty(){
        if(size==0){
            System.err.println("Empty");
        }else{
            System.err.println("not empty");
        }
    }

    public void size(){
        System.err.println(this.size +" is the stack size");
    }


}
