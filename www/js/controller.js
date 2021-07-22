(function(){
	'use strict';	
		var DemoCtrl = function($scope, $ionicActionSheet, $ionicBackdrop, $timeout,$ionicPopup,$ionicListDelegate,$ionicPopover, $ionicModal,hexavalue,count,apiService) {
			//using list item with arrary
			$scope.dataToShow = {};

			$scope.list =[{
				firstname: 'Nikhil'
			},{
				firstname: 'Rahul'
			}]

			$scope.inputData = {
				name: ''
			}
			//Hitting API Get request
			$scope.data = [];
			apiService.getDataFromApi().then(function(response){
				if(response) {
					$scope.data = response;
					console.log($scope.data)
				}
			}, function(err){
				console.log(err)
			})
			//Hitting $https  Post request
			$scope.postdata = function (userId,id,title){
				
				var data = {
					userId: userId,
					id: id,
					title: title,
				}
			}
			//Hitting $https  Delete request
			$scope.data = [];
			apiService.deleteDataFromApi().then(function(response){
				if(response) {
					$scope.data = response;
					console.log($scope.data2)
				}
			}, function(err){
				console.log(err)
			})
			//Hitting $https  Update request
			$scope.data = [];
			apiService.putDataFromApi().then(function(response){
				if(response) {
					$scope.data = response;
					console.log($scope.data3)
				}
			}, function(err){
				console.log(err)
			})
            // Hexa value
			$scope.hex = hexavalue.myFunc(255);
			// using user defined service to show count value
			$scope.counts = count.myFunc(857);
			//using servce to show array value
			$scope.items = ['Arun', 'Rohan', 'Ram'];
			// using filter for currency
			$scope.price = 58;

			//using filter for replace
			$scope.names = [
				'01-10-1000'
			];
			//using filter to replace values
			$scope.numbers =[
				'One',
				'Two',
				'Three',
				'Four',
				'Five',
				'Six',
				'Seven',
				'Eight',
				'Nine'
			]
			//using user defined filter (show value divided by 2)
			$scope.studentlist =[
				{name:'Nikhil',value:1},
				{name:'Rahul',value:2},
				{name:'Amit',value:3},
				{name:'Neeraj',value:4},
				{name:'Dheeraj',value:5},
				{name:'Rohan',value:6},
				{name:'Varun',value:7},
				{name:'Kamal',value:8},
			]
			
			$scope.showData = function(item){
				$scope.dataToShow = item;

			}
			$scope.removedata = function() {
				$scope.dataToShow = {};
			}
			$scope.pushData = function(test){
				$scope.list.push({ 
					firstname: $scope.inputData.name 
				}) 
				$scope.inputData.name = ''
			}
			//using filter for search letter
			$scope.names1 = [
				'One',
				'Two',
				'Three',
				'Four',
				'Five',
				'Six',
				'Seven',
				'Eight',
				'Nine'
			];
		
			$scope.shouldShowDelete = false;
			$scope.shouldShowReorder = false;
			$scope.listCanSwipe = true

			$scope.show = function() {

				// Show the action sheet
				var hideSheet = $ionicActionSheet.show({
					buttons: [
						{ text: '<b>Share</b> This' },
						{ text: 'Move' }
					],
					destructiveText: 'Delete',
					titleText: 'Modify your album',
					cancelText: 'Cancel',
					cancel: function() {
							 // add cancel code..
						 },
					buttonClicked: function(index) {
						return true;
					}
				});

			};
			
            //Show a backdrop for one second
			$scope.action = function() {
				$ionicBackdrop.retain();
				$timeout(function() {
					$ionicBackdrop.release();
				}, 2000);
			};

			// Execute action on backdrop disappearing
			$scope.$on('backdrop.hidden', function() {
				// Execute action
			});

			// Execute action on backdrop appearing
			$scope.$on('backdrop.shown', function() {

				// Execute action
			});

			$scope.showPopup = function() {
				$scope.data = {};
			
				// An elaborate, custom popup
				var myPopup = $ionicPopup.show({
				template: '<input type="password" ng-model="data.wifi">',
				title: 'Enter Wi-Fi Password',
				subTitle: 'Please use normal things',
				scope: $scope,
				buttons: [
					{ text: 'Cancel' },
					{
					text: '<b>Save</b>',
					type: 'button-positive',
					onTap: function(e) {
						if (!$scope.data.wifi) {
						//don't allow the user to close unless he enters wifi password
						e.preventDefault();
						} else {
						return $scope.data.wifi;
						}
					}
					}
				]
				});
			
				myPopup.then(function(res) {
				console.log('Tapped!', res);
				});
			
				$timeout(function() {
				myPopup.close(); //close the popup after 3 seconds for some reason
				}, 3000);
			};

			//ionListDelegate
			$scope.showDeleteButtons = function() {
				$scope.shouldShowDelete = !$scope.shouldShowDelete
			}; 
			$scope.showReorder = function() {
				$scope.shouldShowReorder = !$scope.shouldShowReorder
			};

			$scope.moveItem = function(item, fromIndex, toIndex) {
				//Move the item in the array
				$scope.items.splice(fromIndex, 1);
				$scope.items.splice(toIndex, 0, item);
			};
	
			// .fromTemplateUrl() method
			$ionicPopover.fromTemplateUrl('templates/my-popover.html', {
				scope: $scope
				}).then(function(popover) {
				$scope.popover = popover;
			});


			$scope.openPopover = function(e) {
				$scope.popover.show(e);
			};
			$scope.closePopover = function() {
				$scope.popover.hide();
			};
			//Cleanup the popover when we're done with it!
			$scope.$on('$destroy', function() {
				$scope.popover.remove();
			});
			// Execute action on hidden popover
			$scope.$on('popover.hidden', function() {
				// Execute action
			});
			// Execute action on remove popover
			$scope.$on('popover.removed', function() {
				// Execute action
			});

			//ion Modal
			$ionicModal.fromTemplateUrl('templates/my-modal.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {
				$scope.modal = modal;
			});
			$scope.openModal = function() {
				$scope.modal.show();
			};
			$scope.closeModal = function() {
				$scope.modal.hide();
			};
			// Cleanup the modal when we're done with it!
			$scope.$on('$destroy', function() {
				$scope.modal.remove();
			});
			// Execute action on hide modal
			$scope.$on('modal.hidden', function() {
				// Execute action
			});
			// Execute action on remove modal
			$scope.$on('modal.removed', function() {
				// Execute action
			});
			

		}

		
		

		DemoCtrl.$inject = ['$scope', '$ionicActionSheet', '$ionicBackdrop', '$timeout','$ionicPopup','$ionicListDelegate','$ionicPopover' ,'$ionicModal','hexavalue','count'
		,'apiService'];
		angular
			.module('starter')
			.controller('MainCtrl',DemoCtrl);
	})();
	
	
