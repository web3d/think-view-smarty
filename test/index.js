import test from 'ava';
import helper from 'think-helper';
import path from 'path';
import fs from 'fs';
import SmartyOrigin from 'smarty4js';
import Smarty from '../index.js';

let viewBasePath = path.join(__dirname, 'views');
let defaultOptions = {
  compat: true,
  strict: false,
  preventIndent: true,
  ignoreStandalone: true,
  cache: false
};
let viewData = {title: 'Thinkjs'};

// test case
test.serial('smarty default render', async t => {
  let viewFile = path.join(viewBasePath, './home.tpl');
  let config = helper.extend({}, defaultOptions, {viewPath: viewBasePath});

  let engine = new Smarty(viewFile, viewData, config);

  let fileContent = fs.readFileSync(path.join(viewBasePath, 'home.tpl')).toString();

  let engineOrigin = new SmartyOrigin(config);
  const compiler = engineOrigin.compile(fileContent);

  let originResp = compiler.render(viewData);

  t.is(originResp, await engine.render())
});

test.serial('get content err', async t => {
  let config = helper.extend({}, defaultOptions, {viewPath: viewBasePath});
  let engine = new Smarty(path.join(viewBasePath, './noExit.tpl'), viewData, config);
  try {
    let ret = await engine.render();
    console.log('ret', ret);
  }catch(e) {
    t.pass();
  }
});
