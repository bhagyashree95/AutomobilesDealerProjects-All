 var mainApp = angular.module("mainApp", ['ngRoute']);
		mainApp.factory('loginService', function($location,$rootScope){
			return{
				check:function(){
					if(!$rootScope.loggedIn){
						$location.path('/login');
					}
				}
			}
		});
         mainApp.config(['$routeProvider','$locationProvider',function ($routeProvider, $locationProvider) {
			 $locationProvider.hashPrefix('');
            $routeProvider
			. when('/login', {
               templateUrl: 'login.html',
               controller: 'LoginController'
            })
			. when('/home', {
               templateUrl: 'home.html',
               controller: 'HomeController',
			   resolve: {
				   message: function(loginService){
					   return loginService.check();
				   }
			   }
            })
			. when('/register', {
               templateUrl: 'register.html',
               controller: 'RegisterController'
            })
			. when('/hyundai', {
               templateUrl: 'hyundai.html',
               controller: 'HyundaiController',
			   resolve: {
				   message: function(loginService){
					   return loginService.check();
				   }
			   }
            })
				. when('/hyundaiXcent', {
				   templateUrl: 'hyundaiXcent.html',
				   controller: 'HyundaiXcentController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
				. when('/hyundaiActive', {
				   templateUrl: 'hyundaiActive.html',
				   controller: 'HyundaiActiveController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
				. when('/hyundaiElite', {
				   templateUrl: 'hyundaiElite.html',
				   controller: 'HyundaiEliteController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
				. when('/hyundaiI10', {
				   templateUrl: 'hyundaiI10.html',
				   controller: 'HyundaiI10Controller',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
				
			. when('/tata', {
               templateUrl: 'tata.html',
               controller: 'TataController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
            })
				. when('/tataTiago', {
				   templateUrl: 'tataTiago.html',
				   controller: 'TataTiagoController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
				. when('/tataIndigo', {
				   templateUrl: 'tataIndigo.html',
				   controller: 'TataIndigoController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
				. when('/tataTigor', {
				   templateUrl: 'tataTigor.html',
				   controller: 'TataTigorController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
				. when('/tataBolt', {
				   templateUrl: 'tataBolt.html',
				   controller: 'TataBoltController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
				
			. when('/maruti', {
               templateUrl: 'maruti.html',
               controller: 'MarutiController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
            })
				. when('/marutiBaleno', {
				   templateUrl: 'marutiBaleno.html',
				   controller: 'MarutiBalenoController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
				. when('/marutiWagonR', {
				   templateUrl: 'marutiWagonR.html',
				   controller: 'MarutiWagonRController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
				. when('/marutiSwift', {
				   templateUrl: 'marutiSwift.html',
				   controller: 'MarutiSwiftController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
				. when('/marutiSuzukiDzire', {
				   templateUrl: 'marutiSuzukiDzire.html',
				   controller: 'MarutiSuzukiDzireController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
			
			. when('/ford', {
               templateUrl: 'ford.html',
               controller: 'FordController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
            })
				. when('/fordFigo', {
				   templateUrl: 'fordFigo.html',
				   controller: 'FordFigoController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
				. when('/fordAspire', {
				   templateUrl: 'fordAspire.html',
				   controller: 'FordAspireController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
				. when('/fordEcoSport', {
				   templateUrl: 'fordEcoSport.html',
				   controller: 'FordEcoSportController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
			
			. when('/toyota', {
               templateUrl: 'toyota.html',
               controller: 'ToyotaController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
            })
				. when('/toyotaPlatinumEtios', {
				   templateUrl: 'toyotaPlatinumEtios.html',
				   controller: 'ToyotaPlatinumEtiosController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
				. when('/toyotaEtiosCross', {
				   templateUrl: 'toyotaEtiosCross.html',
				   controller: 'ToyotaEtiosCrossController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
				. when('/toyotaEtiosLiva', {
				   templateUrl: 'toyotaEtiosLiva.html',
				   controller: 'ToyotaEtiosLivaController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
				})
			
			. when('/purchase', {
				   templateUrl: 'purchase.html',
				   controller: 'PurchaseController',
				   resolve: {
					   message: function(loginService){
						   return loginService.check();
					   }
				   }
			})
				
            .otherwise({
               redirectTo: '/login'
			});			
         }]);
		 
		 mainApp.controller('LoginController', function($scope,$location,$rootScope) {
            $scope.message = "Login Form";
			$scope.login = function() {
					var username = $scope.username;
					var password = $scope.password;
					if (username == "bhagyashree.b1@tcs.com" && password == "12345") {
						$rootScope.loggedIn=true;
						$location.path("/home" );
 						 $scope.redirect = function(){
						  $location.url('/home.html'); 
						} 
						} 
					else {
						alert('Please enter valid username and password');
						}
				};
		});
		
		mainApp.controller('HomeController', function($scope) {
            $scope.message = "Home Page";
		});
		
		mainApp.controller('RegisterController', function($scope,$location) {
            $scope.message = "Register Page";
			$scope.register= function(){
				/* alert('User registered successfully'); */
				$location.path('/login');
				$scope.redirect= function(){
					$location.url('/login.html')
				}
			}
		});	   
		
		mainApp.controller('HyundaiController', function($scope) {
            $scope.message = "Hyundai Page";
		});
		mainApp.controller('TataController', function($scope) {
            $scope.message = "Tata-Motors Page";
		});
		mainApp.controller('MarutiController', function($scope) {
            $scope.message = "Maruti-Suzuki Page";
		});
		mainApp.controller('FordController', function($scope) {
            $scope.message = "Ford Page";
		});
		mainApp.controller('ToyotaController', function($scope) {
            $scope.message = "Toyota Page";
		});
		
		mainApp.controller('HyundaiXcentController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Hyundai Xcent Page";
			$scope.car = "Hyundai Xcent";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		}); 
		mainApp.controller('HyundaiActiveController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Hyundai I20 Active Page";
			$scope.car = "Hyundai I20 Active";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		mainApp.controller('HyundaiEliteController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Hyundai Elite I20 Page";
			$scope.car = "Hyundai Elite I20";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		mainApp.controller('HyundaiI10Controller', function($scope,$window,$location,$rootScope) {
            $scope.message = "Hyundai I10 Page";
			$scope.car = "Hyundai I10";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		
		mainApp.controller('TataTiagoController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Tata Tiago Page";
			$scope.car = "Tata Tiago";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		mainApp.controller('TataIndigoController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Tata Indigo eCS Page";
			$scope.car = "Tata Indigo eCS";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		mainApp.controller('TataTigorController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Tata Tigor Page";
			$scope.car = "Tata Tigor";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		mainApp.controller('TataBoltController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Tata Bolt Page";
			$scope.car = "Tata Bolt";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		
		mainApp.controller('MarutiBalenoController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Maruti Baleno Page";
			$scope.car = "Maruti Baleno";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		mainApp.controller('MarutiWagonRController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Maruti Wagon R Page";
			$scope.car = "Maruti Wagon R";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		mainApp.controller('MarutiSwiftController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Maruti Swift Page";
			$scope.car = "Maruti Swift";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		mainApp.controller('MarutiSuzukiDzireController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Maruti Suzuki Dzire Page";
			$scope.car = "Maruti Suzuki Dzire";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		
		mainApp.controller('FordFigoController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Ford Figo Page";
			$scope.car = "Ford Figo";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		mainApp.controller('FordAspireController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Ford Aspire Page";
			$scope.car = "Ford Aspire";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		mainApp.controller('FordEcoSportController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Ford EcoSport Page";
			$scope.car = "Ford EcoSport";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		
		mainApp.controller('ToyotaPlatinumEtiosController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Toyota Platinum Etios Page";
			$scope.car = "Toyota Platinum Etios";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		mainApp.controller('ToyotaEtiosCrossController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Toyota Etios Cross Page";
			$scope.car = "Toyota Etios Cross";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		mainApp.controller('ToyotaEtiosLivaController', function($scope,$window,$location,$rootScope) {
            $scope.message = "Toyota Etios Liva Page";
			$scope.car = "Toyota Etios Liva";
			 $scope.purchaseCar=function(text){
				$rootScope.text=text;
				$location.path("/purchase" );
			};  
		});
		
		mainApp.controller('PurchaseController', function($scope,$rootScope,$location,$window) {
        	$scope.pursecar=$rootScope.text;
			$scope.msg = "Purchase Page"; 
			$scope.purchaseNo= function(){
				$location.path("/login");
			};
			$scope.purchaseYes= function(){
				if($window.confirm("Congrats... You have purchased the Car")){
					$location.path("/home" );
				} 
			};
		}); 