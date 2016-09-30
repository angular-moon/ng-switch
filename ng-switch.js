
//当有多个开关指令绑定同一个model时, 用于保存点击事件触发的指令scope
//在watch中排除掉, 不触发UI的change (不然会引发重复触发的错误逻辑)
var currentTargetScope;

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
