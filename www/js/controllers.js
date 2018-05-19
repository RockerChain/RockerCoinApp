angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
    
}])

.controller('myPurchasesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
    $scope.mapsSelector = function () {
        var lat = Math.random() * (300 - 10) + 10;
        var long =  Math.random() * (300 - 10) + 10;
        if // if we're on iOS, open in Apple Maps /
          ((navigator.platform.indexOf("iPhone") != -1) || 
           (navigator.platform.indexOf("iPad") != -1) || 
           (navigator.platform.indexOf("iPod") != -1))
          window.open("maps://maps.google.com/maps?daddr=" + lat + "," + long + "&amp;ll=");
      else // else use Google /
          window.open("https://maps.google.com/maps?daddr=" + lat + "," + long + "&amp;ll=");
      }
    
}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
    
}])

.controller('verifyCtrl', ['$scope', '$stateParams', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
    
    $scope.startScan = function() {

        if(cordova) {
            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    if(result.text == "CTM")
                    {
                        $state.go('tabsController.results');
                    }
                    else
                    {
                        $state.go('tabsController.notFound');
                    }
                },
                function (error) {
                    $state.go('tabsController.notFound');
                },
                {
                    preferFrontCamera : false, // iOS and Android
                    showFlipCameraButton : false, // iOS and Android
                    showTorchButton : true, // iOS and Android
                    torchOn: false, // Android, launch with the torch switched on (if available)
                    saveHistory: true, // Android, save scan history (default false)
                    prompt : "Place a barcode inside the scan area", // Android
                    resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                    formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                    orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
                    disableAnimations : true, // iOS
                    disableSuccessBeep: false // iOS and Android
                }
            );
        } else {
            $state.go('tabsController.results');
        }
    }
    
}])

.controller('resultsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
    
}])

.controller('notFoundCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
    
    
}])