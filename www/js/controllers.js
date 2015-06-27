angular.module('starter.controllers', [])
    .controller('MainController', ['$scope', '$rootScope', function($scope, $rootScope) {
		$scope.devobjcopy = $rootScope.devObj;
        $scope.releasecopy = $rootScope.releaseObj;
        $scope.emailcopy = $rootScope.emailObj;
        $scope.phonecopy = $rootScope.phoneObj;
		$scope.nameobjcopy = $rootScope.nameObj;
   		$scope.ownerobjcopy = $rootScope.ownerObj;
		$scope.date = new Date();
		
        $scope.plusOne = function(index) {
    if ($scope.developer[index].likes == undefined) $scope.developer[index].likes = 0;
      $scope.developer[index].likes += 1 * 10;
  };
  
  $scope.minusOne = function(index) {
    if ($scope.developer[index].dislikes == undefined) $scope.developer[index].dislikes = 0;
      $scope.developer[index].dislikes += 1 * 10;
  };
  
  $scope.buildBreak = function(index) {
    if ($scope.developer[index].likes == undefined) $scope.developer[index].likes = 0;
      $scope.developer[index].likes += 1 * 50;
  };

    }])
	.controller('MainControllerplay', ['$scope', '$rootScope', function($scope, $rootScope) {
		$scope.devobjcopy = $rootScope.devObj;
        $scope.releasecopy = $rootScope.releaseObj;
        $scope.emailcopy = $rootScope.emailObj;
        $scope.phonecopy = $rootScope.phoneObj;
		$scope.nameobjcopy = $rootScope.nameObj;
   		$scope.ownerobjcopy = $rootScope.ownerObj;
		$scope.date = new Date();
		
        $scope.fine = [{
            likes: 0,
            dislikes: 0
        }];
        $scope.plusOne = function(index) {
            $scope.fine[index].likes += 1 * 10;
        };
        $scope.minusOne = function(index) {
            $scope.fine[index].dislikes += 1 * 10;
        };

        $scope.buildBreak = function(index) {
            $scope.fine[index].likes += 1 * 50;
        };

    }])
    .controller('fineAppCtrl', function($scope, $rootScope) {
        $scope.details = function(a) {
            $rootScope.nameObj = a.name;
            $rootScope.ownerObj = a.title;

        };
		
        $scope.people = [];

        $scope.submitFlag = false;
        $scope.show = false;
        $scope.hidetable = false;

        $scope.create = function() {
            if ($scope.show == false) {
                $scope.show = true;

            }
            if ($scope.submitFlag == false) {
                $scope.submitFlag = true;

            }

        }
        $scope.addPerson = function() {
            $scope.hidetable = true;
            var person = {
                name: $scope.name,
                age: $scope.age,
                title: $scope.title,
            };
            $scope.people.push(person);
            if ($scope.submitFlag == true) {
                $scope.submitFlag = false;
            }
        };
        $scope.removePerson = function(index) {
            $scope.people.splice(index, 1);
            //console.log(index);
            var rows = document.getElementById('rowIteration')
                .getElementsByTagName('tbody')[0]
                .getElementsByTagName('tr').length;
            console.log(rows);
            if ($scope.submitFlag == false && rows == 1) {

                $scope.show = false;
            }
        };

        $scope.addDeveloper = function() {
            var developerAdd = {
                devname: $scope.devname,
                releasedate: $scope.releasedate,
                emailid: $scope.emailid,
                phonenumber: $scope.phonenumber,

            };
			
			
            $scope.developer.push(developerAdd);
            $scope.removeDev = function(index) {
                $scope.developer.splice(index, 1);
            };
        };




    }).controller('allDevCtrl', function($scope, $rootScope) {
        $scope.developers = function() {
            $rootScope.developer.push(developerAdd);
            $scope.developers = $rootScope.developer;
			
        };
		
	
    })


.controller('addAppCtrl', function($scope, $rootScope) {
    $scope.addDev = function(b) {
        $rootScope.devObj = b.devname;
        $rootScope.releaseObj = b.releasedate;
        $rootScope.emailObj = b.emailid;
        $rootScope.phoneObj = b.phonenumber;
    };
    $scope.nameobjcopy = $rootScope.nameObj;
    $scope.ownerobjcopy = $rootScope.ownerObj;

    $rootScope.developer = [];

    $scope.addDeveloper = function() {
        $scope.show = true;
        var developerAdd = {
            devname: $scope.devname,
            releasedate: $scope.releasedate,
            emailid: $scope.emailid,
            phonenumber: $scope.phonenumber,
        };
        $rootScope.developer.push(developerAdd);
        $scope.developer = $rootScope.developer;

        $scope.removeDev = function(index) {
            $scope.developer.splice(index, 1);
            if (index == 0) {
                $scope.show = false;
            }
        };


    };


})


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
})