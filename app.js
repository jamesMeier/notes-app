const chalk = require('chalk')
const log = console.log
const getNotes = require('./notes.js')
const yargs = require('yargs')

//cust yargs versin
yargs.version("1.1.0")

//add,remove read list

yargs.command({
    command: 'add',
    description: "add new note",
    handler: function () {
        log('adding new note')
    }
})

yargs.command({
    command: 'remove',
    description: "remove note",
    handler: function () {
        log('removing new note')
    }
})

log(yargs.argv)