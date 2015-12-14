/**
 * Created by kojo on 29/11/15.
 */

angular.module('smart.directives', [])

.directive('drawerToggle', function() {
  return {
    restrict: 'A',
    link: function($scope, $element, $attrs) {
      var el = $element[0];
      if($attrs.animate === "true") {
        $element.addClass('animate drawerToggle');
      }

      $element.bind('click', function(){
        if($attrs.animate === "true") {
          if($scope.toggleDrawer() === "open") {
            el.style.transform = el.style.webkitTransform = 'translate3d(' + -5 + 'px, 0, 0)';
          } else {
            el.style.transform = el.style.webkitTransform = 'translate3d(' + 0 + 'px, 0, 0)';
          }
        } else {
          $scope.toggleDrawer();
        }
      });
    }
  };
});
