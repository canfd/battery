/**
 * can.battery - Feature detector for can.js which checks if the Battery API is available.
 * @version 1.0.0
 * @author André König (andre.koenig@konexmedia.com)
 * @license MIT
 *
 */
/*
 * can-battery
 *
 * Copyright(c) 2014 André König <andre.koenig@konexmedia.com>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@konexmedia.com>
 *
 */

/* global can */

;(function init () {

    'use strict';

    /**
     * Checks if the Battery API is available in the browser.
     * 
     * See https://developer.mozilla.org/en-US/docs/Web/API/Navigator.battery
     * 
     * Usage:
     * 
     * can.use('battery', function (err, supports) {
     *     if (supports) {
     *         // Do something special.
     *     }
     * });
     *
     */
    can.define('battery', {
        check : function check () {
            return !!(navigator.battery || navigator.webkitBattery || navigator.mozBattery);
        }
    });
})();