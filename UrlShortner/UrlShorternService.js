class UrlShorternService {

    constructor(domain = 'https://short.ly/') {
        this.BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.size = BigInt(this.BASE62.length);
        this.domain = domain;
        this.currentId = 1000000000n;

        this.shortUrl = new Map();
        this.longUrl = new Map();
    }

    encode(id) {
        let sb = '';

        while (id > 0n) {
            const rem = Number(id % this.size);
            sb = this.BASE62[rem] + sb;
            id = id / this.size;
        }
        return sb;
    }

    shortenUrl(longUrl) {
        if (this.longUrl.has(longUrl)) {
            return this.domain + this.longUrl.get(longUrl);
        }

        const id = this.currentId++;

        const shortKey = this.encode(id);

        this.shortUrl.set(shortKey, longUrl);
        this.longUrl.set(longUrl, shortKey);

        return this.domain + shortKey;
    }

    getOriginalUrl(shortUrl) {
        const shortKey = shortUrl.replace(this.domain, '');
        return this.shortUrl.get(shortKey) || null;
    }
}