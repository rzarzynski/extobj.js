/*
 * Extremely simple classical iheritance implementation
 * for JavaScript. Initial version.
 *
 * Author: Radoslaw Zarzynski
 * Creation date: 27th October 2014
 * License: GNU GPL v2
 */
'use strict'

function ExtObj () {
    console.log('creating top object with this = ' + this.constructor);
    this.prototype  = {};
}

ExtObj.prototype.extend = function () {
    console.log('extending object with this = ' + this.constructor);
    var that = this;
    function derive () {
        function newClass () {
            console.log('creating new class instance with this = ' + this.constructor);
            if (typeof this.initialize == 'function') {
                console.log('running ctor: ' + this.initialize);
                this.initialize(arguments);
            }
        };
        newClass.extend           = ExtObj.prototype.extend;
        newClass.prototype        = Object.create(that.prototype);
        newClass.prototype._super = that.prototype;
        return newClass;
    }; 
    //derive.prototype = Object.create(ExtObj.prototype);
    return new derive();
}

