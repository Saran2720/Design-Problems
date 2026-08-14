class SlidingWinDowLogGlobal{
    constructor(limit,windowSizeMs){
        this.limit = limit;
        this.windowSizeMs = windowSizeMs;

        this.queue=[];
    }

    allowRequest(req){
        const now = Date.now();
        const startTime = now - this.windowSizeMs;

        while(this.queue.length>0 && this.queue[0] <= startTime){
            this.queue.shift();
        }

        if(this.queue.length < this.limit){
            this.queue.push(now);
            this.process(req);
            return true;
        }else{
            return false;
        }
    }
    process(req){
        console.log("request " + req + " is processed");
    }
}

const slidingWindowLogGlobal = new SlidingWinDowLogGlobal(5,10);

for(let i=1;i<=1000;i++){
    console.log(slidingWindowLogGlobal.allowRequest("r" + i)," ", i);
}


//user based rate limit
class SlidingWindowLogUserBased{
    constructor(limit, windowSizeMs){
        this.limit = limit;
        this.windowSizeMs = windowSizeMs;

        this.clients = new Map();
    }

    allowRequest(clientId){

        let client = this.clients.get(clientId);
        const now = Date.now();
        if(!client){
            client = {
                queue: []
            }
            this.clients.set(clientId, client);
        }

        const startTime = now - this.windowSizeMs;

        while(client.queue.length!=0 && client.queue[0]<= startTime){
            client.queue.shift();
        }

        if(client.queue.length < this.limit){
            client.queue.push(now);
            this.process(clientId);
            return true;
        }else{
            return false;
        } 
    }

    process(clientId){
        console.log(clientId, " is processed");
    }
}


const slidingWindowLogUserBased = new SlidingWindowLogUserBased(5,10);

for(let i=1;i<=1000;i++){
    console.log(slidingWindowLogUserBased.allowRequest("r" + i)," ", i);
}