let puppeteer = require('puppeteer');
let express = require('express');
let {
  join,
  dirname
} = require('path');
let {
  readFile,
  exists,
  writeFile,
  mkdir
} = require('mz/fs')
let staticPaths = require('./static-paths');

const PORT = 4000;
const HOST = `http://localhost:${PORT}`;
const ROOT_PATH = 'dist/website';

async function main() {
  let app = express();
  let index = (await readFile(join(process.cwd(), ROOT_PATH, 'index.html'))).toString();

  app.get('*.*', express.static(join(process.cwd(), ROOT_PATH)));
  app.get('*', (req, res) => res.send(index));

  let server = await (new Promise((resolve, reject) => {
    let createdServer = app.listen(PORT, e => e ? reject(e) : resolve(createdServer));
  }));
  let browser = await puppeteer.launch();
  let page = await browser.newPage();

  for (let currentPath of staticPaths.PATHS) {
    await page.goto(`${HOST}/${currentPath}`);

    let result = await page.evaluate(() => document.documentElement.outerHTML);
    let file = join(process.cwd(), ROOT_PATH, (currentPath || 'index') + '.html');
    let dir = dirname(file);

    if (!(await exists(dir))) {
      await mkdir(dir);
    }

    await writeFile(file, result);
    console.log(`Writed ${file}`);
  }

  browser.close();
  server.close();
}

main()
  .then(() => console.log('All right!'))
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
