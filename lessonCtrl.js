angular.module('directivePractice')
  .controller('lessonCtrl', function($scope) {
    // $scope.name = 'LeBron'
    // $scope.otherName = 'Kevin Durant'

    $scope.myLessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase',
    'No server project', 'Node', 'Express', 'Mongo'];

    $scope.announceDay = function(lesson, day) {
      if (day) {
        alert(lesson + ' is active on ' + day + '.');
      }
      else {
        alert(lesson + ' is not scheduled');
      }
    }

  });
