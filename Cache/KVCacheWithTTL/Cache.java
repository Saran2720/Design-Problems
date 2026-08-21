class Node{
  String key;
  String val;
  long time;

  public Node(String key, String val, long time){
    this.key = key;
    this.val = val;
    this.time = time;
  }
}

class Cache{

  public boolean put(String key, String val, long ttl){
     evictCache();

     if(map.containsKey(key)){
      map.remove(key);
     }

     if(map.size()>=capacity){
       return false;// cant able to store the data cache id full
     }

     long evictionTime = ttl + System.currentMills();

     Node node = new Node(key, val, evictionTime);

     map.put(key,node);
     minHeap.add(node);

     return true;
  }

  public String get(String key){
    
    Node currNode = map.get(key);

    if(currNode==null) return null;

    long now = System.currentMills();

      if(currNode.time<=now){
        map.remove(currNode.key); //cache is in the map but ttl reached so remove and return null;
        return null;
      }
      return currNode.val;
  }

  private void evictCache(){
    long now = System.currentMills();

    while(!minHeap.isEmpty() && minHeap.peek().time<=now){
      Node node = minHeap.poll();
      map.remove(node.key);
    }
  }
}


