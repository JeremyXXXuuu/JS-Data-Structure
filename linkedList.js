function LinkedList(){


    function Node(data){
        this.data = data;
        this.next = null;
    }

    this.head = null;
    this.length = 0;

    LinkedList.prototype.append = function (data){
        var newNode = new Node(data);

        if(this.head==null){
            this.head = newNode;
        }else{
            var current = this.head;
            while(current.next){
                current = current.next;

            }
            current.next = newNode;
        }
        this.length++;
    }


    LinkedList.prototype.insert = function(position, data){
        var newNode = new Node(data);

        if(this.length<position||position<0){
            return false;
        }else{
            var current = this.head;
            if(position==0){
                this.head = newNode;
                newNode.next = current;
            }else{            
            for(var i=0; i<position; i++){
                var previous = current;
                current = current.next;
            }
            previous.next = newNode;
            newNode.next = current;
            this.length++
            }
        }
    }

    LinkedList.prototype.get = function(position){
        if(this.position<0||this.position>=this.length){
            return null;
        }else{
            var current = this.head;
            var index = 0;
            while(index++<position){
            current = current.next;
        }
        return current.data;
        }
    }

    LinkedList.prototype.indexOf = function(data){
        var current = this.head;
        var index = 0;
        var a = new Array;
        while(current){
            if(current.data == data){
                a.push(index);
            }
            current = current.next;
            index++;
            }
            if(a.length==0){
                return null;
            }else{
                return a;
            }
    }


    LinkedList.prototype.update = function(position,data){
         if(this.position<0||this.position>=this.length){
            return null;
        }else{
            var current = this.head;
            var index = 0;
            while(index++<position){
            current = current.next;
            }
            current.data = data;
        }
    }


    LinkedList.prototype.removeAt = function(position){
        if(this.position<0||position>=this.length){
            return false;
        }else{
            var current = this.head;
            var index = 0;
            if(position==0){
                this.head = current.next;
            }else if(position==this.length-1){
                while(index++<(position-1)){                  
                    current = current.next;
                }
                current.next = null;
            }
            
            else {            
                while(index++<position){
                    var previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            delete current;
        }
        this.length--;
    }

    LinkedList.prototype.remove = function(data){
        var b = this.indexOf(data);
        var num = b.length;
        for(let i = 0; i<num; i++){
            console.log(b[i]);
              this.removeAt(parseInt(b[i]));
             b[i+1] -= 1;
        }
        
    }

    LinkedList.prototype.toString = function(){
            var current = this.head;
            var listString = "";
            while(current){
                listString+= current.data + " ";
                current = current.next;

            }
            return listString;


    }




}



var list = new LinkedList();

list.append("a");

list.append("b");
list.append("c");
list.append("c");
list.insert(3,"d");
list.update(1,"bb");
list.removeAt(4);
list.append("c");
list.append("b");
console.log("the whole Linkedlist is :  "+list.toString());

console.log("get position 2 : "+list.get(2));

console.log("find c index of : "+list.indexOf("c"));
list.remove("c");
console.log("the whole Linkedlist is :  "+list.toString());
