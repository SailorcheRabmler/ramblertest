var app = angular.module('app', []);


app.directive("tree", function ($compile) {
    return {
        restrict: "AE",
        scope: { comment: '=' },
        template:
            '<p title="id = {{comment.id}}">{{ comment.text }}<br /></p>' +
            '<ul>' +
            '<li ng-repeat="child in comment.children">' +
            '<tree comment="child"></tree>' +
            '</li>' +
            '</ul>',
        link: function (scope, element, attrs) {
            var aa = attrs;
            //debugger;
            var strElm3 = '<br /><a href="javascript:void(0)" ng-click="DelComment(comment)">Удалить</a>';
            var strElm = '<br /><a href="javascript:void(0)" ng-click="AddComment(comment)">Ответить</a>';
            scope.AddComment = function (com) {
                //debugger;
                com.children.push({ id: 666, text: com.input, children: [] });
                //alert(com);

                var rctcomp = document.getElementById('rctbtn'); rctcomp.click()
            };
            scope.DelComment = function (com) {
                //debugger;

                var index = scope.$parent.$parent.comment.children.indexOf(com);
                scope.$parent.$parent.comment.children.splice(index, 1)

                var rctcomp = document.getElementById('rctbtn'); rctcomp.click()

            };


            //$compile(scope);

            var strElm2 = '<br /><input type="text" ng-model="comment.input" />';
            var compiledHtml = $compile(strElm)(scope);
            var compiledHtml2 = $compile(strElm2)(scope);
            if (scope.comment.id != 1) {
                var compiledHtml3 = $compile(strElm3)(scope);
                element.find("p").append(compiledHtml3);
            }
            //element.append(compiledHtml);
            //debugger;

            element.find("p").append(compiledHtml2);
            element.find("p").append(compiledHtml);

            //element.parent().css("style", "{{child.invisible?'display: none':''}}");
            //element.parent().attr("style", "{{child.invisible?'display: none':''}}");
            //return RecursionHelper.compile(scope, function (scope, iElement, iAttrs, controller, transcludeFn) {

            //});
        }
    };
});

app.controller('ctrl', ['$scope', '$q', function ($scope, $q) {

    //$scope.$watch('comments', function (a,b,c) {
    //    debugger;
    //    var rctcomp = document.getElementById('rctbtn'); rctcomp.click()
    //}, true)


    $scope.randomWait = function () {
        var ms = Math.random() * 3000;
        return new Promise(resolve => setTimeout(() => {
            resolve(ms);
        }, ms));
    }

    $scope.promise1 = $scope.randomWait().then(function (value) {
        return value;
    });

    // We can just return a value without creating a promise if we don't need.
    $scope.promise2 = $scope.randomWait().then(function (value) {
        return value;
    });

    $scope.promise3 = $scope.randomWait().then(function (value) {
        return value;
    });




    //var theResults = [];
    $scope.fn = function () {
        $q.all([$scope.promise1, $scope.promise2, $scope.promise3]).then(function (result) {
            //debugger;
            //for (var i = 0; i < result.length; i++) {
            //theResults.push(result[i]);
            //}
            $scope.comments = //[
            {
                id: 1, text: 'Длиннопост...', children:
                    [{
                        id: 2, text: 'Превед', children:
                            [{
                                id: 3, text: 'Кагдила', children:
                                    [
                                        {
                                            id: 4, text: 'Кроссавчег', children: []
                                        },
                                        {
                                            id: 5, text: 'Медвед', children: []
                                        }]
                            },
                            {
                                id: 6, text: 'Кагдила2', children:
                                    [
                                        {
                                            id: 7, text: 'Йакреведко2', children: [{
                                                id: 17, text: 'Кагдила17', children: []
                                            }]
                                        },
                                        {
                                            id: 8, text: 'Медвед2', children: []
                                        }]
                            }
                            ]
                    },
                    {
                        id: 9, text: 'Кроссавчег', children:
                            [{
                                id: 10, text: 'Кагдила', children:
                                    [
                                        {
                                            id: 11, text: 'Йакреведко', children: []
                                        },
                                        {
                                            id: 12, text: 'Медвед', children: []
                                        }]
                            },
                            {
                                id: 13, text: 'Кагдила2', children:
                                    []
                            }
                            ]
                    }]
            }

            var rctcomp = document.getElementById('rctbtn'); rctcomp.click();
        });



    }

    $scope.fn();




}]);

