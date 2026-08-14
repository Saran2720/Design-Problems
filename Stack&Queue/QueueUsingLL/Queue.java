class Node{
    int val;
    Node next;
    
    public Node(int val){
        this.val= val;
        next =null;
    }
}

public class Queue {
    Node start;
    Node end;
    int size;
    
    public Queue(){
        this.start=null;
        this.end=null;
        this.size=0;
    }

    public void add(int val){
        Node newNode = new Node(val);

        if(size==0){
            start = newNode;
            end = newNode;
        }else{
            end.next = newNode;
            end = newNode;
        }
        size++;
        System.out.println("ele added to queue "+end.val);
    }

    public void remove(){
        if(size==0){
            System.out.println("queue is empty not able to remove");
            return;
        }

        Node curr = start;
        start = start.next;
        curr.next=null;
        size--;

        if(size==0){
            start=null;
            end=null;
        }
        System.out.println("ele removed from q "+ curr.val);
    }

    public void peek(){
        if(size==0){
            System.out.println("no peek in the queue is empty");
        }else{
            System.err.println("peek val "+ start.val);
        }
    }

    public void isEmpty(){
        System.out.println(size==0? "queue is empty" : "not empty");
    }

    public void size(){
        System.out.println("size "+ this.size);
    }
}
