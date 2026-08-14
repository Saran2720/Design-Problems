public class Main{
    public static void main(String[] args){
        Queue q = new Queue(5);

        q.add(1);
        q.add(2);
        q.add(3);
        q.add(4);
        q.add(5);
        q.add(6); 

        q.remove();
        q.remove();

        q.size();
        q.peek();

    }
}