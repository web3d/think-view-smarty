# think-view-smarty
[![Build Status](https://img.shields.io/travis/thinkjs/think-view-smarty/master.svg?style=flat-square)](https://travis-ci.org/thinkjs/think-view-smarty)
[![Coverage Status](https://img.shields.io/coveralls/thinkjs/think-view-smarty/master.svg?style=flat-square)](https://coveralls.io/github/thinkjs/think-view-smarty?branch=master)
[![npm](https://img.shields.io/npm/v/think-view-smarty.svg?colorB=brightgreen&style=flat-square)](https://www.npmjs.com/package/think-view-smarty)


Compile view templates with Smarty for ThinkJS 3.x.


## Install

```
npm install think-view-smarty
```
## Usage

edit config file `src/config/adapter.js`, add options for smarty adapter:

```js
const smarty = require('think-view-smarty');
exports.view = {
  type: 'smarty',
  common: {
    viewPath: path.join(think.ROOT_PATH, 'view'),
    extname: '.html',
    sep: '_' //seperator between controller and action
  },
  smarty: {
    //options
    handle: smarty,
    beforeRender: (smarty, handleOptions) => {
      //do something before render the template.
    }
  }
}
```



### Options

Default options:

```js
const defaultOptions = {
  cache: true
}
```

You can override it and add other options by editing file  `src/config/adapter.js` :

```js
exports.view = {
  type: 'smarty',
  smarty: {
    handle: smarty,
    options: {
      //override `cache` option
      cache: false
    },
    beforeRender: (smarty, handleOptions) => {
      //do something before render the template.
    }
  }
}
```

Please refer to [https://github.com/mde/smarty#options](https://github.com/mde/smarty#options) for more information on smarty options.

### beforeRender

`beforeRender`  is a function that you can handle something before rendering the template file. It exposes 2 parameters:

*  `smarty` — the original `smarty` module
* `handleOptions` — current configure of smarty adapter

