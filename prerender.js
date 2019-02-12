const PUPPETEER = require('puppeteer');
const EXPRESS = require('express');
const {
  join: JOIN,
  dirname: DIRNAME
} = require('path');
const {
  readFile: READ_FILE,
  exists: EXISTS,
  writeFile: WRITE_FILE,
  mkdir: MKDIR
} = require('mz/fs')
const STATIC_PATHS = require('./static-paths');

const PORT = 4000;
const HOST = `http://localhost:${PORT}`;
const ROOT_PATH = 'dist/website';

async function main() {
  const APP = EXPRESS();
  const INDEX = (await READ_FILE(JOIN(process.cwd(), ROOT_PATH, 'index.html'))).toString();

  APP.get('*.*', EXPRESS.static(JOIN(process.cwd(), ROOT_PATH)));
  APP.get('*', (req, res) => res.send(INDEX));

  const SERVER = await (new Promise((resolve, reject) => {
    const CREATED_SERVER = APP.listen(PORT, error => error ? reject(error) : resolve(CREATED_SERVER));
  }));
  const BROWSER = await PUPPETEER.launch();
  const PAGE = await BROWSER.newPage();

  for (const CURRENT_PATH of STATIC_PATHS.PATHS) {
    await PAGE.goto(`${HOST}/${CURRENT_PATH}`);

    const RESULT = await PAGE.evaluate(() => '<!doctype html>' + document.documentElement.outerHTML);
    const FILE = JOIN(process.cwd(), ROOT_PATH, (CURRENT_PATH || 'index') + '.html');
    const DIR = DIRNAME(FILE);

    if (!(await EXISTS(DIR))) {
      await MKDIR(DIR);
    }

    await WRITE_FILE(FILE, RESULT);
    console.log('Written file:', FILE);
  }

  BROWSER.close();
  SERVER.close();
}

main()
  .then(() => console.log('All right!'))
  .catch(error => {
    console.error('Error:', error);
    process.exit(1);
  });
