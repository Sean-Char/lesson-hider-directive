angular.module('directivePractice')
  .directive('lessonHider', function() {
    return {
      templateUrl: './lessonHider.html',
      restrict: 'E',
      scope: {
        lesson: '=',
        dayAlert: '&'
      },
      controller: function($scope, lessonService) {

          $scope.getSchedule = lessonService.getSchedule()
          //console.log($scope.schedule)

      },
      link: function( scope, element, attributes ) {
        // console.log(scope, element, attributes);
        scope.getSchedule.then(function( response ) {
          scope.schedule = response.data;

          //console.log(scope.schedule)
          scope.schedule.forEach(function(scheduleDay) {
            if (scheduleDay.lesson === scope.lesson) {
              scope.lessonDay = scheduleDay.weekday
              element.css('text-decoration', 'line-through');
              return;
            }
          });
        });

      }

    }
  });
