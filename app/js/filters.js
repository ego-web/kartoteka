'use strict';

/* Filters */

angular.module('kartotekaFilters', []).filter('group', function() {
    return function(user, group) {
  
        var out = [];
        console.log(group)
        for (var i = 0; i < user.length; i++) {
            if(user[i].group == group){
                out.push(user[i]);
            }
        }
        out.reverse();
        return out;
    }
});