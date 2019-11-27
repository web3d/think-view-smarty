const Smarty = require('smarty4js');
const helper = require('think-helper');

/**
 * smarty default render options
 * for more information on smarty options, refer to https://github.com/mde/smarty4js
 */
const defaultOptions = {
  left_delimiter: '{%', // default
  right_delimiter: '%}' // default
};

class SmartyEngine {
  /**
   * @param {String} file: filename(absolute path)of template
   * @param {Object} data
   * @param {Object} config
   */
  constructor(viewFile, viewData, config) {
    this.viewFile = viewFile;
    this.viewData = viewData;
    this.config = config;
    this.handleOptions = helper.extend({
      filename: viewFile
    }, defaultOptions, config.options);
  }

  /**
   * render
   * @return {Promise}
   */
  render() {
    // create a Smarty object
    const s = new Smarty(this.handleOptions);

    // render Smarty with data (3 methods)
    return s.render(this.viewFile, this.viewData);
  }
}

module.exports = SmartyEngine;
