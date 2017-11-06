var app = angular.module("myApp", ["ngRoute"]);
app.controller("myCtrl", function ($scope, $sce) {
    $scope.lhn = [
        {
            "name": "Maneet Kumar",
            "imgpath": "./assets/img/angularjslogo.jpg",
            "topic": "Angular JS",
            "Description": "",
            "id": "1",
            "url": "https://docs.google.com/forms/d/e/1FAIpQLSdEfI7ILuKb-DoTGfbYyc5oO9Lew0q-6ZL82TpT2oSYZH1eYw/viewform?embedded=true"
        },
        {
            "name": "Aditya",
            "imgpath": "./assets/img/awslogologo.jpg",
            "topic": "AWS",
            "Description": "",
            "id": "2",
            "url": "http://localhost:9092/"
        },
        {
            "name": "Arun",
            "imgpath": "./assets/img/bootstraplogo.jpg",
            "topic": "Bootstrap",
            "Description": "",
            "id": "3",
            "url": "http://localhost:8001/"
        },
        {
            "name": "Sarang Bapat",
            "imgpath": "./assets/img/restfullogo.jpg",
            "topic": "Restful",
            "Description": "",
            "id": "4",
            "url": "http://localhost:8001/"
        },
        {
            "name": "Renchu K",
            "imgpath": "./assets/img/html5logo.jpg",
            "topic": "HTML5",
            "Description": "",
            "id": "5",
            "url": "http://localhost:8001/"
        },
        {
            "name": "Shyamal",
            "imgpath": "./assets/img/angularmateriallogo.jpg",
            "topic": "Angular Material",
            "Description": "",
            "id": "6",
            "url": "http://localhost:8001/"
        },
        {
            "name": "Rishi",
            "imgpath": "./assets/img/firebaselogo.jpg",
            "topic": "Firebase",
            "Description": "",
            "id": "7",
            "url": "http://localhost:8001/"
        },
        {
            "name": "Ashish",
            "imgpath": "./assets/img/javascriptlogo.jpg",
            "topic": "Javascript",
            "Description": "",
            "id": "8",
            "url": "http://localhost:8001/"
        },
        {
            "name": "Sudarshika",
            "imgpath": "./assets/img/jqueryuilogo.jpg",
            "topic": "JQuery UI",
            "Description": "",
            "id": "9",
            "url": "https://docs.google.com/forms/d/e/1FAIpQLSdEfI7ILuKb-DoTGfbYyc5oO9Lew0q-6ZL82TpT2oSYZH1eYw/viewform?embedded=true"
        }
    ]

    $scope.setProject = function (id) {
        $scope.currentProject = $scope.lhn[id];
        $scope.currentProjectUrl = $sce.trustAsResourceUrl($scope.currentProject.url);
    }
}

});