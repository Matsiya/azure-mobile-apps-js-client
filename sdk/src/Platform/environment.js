// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation. All rights reserved.
// ----------------------------------------------------------------------------

// Module to retrieve environment details

/**
 * Gets details of the target
 * @private
 * 
 * @return 'Cordova', 'Web' or 'Unknown'
 */
exports.getTarget = function () {
    if (typeof global !== 'undefined' && global.cordova && global.cordova.version) {
        return 'Cordova';
    } else if (typeof global !== 'undefined') {
        return 'Web';
    } else {
        try {
            var react = require('react-native');
            if (react) {
                return 'ReactNative';
            }
        } catch (e) { }
        return 'Unknown';
    }
};
