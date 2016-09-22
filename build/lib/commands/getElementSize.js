'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _ErrorHandler = require('../utils/ErrorHandler');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getElementSize = function getElementSize(selector, prop) {
    return this.elements(selector).then(function (res) {
        /**
         * throw NoSuchElement error if no element was found
         */
        if (!res.value || res.value.length === 0) {
            throw new _ErrorHandler.CommandError(7, selector || this.lastResult.selector);
        }

        var elementIdSizeCommands = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = (0, _getIterator3.default)(res.value), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var elem = _step.value;

                elementIdSizeCommands.push(this.elementIdSize(elem.ELEMENT));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return this.unify(elementIdSizeCommands, { extractValue: true });
    }).then(function (size) {
        if (typeof prop === 'string' && prop.match(/(width|height)/)) {
            return size[prop];
        }
        return {
            width: size.width,
            height: size.height
        };
    });
}; /**
    *
    * Get the width and height for an DOM-element based given selector.
    *
    * <example>
       :getElementSize.js
       client
           .getElementSize('.header-logo-wordmark').then(function(size) {
               console.log(size) // outputs: { width: 100, height: 200 }
           })
           .getElementSize('.header-logo-wordmark', 'width').then(function(width) {
               console.log(width) // outputs: 100
           })
           .getElementSize('.header-logo-wordmark', 'height').then(function(height) {
               console.log(height) // outputs: 200
           });
    * </example>
    *
    * @alias browser.getElementSize
    * @param   {String} selector element with requested size
    * @returns {Object}          requested element size (`{width:number, height:number}`)
    * @uses protocol/elements, protocol/elementIdSize
    * @type property
    *
    */

exports.default = getElementSize;
module.exports = exports['default'];
