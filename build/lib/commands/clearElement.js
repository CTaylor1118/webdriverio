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
    * Clear a `<textarea>` or text `<input>` element’s value. Make sure you can interact with the
    * element before using this command. You can't clear an input element that is disabled or in
    * readonly mode.
    *
    * <example>
       :clearElement.js
       it('should demonstrate the clearElement command', function () {
           var input = $('.input')
           input.setValue('test123')
           console.log(input.getValue()) // returns 'test123'
   
           input.clearElement()
           // or
           browser.clearElement('.input')
   
           var value = browser.getValue('.input')
           assert(value === ''); // true
       })
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
