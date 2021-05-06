function PriorityQueue() {
    
    //封装一个内部类
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    };

    this.items = [];

    PriorityQueue.prototype.enqueue = function(element, priority){
        var  queueElement= new QueueElement(element, priority);
        if(this.items.length ===0){
            this.items.push(queueElement);
        }else{
            var added = false;
            for(var i = 0; i<this.length; i++){
                if(queueElement.priority< this.items[i].priority){
                    this.items.splice(i,0,queueElement);
                    added = true;
                    break;
                }
            }
            if(!added){
             this.items.push(queueElement);
             }
        }
    }
    
    PriorityQueue.prototype.enqueue = function(item) {
        return this.items.push(item);
    }

    PriorityQueue.prototype.dequeue= function(item) {
        return this.items.shift();
    }

    PriorityQueue.prototype.isEmpty= function() {
        return this.items.length === 0;
    }
    // front() 查看队列的队头元素
    PriorityQueue.prototype.front= function() {
        return this.items[0];
    }

    // size() 查看队列中元素的个数
    PriorityQueue.prototype.size= function() {
        return this.items.length;
    }

    PriorityQueue.prototype.toString= function() {
        let a = " ";
        for (let i = this.items.length - 1; i >= 0; i--) {
            a += this.items[i].element + "-"+this.items[i].priority +" ";
        }
        return a;
    }
}


var pq = new PriorityQueue();

pq.enqueue("mom",2);
pq.enqueue("me",2);
pq.enqueue("dad",1);


console.log(pq.toString());
