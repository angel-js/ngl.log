angular.module('ngl.log', [
  'ngl.log.templates'
])

.factory('nglLogCache', function () {
  'use strict';

  return [];
})

.factory('nglLog', function ($injector) {
  'use strict';

  var nglLogCache = $injector.get('nglLogCache');

  var log = function (msg) {
    if (typeof msg !== 'string') { msg = angular.toJson(msg, 2); }
    nglLogCache.push(msg);
  };

  return log;
})

.directive('nglLog', function ($injector) {
  'use strict';

  var nglLogCache = $injector.get('nglLogCache');

  var controller = function ($scope) {
    $scope.log = nglLogCache;
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'ngl.log.html'
  };
});
