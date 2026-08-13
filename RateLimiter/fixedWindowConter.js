class FixedWindowRateLimiterUserBased {
    constructor(limit, windowSizeMs) {
        this.limit = limit;
        this.windowSizeMs = windowSizeMs;
        this.clients = new Map();
    }

    allowRequest(clientId) {
        let client = this.clients.get(clientId);
        const now = Date.now();
        if (!client) {
            client = {
                count: 1,
                windowStartTime: now
            }
            this.clients.set(clientId, client);
        }

        //check whether the client count is reset after fixed window time
        if (now - client.windowStartTime >= this.windowSizeMs) {
            client.count = 1;
            client.windowStartTime = now;

            this.process(clientId);
            return true;
        }

        if (client.count < this.limit) {
            client.count++;
            this.process(clientId);
            return true;
        } else {
            return false;
        }
    }

    process(requestId) {
        console.log(requestId, " is processed");
    }
}

const fixedWindowRateLimiterUserBased = new FixedWindowRateLimiterUserBased(10, 1000 * 60);

for (let i = 0; i <= 100; i++) {
    const allowed = fixedWindowRateLimiterUserBased.allowRequest("abcd");
    console.log(`request ${i + 1} is ${allowed ? "allowed" : "denied"}`);
}



class FixedWindowRateLimiterGlobal {
    constructor(limit, windowSizeMs) {
        this.limit = limit;
        this.windowSizeMs = windowSizeMs;

        this.windowStartTime = Date.now();
        this.counter = 0;
    }

    allowRequest(request) {
        const now = Date.now();

        if (now - this.windowStartTime >= this.windowSizeMs) {
            this.windowStartTime = now;
            this.counter = 0;
        }

        if (this.counter < this.limit) {
            this.counter++;
            this.process(request);
            return true;
        } else {
            return false;
        }
    }
    process(requestId) {
        console.log(`Global Request [${requestId}] processed.`);
    }
}

const fixedWindowRateLimiterGlobal = new FixedWindowRateLimiterGlobal(5, 10);

for (let i = 1; i <= 1000; i++) {
    const allowed = fixedWindowRateLimiterGlobal.allowRequest("r" + i);
    console.log(`request ${i} is ${allowed ? "allowed" : "denied"}`);
}