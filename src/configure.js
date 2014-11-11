'use strict';


   var _ = require('lodash');

module.exports = function (overrides) {
    var return_object = {
        user:     'user',
        password: 'password',
        url:      'http://github.com'
    };


    _.merge(return_object,overrides);

    return return_object;
};