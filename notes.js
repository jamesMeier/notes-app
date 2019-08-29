const fs = require('fs')
const chalk = require('chalk')

const getNotes =  () => 'your notes'

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title===title)
    if (!duplicateNote) {
        notes.push({
            title:title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'));
        
    }else{
        console.log(chalk.red.inverse("ERROR, note title taken"));
    }

}

const listNotes = () => {
    console.log(chalk.red.inverse('your notes:'))
    const notes = loadNotes()
    notes.forEach((note) => console.log(chalk.blue.inverse(note.title)));
}
const saveNotes = (notes) => {
    const dataJSON =JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
    
 const loadNotes = () => {
     try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
     } catch(e){
        return []
     }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title !== title)
    if (notes.length>duplicateNotes.length) {
        console.log(chalk.green.inverse('note removed'))
    } else {
        console.log(chalk.red.inverse('no note found'))
    }
    // notes = duplicateNotes
    // console.log(notes)
    saveNotes(duplicateNotes)
    // const notes = loadNotes()
    // const duplicateNotes = notes.filter( function (note){
    //     return note.title !== title
    // })
    // saveNotes(duplicateNotes)
}
const readNotes = (title) => {
    const notes = loadNotes()
    const foundNote=notes.find((note)=>note.title===title)
    if (foundNote) {
        console.log(chalk.green.inverse(foundNote.title))
        console.log(foundNote.body)
    } else{
        console.log(chalk.red.inverse("no note found"))
    }
}
    

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    loadNotes: loadNotes,
    listNotes:listNotes,
    readNotes:readNotes
}