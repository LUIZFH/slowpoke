#!/usr/bin/env node

require('./core/bootstrap')()
var program = require('commander')

const server = require('./core/server')
const seeder = require('./core/seeder')

program.version('0.0.1')
program.option('server, --server', 'Start server', server )
program.option('seeder, --seeder', 'Database seeder', seeder )
program.parse(process.argv)