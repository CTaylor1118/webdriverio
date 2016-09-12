'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ErrorHandler = require('../utils/ErrorHandler');

var addValue = function addValue(selector, value) {
    var _this = this;

    /*!
     * parameter check
     */
    if (typeof value === 'number') {
        value = '' + value;
    }

    if (typeof value !== 'string' && !Array.isArray(value)) {
        throw new _ErrorHandler.CommandError('number or type of arguments don\'t agree with addValue command');
    }

    return this.element(selector).then(function (res) {
        if (!res.value) {
            /*!
             * throw NoSuchElement error if no element was found
             */
            throw new _ErrorHandler.CommandError(7);
        }

        return _this.elementIdValue(res.value.ELEMENT, value);
    });
}; /**
    *
    * Add a value to an object found by given selector. You can also use unicode
    * characters like Left arrow or Back space. WebdriverIO will take care of
    * translating them into unicode characters. You’ll find all supported characters
    * [here](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-character-types).
    * To do that, the value has to correspond to a key from the table.
    *
    * <example>
       :addValueAsync.js
       client
           .setValue('.input', 'test')
           .addValue('.input', '123')
           .getValue('.input').then(function(value) {
               assert(err === null);
               assert(value === 'test123'); // true
           });
   
       :addValueSync.js
       it('should demonstrate the addValue command', function () {
           browser
               .setValue('.input', 'test')
               .addValue('.input', '123')
   
           var value = browser.getValue('.input')
           assert(value === 'test123'); // true
       });
    * </example>
    *
    * @alias browser.addValue
    * @param {String}        selector   Input element
    * @param {String|Number} values     value to be added
    * @uses protocol/elements, protocol/elementIdValue
    * @type action
    *
    */

exports.default = addValue;
module.exports = exports['default'];
