angular.module('gm.switch', [])
    .directive('switch', function(){
        return {
            restrict: 'EA',
            template: "<div class=\"switch\"/><input type=\"checkbox\" ng-model=\"switch\" data-toggle=\"switch\" /></div>",
            scope: {
                'switch': "="
            },
            link: function(scope, element){

                element.bootstrapSwitch();
                element.bootstrapSwitch('setState', scope['switch']);

                element.on('click', function () {
                    scope.$apply(function(){
                        scope['switch'] = element.bootstrapSwitch('status');
                    });

                })

            }
        };
    });
