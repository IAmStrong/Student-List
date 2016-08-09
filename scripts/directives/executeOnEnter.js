app.directive('executeOnEnter', function($document) {
    return {
        restrict: 'A',
        link: function(scope) {
            return $document.bind('keydown', function(event) {
                return scope.$apply(function () {
                    return event.which === 13 ? scope.getInputValues(scope.mode.action) : false;
                });
            });
        }
    };
});