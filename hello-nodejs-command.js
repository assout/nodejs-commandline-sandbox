#!/usr/bin/env node

const program = require('commander');

program
.version('0.0.1')
.usage('<keywords>')
.parse(process.argv);

if (program.args.length) {
  console.log('Keywords: ' + program.args);
} else {
  program.help();
}
