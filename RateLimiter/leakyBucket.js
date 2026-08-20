// class LeakyBucket {
//     constructor(capacity, processRate) {
//         this.capacity = capacity;
//         this.processRate = processRate;
//         this.queue = [];
//         this.lastReqProcessed = Date.now();
//     }

//     allowRequest(request) {
//         this.leak();

//         if (this.queue.length >= this.capacity) {
//             return false;
//         }
//         const now = Date.now();

//         this.queue.push({ request, TimeStamp: now });
//         return true;
//     }

//     leak() {
//         const now = Date.now();

//         const range = (now - this.lastReqProcessed) / 1000;
//         const reqToProcess = range * this.processRate;

//         for (let i = 0; i < reqToProcess; i++) {
//             if (this.queue.length == 0) {
//                 break;
//             }

//             const req = this.queue.shift();
//             this.process(req);
//         }

//         if (reqToProcess > 0) {
//             this.lastReqProcessed = now;
//         }
//     }

//     process(request) {
//         console.log("processing req", request);
//     }
// }



// const leakyBucket = new LeakyBucket(5, 2);
// for (let i = 1; i <= 100; i++) {
//     console.log(leakyBucket.allowRequest("r" + i));
// }




class LeakyBucket{
    constructor(capacity, leakRate){
        this.capacity = capacity;
        this.leakRate = leakRate
        this.timeInterval = 1000/ this.leakRate;

        this.queue = [];
        this.processing = false;
    }

    allowRequset(req) {

        if(this.queue.length >= this.capacity){
            return false;
        }

        this.queue.push(req);

        if(!this.processing){
            this.processNext();
        }

        return true;

    }

    processNext =()=> {
        this.processing = true;
        if(this.queue.length==0) {
            this.processing = false;
            return;
        }

        const req = this.queue.shift();

        this.process(req);

        setTimeout(this.processNext, this.timeInterval);
    }

        process(request) {
        console.log("processing req", request);
    }
}


const leakyBucket = new LeakyBucket(5,2);
for (let i = 1; i <= 1000; i++) {
    console.log(leakyBucket.allowRequset("r" + i));
}