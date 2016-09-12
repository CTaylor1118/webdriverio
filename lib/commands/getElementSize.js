/**
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

import { CommandError } from '../utils/ErrorHandler'

let getElementSize = function (selector, prop) {
    return this.elements(selector).then(function (res) {
        /**
         * throw NoSuchElement error if no element was found
         */
        if (!res.value || res.value.length === 0) {
            throw new CommandError(7)
        }

        let elementIdSizeCommands = []
        for (let elem of res.value) {
            elementIdSizeCommands.push(this.elementIdSize(elem.ELEMENT))
        }

        return this.unify(elementIdSizeCommands, {extractValue: true})
    }).then((size) => {
        if (typeof prop === 'string' && prop.match(/(width|height)/)) {
            return size[prop]
        }

        return {
            width: size.width,
            height: size.height
        }

    })
}

export default getElementSize
