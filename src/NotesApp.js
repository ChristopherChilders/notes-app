import React from 'react';
import NotesList from './NotesList';
import NotesDetail from './NotesDetails';
import styles from './NotesApp.module.css';

export default class NotesApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedNote: '1001',
            notes: [      // This will hold and array of objects
                {
                    id: '1001',
                    title: 'first note',
                    text:'Hello'
                },
                {
                    id: '1002',
                    title: 'second note',
                    text: 'my name is jeffery'
                },
                {
                    id: '1003',
                    title: 'third note',
                    text: 'cool, alright'
                }
            ]
        }
    }
    render(){
        const theNote = this.state.notes.find(note => this.state.selectedNote === note.id)
        return(
            <div className={styles.app}>
                <div className={styles.list}>
                <NotesList notes={this.state.notes} handleSelection={this._selectNote}/>
                </div>
                <NotesDetail note={theNote}/>
            </div>
        )
    }
    _selectNote = (id) => {
        // choose a note to show
        this.setState({
            selectedNote: id
        })
    }
    _updateNote = (idToUpdate, newText) => {
        // We can't simply reassign the item in the array.
        // So, we need to create a new array with all the existing notes.
        // But, we want to use the newText for the note with id === id.
        const updatedNotes1 = this.state.notes.map(note => {
            if (note.id === idToUpdate){
                // return the modified version
                return {
                    ...note,            // Spread out all the existing key-value pairs.
                    text: newText      // Overwrite *just* the text property
                };
            } else {
                // return a copy of the note as-is
                return {
                    ...note
                }
            }
        });
        this.setState({
            notes: updatedNotes1
        })

        // Using .filter instead of .map
        // const updatedNotes2 = this.state.notes.filter(note => {
        //     return note.id !== idToUpdate;
        // });
        // const theNoteToUpdate = this.state.notes.find(note => note.id === idToUpdate);
        // this.setState({
        //     notes: [
        //         ... updatedNotes2,
        //         {
        //             ...theNoteToUpdate,
        //             text: newText
        //         }
        //     ]
        // });
        // Alternatively:
        // this.setState({
        //     notes: updatedNotes2.concat({
        //         ...theNoteToUpdate,
        //         text: newText
        //     })
        // })
    }
}