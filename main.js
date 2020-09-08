class BloomFilter{
    constructor(size){
        this.size=size;
        this.storage = new Array (size).fill(0,0)
    }

    add(string) {
        this.storage[this.hash1(string, this.size)] = 1;
        this.storage[this.hash2(string, this.size)] = 1;
        this.storage[this.hash3(string, this.size)] = 1;    
    }

    contains(string){
        return !!this.storage[this.hash1(string, this.size)] && !!this.storage[this.hash2(string, this.size)] && !!this.storage[this.hash3(string, this.size)]
    }

    hash1(string, size) {
        let coded = 0;
        for (let i = 0; i < string.length; i++) {
            coded += string[i].charCodeAt() * i + 1;
        }
        return Math.floor(coded % size)
    }

    hash2(string, size) {
        let coded = 0;
        for (let i = 0; i < string.length; i++) {
            coded += (string[i].charCodeAt() - i) * i + 1;
        }
        return Math.floor((coded * 2) % size)
    }

   
    hash3(string, size) {
        let coded = 0;
        for (let i = 0; i < string.length; i++) {
            coded += (string[i].charCodeAt() + i) * i + 1;
        }
        return Math.floor((coded * 3) % size)
    }
}

// returns true
let test1 = new BloomFilter(100000);
test1.add("test1");
console.log(test1.contains("test1"));

//return false
let test2 = new BloomFilter(100000);
test2.add("test2");
console.log(test2.contains("test3"));