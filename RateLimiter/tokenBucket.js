class TokenBucket{

    constructor(capacity, refilRate){
        this.capacity = capacity;
        this.refilRate = refilRate;
        this.clients = new Map();
    }

    allowRequest(clientId){
        let client = this.clients.get(clientId);

        if(!client){
            client = {
                tokens: this.capacity,
                lastRefil : Date.now()
            }
            this.clients.set(clientId, client);
        }

        const now = Date.now();
        const range = Math.floor((now - client.lastRefil)/1000);
        const newTokens = range * this.refilRate;

        if(newTokens>0){
            client.tokens = Math.min(this.capacity, client.tokens + newTokens);
            client.lastRefil = now;
        }


        if(client.tokens<1){
            return false;
        }

        client.tokens--;
        this.process(clientId, client);
        return true;
    }

    process(clientId, client){
        console.log(clientId, client);
    }
}

const tokenBucket = new TokenBucket(10,5);

for(let i=0;i<100;i++){
    console.log(tokenBucket.allowRequest(1));
}