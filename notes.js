const fs = require('fs')
const chalk = require('chalk')

const getNotes = function (){
    return 'your notes'
} 
const addNote = function (title,body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length ===0) {
        notes.push({
            title:title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.greem.inverse('new note added'));
        
    }else{
        console.log(chalk.red.inverse("ERROR, note title taken"));
    }

}
const saveNotes = function (notes) {
    const dataJSON =JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
    
 const loadNotes = function (){
     try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
     } catch(e){
        return []
     }
}

const removeNote = function (title) {
    let notes = loadNotes()
    let duplicateNotes = notes.filter(function (note) {
        return note.title !== title
    })
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
    

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    loadNotes: loadNotes
}