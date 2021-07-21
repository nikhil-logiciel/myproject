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
.service('api',function($http, $q){
    ​this.getData = function (data) {
        var deferredAbort = $q.defer();
​
        var request = $http({
        method: "get",
        url: 'https://jsonplaceholder.typicode.com/posts',
        timeout: deferredAbort.promise,
        })
​
        var promise = request.then(
        function (response) {
            return response.data;
        },
        function () {
            return $q.reject("Something went wrong");
        }
        );
        
        promise.abort = function () {
        deferredAbort.resolve();
        };
​
        promise.finally(function () {
        promise.abort = angular.noop;
        deferredAbort = request = promise = null;
        });
​
        return promise;
    };
})
    