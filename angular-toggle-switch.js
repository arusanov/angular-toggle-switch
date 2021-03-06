angular.module('toggle-switch', ['ng']).directive('toggleSwitch', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      model: '=',
      onLabel: '=onLabel',
      offLabel: '=offLabel'
    },
    template: '<div class="switch" ng-click="toggle()"><div ng-class="{\'switch-off\': !model, \'switch-on\': model}"><span class="switch-left">{{ onLabel }}</span><span class="knob">&nbsp;</span><span class="switch-right">{{ offLabel }}</span></div></div>',
    link: function ($scope, element, attrs) {
      if ($scope.model == null) {
        $scope.model = false;
      }
      $scope.onLabel = $scope.onLabel || 'On'
      $scope.offLabel = $scope.offLabel || 'Off'
      return $scope.toggle = function () {
        element.children().addClass('switch-animate')
        return $scope.model = !$scope.model;
      };
    }
  };
});
