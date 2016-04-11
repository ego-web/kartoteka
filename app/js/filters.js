'use strict';

/* Filters */

angular.module('kartotekaFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
