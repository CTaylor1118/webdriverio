'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ErrorHandler = require('../utils/ErrorHandler');

var clearElement = function clearElement(selector) {
    var _this = this;

    return this.element(selector).then(function (res) {
        if (!res.value) {
            // throw NoSuchElement error if no element was found
            throw new _ErrorHandler.CommandError(7, selector || _this.lastResult.selector);
        }

        return _this.elementIdClear(res.value.ELEMENT, 'value');
    });
}; /**
    *
    * Clear a `<textarea>` or text `<input>` element’s value.
    *
    * <example>
       :clearElementAsync.js
       client
           .setValue('.input', 'test123')
           .clearElement('.input')
           .getValue('.input').then(function(value) {
               assert(value === ''); // true
           });
   
       :clearElementSync.js
       it('should demonstrate the clearElement command', function () {
           browser
               .setValue('.input', 'test123')
               .clearElement('.input')
   
           var value = browser.getValue('.input')
           assert(value === ''); // true
       });
    * </example>
    *
    * @alias browser.clearElement
    * @param {String} selector input element
    * @uses protocol/elements, protocol/elementIdClear
    * @type action
    *
    */

exports.default = clearElement;
module.exports = exports['default'];
