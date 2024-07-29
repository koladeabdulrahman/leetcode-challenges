
class RandomizedSet {
    constructor(){
        this.set = new Set()
        this.list = Array.from(this.set)
    }
    insert(val){
        let fact = !this.set.has(val)
        !this.set.has(val) && this.set.add(val)
        this.list = Array.from(this.set)
        console.log(this.list)
        return fact
    }
    remove(val){
        let fact = this.set.has(val)
        this.set.has(val) && this.set.delete(val)
        this.list = Array.from(this.set)
        console.log(this.list)
        return fact
    }
    getRandom(){
        let rand = Math.floor(Math.random() * this.list.length)
        return this.list[rand]

    }
};


