angular.module('gm.switch', [])
    .directive('switch', function(){
        return {
            restrict: 'EA',
            template: "<div class=\"switch\"/><input type=\"checkbox\"/></div>",
            scope: {
                'switch': "="
            },
            link: function(scope, element){

                //初始化jquery插件
                element.bootstrapSwitch();

                //设置初始状态
                element.bootstrapSwitch('setState', scope['switch']);

                //监测model的变化,刷新UI
                scope.$watch('switch', function(newValue, oldValue){

                    if(newValue !== oldValue)
                        element.bootstrapSwitch('setState', newValue);
                });

            }
        };
    });
