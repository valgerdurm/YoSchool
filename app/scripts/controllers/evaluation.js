'use strict';

angular.module('yoSchoolApp')
.controller('EvaluationCtrl', function ($scope, ApiFactory, $routeParams) {

	var evaluationID = $routeParams.evaluationID;

	if (evaluationID !== undefined) {
		ApiFactory.getEvaluationById(evaluationID).then(function(data) {
			$scope.evaluation = data;

		}, function(errorMessage) {
			console.log('Error fetching evauation: ' + errorMessage);
		});
	}
});
