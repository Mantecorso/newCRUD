var app = angular.module("luisApp",[]);

app.controller ("ReadJson",function($scope,$http){
    
    $http.get("datos.json").then(function(item){
        $scope.users=item.data;
    })

    $scope.DeleteUser = function(user){

                var DeleteUser = $scope.users.indexOf(user);
                $scope.users.splice(DeleteUser,1);
    }

    $scope.EditUser = function(user){

                var editPlayer = $scope.users.indexOf(user);
                $scope.users.splice(EditUser,1);
    }

    $scope.ViewUser = function(user){

                var ViewUser = $scope.users.indexOf(user);
                $scope.users.splice(ViewUser,1);
    }

    $scope.AddUser = function(){

        $scope.users.push({
            numero:$scope.numero,
            nombre:$scope.nombre,
            pais:$scope.pais
        })

        $scope.numero='';
        $scope.nombre='';
        $scope.pais='';
    }
});