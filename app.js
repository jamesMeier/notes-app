const chalk = require('chalk')
const log = console.log
const notes = require('./notes.js')
const yargs = require('yargs')

//cust yargs versin
yargs.version("1.1.0")

//add,remove read list

yargs.command({
    command: 'add',
    description: "add new note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "body of note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    description: "remove note",
    builder: {
        title: {
            describe: 'not title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    description: "list notes",
    handler(argv) {
        notes.listNotes(notes)
    }
})

yargs.command({
    command: 'read',
    description: "read note",
    builder: {
        title: {
            title: "title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

yargs.parse()