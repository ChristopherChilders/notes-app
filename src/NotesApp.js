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
        return(
            <div className={styles.app}>
                <div className={styles.list}>
                <NotesList notes={this.state.notes} handleSelection={this._selectNote}/>
                </div>
                <NotesDetail />
            </div>
        )
    }
    _selectNote = (id) => {
        // choose a note to show
        this.setState({
            selectedNote: id
        })
    }
}