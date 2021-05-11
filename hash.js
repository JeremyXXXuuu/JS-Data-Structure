function HashTable() {
  this.storage = [];
  this.count = 0;
  this.limit = 7;
}

HashTable.prototype.put = function (key, value) {
  var index = this.hashFunc(key, this.limit);
  var bucket = this.storage[index];

  if (bucket == null) {
    bucket = [];
    this.storage[index] = bucket;
  }

  for (let i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] == key) {
      tuple[1] = value;
      return;
    }
  }
  bucket.push([key, value]);
  this.count++;

  // 判断是否需要扩容
  if (this.count > this.limit * 0.75) {
    this.resize(this.getPrime(this.limit * 2));
  }
};

HashTable.prototype.get = function (key) {
  var index = this.hashFunc(key, this.limit);
  var bucket = this.storage[index];
  if (bucket == null) {
    return null;
  }

  for (let i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] == key) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function (key) {
  var index = this.hashFunc(key, this.value);
  var bucket = this.storage[index];
  if (bucket == null) {
    return null;
  }

  for (let i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] == key) {
      bucket.splice(i, 1);
      this.count--;
      return tuple[1];
    }
  }
  if (this.limit > 7 && this.count < this.limit * 0.25) {
    this.resize(this.getPrime(Math.floor(this.limit / 2)));
  }
  return null;

  //判断是否需要缩小
};

//判断哈希表是否为空

HashTable.prototype.isEmpty = function () {
  return this.count == 0;
};

HashTable.prototype.resize = function (newLimit) {
  var oldStorage = this.storage;

  this.storage = [];
  this.count = 0;
  this.limit = newLimit;
  for (let i = 0; i < oldStorage.length; i++) {
    var bucket = oldStorage[i];
    if (bucket == null) continue;
    for (let j = 0; j < bucket.length; j++) {
      var tuple = bucket[j];
      this.put(tuple[0], tuple[1]);
    }
  }
};

HashTable.prototype.isPrime = function (value) {
  var sqrt = parseInt(Math.sqrt(value));

  for (let i = 2; i < sqrt; i++) {
    if (value % i == 0) {
      return false;
    }
  }
  return true;
};

HashTable.prototype.getPrime = function (num) {
  while (!this.isPrime(num)) {
    num++;
  }
  return num;
};

HashTable.prototype.hashFunc = function (str, size) {
  var hashCode = 0;

  for (var i = 0; i < str.length; i++) {
    hashCode = 37 * hashCode + str.charCodeAt(i);
  }
  var index = hashCode % size;
  return index;
};

//test

var hsh = new HashTable();

hsh.put("abc", "123");
hsh.put("abc", "121");
console.log(hsh.get("abc"));
