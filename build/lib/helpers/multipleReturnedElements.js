'use strict';

var _ErrorHandler = require('../utils/ErrorHandler');

var multipleReturnedElements = function multipleReturnedElements(elements) {
  var options = this.options;
  var logger = this.logger || console.log;
  switch (options.throwOnMultipleElementsReturned.toLowerCase()) {
    case 'off':
      return elements;
    case 'warn':
      console.log();
      return elements;
    case 'on':
      throw new Error('Multiple elements returned');
  }
};