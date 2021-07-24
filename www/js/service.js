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
  // $http Api Get Request
.service('apiService',function($http, $q){
	this.getDataFromApi = function (x){
		var deferredAbort = $q.defer();
		var request = $http({
			method: "get",
			url: 'https://jsonplaceholder.typicode.com/posts',
			timeout: deferredAbort.promise,
		})
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
		promise.finally(function () {
			promise.abort = angular.noop;
			deferredAbort = request = promise = null;
		});
		return promise;
	}
	this.postDataFromApi = function (userId,body,title){
		var deferredAbort = $q.defer();
		var request = $http({
			method: 'post',
            data: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
            }),
			url: 'https://jsonplaceholder.typicode.com/posts',
			timeout: deferredAbort.promise,
		})
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
		promise.finally(function () {
			promise.abort = angular.noop;
			deferredAbort = request = promise = null;
		});
		return promise;
	}
	this.deleteDataFromApi = function (id){
		var deferredAbort = $q.defer();
		var request = $http({
			method: "delete",
			url: 'https://jsonplaceholder.typicode.com/posts/'+id,
			timeout: deferredAbort.promise,
		})
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
		promise.finally(function () {
			promise.abort = angular.noop;
			deferredAbort = request = promise = null;
		});
		return promise;
	}
	this.putDataFromApi = function (userId,body,title){
		var deferredAbort = $q.defer();
		var request = $http({
			method: "put",
			data: JSON.stringify({
			title: title,
			body: body,
			userId: userId,
			}),
			url: 'https://jsonplaceholder.typicode.com/posts/1',
			timeout: deferredAbort.promise,
		})
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
		promise.finally(function () {
			promise.abort = angular.noop;
			deferredAbort = request = promise = null;
		});
		return promise;
	}
})
