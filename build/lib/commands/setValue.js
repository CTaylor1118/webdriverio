'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ErrorHandler = require('../utils/ErrorHandler');

var setValue = function setValue(selector, value) {
    var _this = this;

    /*!
     * parameter check
     */
    if (typeof value === 'number') {
        value = value.toString();
    }

    if (typeof value !== 'string' && !Array.isArray(value)) {
        throw new _ErrorHandler.CommandError('number or type of arguments don\'t agree with setValue command');
    }

    return this.element(selector).then(function (res) {
        /**
         * throw NoSuchElement error if no element was found
         */
        if (!res.value) {
            throw new _ErrorHandler.CommandError(7, selector || _this.lastResult.selector);
        }

        return _this.elementIdClear(res.value.ELEMENT).elementIdValue(res.value.ELEMENT, value);
    });
}; /**
    *
    * Send a sequence of key strokes to an element (clears value before). You can also use
    * unicode characters like Left arrow or Back space. WebdriverIO will take care of
    * translating them into unicode characters. You’ll find all supported characters
    * [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions).
    * To do that, the value has to correspond to a key from the table.
    *
    * <example>
       :setValue.js
       it('should set value for a certain element', function () {
           var input = $('.input');
           input.setValue('test123');
   
           // same as
           browser.setValue('.input', 'test123');
   
           console.log(input.getValue()); // outputs: 'test123'
       });
    * </example>
    *
    * @alias browser.setValue
    * @param {String}              selector   Input element
    * @param {String|Number|Array} values     Input element
    * @uses protocol/elements, protocol/elementIdClear, protocol/elementIdValue
    * @type action
    *
    */

exports.default = setValue;
module.exports = exports['default'];