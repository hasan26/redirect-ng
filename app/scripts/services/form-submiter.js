angular
  .module('sampleAppApp')
  .directive('autoSubmitForm', ['$interpolate', function($interpolate) {
  return {
    replace: true,
    scope: {
      formData: '='
    },
    template: '',
    link: function($scope, element, $attrs) {
      $scope.$on($attrs['event'], function(event, data) {
        var formRaw = '<form action="{{formData.Url}}" method="{{formData.Method}}">';
        angular.forEach($scope.formData.Params, function(value, key) {
          formRaw 	= formRaw + '<input type="text" type="hidden" name="'+key+'" value="'+value+'"/>';
        });
        formRaw 	= formRaw +'</form>';
        var form 	= $interpolate(formRaw)($scope);
        jQuery(form).appendTo('body').submit();
      })
    }
  }
}]);