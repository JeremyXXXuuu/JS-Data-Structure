class Queue {

    constructor() {
        this.items = [];

    }

    enqueue(item) {
        return this.items.push(item);
    }

    dequeue(item) {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
    // front() 查看队列的队头元素
    front() {
        return this.items[0];
    }

    // size() 查看队列中元素的个数
    size() {
        return this.items.length;
    }

    toString() {
        let a = " ";
        for (let i = this.items.length - 1; i >= 0; i--) {
            a += this.items[i] + " ";
        }
        return a;
    }
}

var q1 = new Queue;
//先进先出。(FIFO：First In First Out


q1.enqueue(1);

q1.enqueue("2");
q1.enqueue("3");
q1.enqueue(4);





//击鼓传花

var passGame = (nameList, num)=>{
    var q = new Queue;
    nameList.map((e)=>{
        q.enqueue(e);
    })
    var a = "";

    while(q.size()>1){
        for(var i = 1; i<num; i++){
            a = q.dequeue();
            q.enqueue(a);
        }
        q.dequeue();
    }

    return q;
}


const names = ["lily", "lucy", "tom", "tony", "jack"];
const targetIndex = passGame(names, 4);
console.log("击鼓传花", targetIndex.toString());