(function(angular, undefined) {
  angular.module("testAngularFullstackApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);