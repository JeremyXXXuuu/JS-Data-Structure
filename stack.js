class Stack{

    constructor(){
        this.items = [];

    }

    push(item){
        return this.items.push(item);
    }

    pop(item){
        return this.items.pop();
    }

    isEmpty(){
        return this.items.length===0;
    }

    toString(){
        let a  = " ";
        for (let i = this.items.length-1; i>=0; i--){
            a+= this.items[i] + " ";
        }
        return a;

    }
}

var s1 = new Stack;

s1.push(1);
s1.push(2);
s1.push(3);
console.log(s1.toString());


function Change(num){
    var s = new Stack;
    while(num!=0){
        s.push(num%2);
        num = Math.floor(num/2);
    }
    return s.toString();

}

console.log(Change(2));