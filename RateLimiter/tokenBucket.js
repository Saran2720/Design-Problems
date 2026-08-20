class TokenBucket{
    constructor(capacity, refilRate){
        this.capacity=capacity;
        this.refilRate = refilRate;

        this.clients = new Map();
    }


    allowRequest(clinetId) {
        const now = Date.now();

        if(!this.clients.has(clinetId)){
            this.clients.set(clinetId, {
                token: this.capacity,
                lastReqProcessed:now
            })
        }

        const client = this.clients.get(clinetId);


        const tokensToAdd = (now - client.lastReqProcessed) * this.refilRate;
        client.token = Math.min(client.token+tokensToAdd, this.capacity);
        client.lastReqProcessed = now;

        if(client.token>0){
            client.token--;
            this.process(clinetId);
            return true;
        }

        return false;
    }

    process(clinetId){
        console.log("processing req for ",clinetId);
    }
}



const tokenBucket = new TokenBucket(5, 10);
for (let i = 1; i <= 1000; i++) {
    console.log(tokenBucket.allowRequest("c1"));
}