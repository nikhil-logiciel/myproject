angular
  .module('starter')
    //Replace a value 
.filter('myFormat1', function () {
    return function(x, replacewith){
        let text = x.split('-')
        return text.join(replacewith)
    }
})
    //Show value replaced 
.filter('myFormat',function(){
    return function(x, replacewith){
        let text = x.split('e')
        return text.join(replacewith)
    }
})
//Show value divided by 2
.filter('myFormat2',function(){
    return function (x){
        var selectedOjs = [];
        x.forEach(element => {
       if (element.value % 2 == 0 ) selectedOjs.push(element);            
        })
        return selectedOjs;
    };
})