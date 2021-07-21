angular
  .module('starter')
  //$location Service
.service('hexavalue', function(){
    this.myFunc = function (x){
        return x.toString();
    }
})
  //Count value
.service('count',function(){
    this.myFunc = function (x){
       return x.toString();
    }
})
  //Array Value
.service('items',function(){
    this.myFunc = function (x){
       return x.toString();
    }
})
