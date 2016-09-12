/**
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

import { CommandError } from '../utils/ErrorHandler'

let clearElement = function (selector) {
    return this.element(selector).then((res) => {
        if (!res.value) {
            // throw NoSuchElement error if no element was found
            throw new CommandError(7)
        }

        return this.elementIdClear(res.value.ELEMENT, 'value')
    })
}

export default clearElement
