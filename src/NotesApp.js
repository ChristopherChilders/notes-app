import React from 'react';
import NotesList from './NotesList'
import NotesDetail from './NotesDetails'

export default class NotesApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: []      // This will hold and array of objects
        }
    }
    render(){
        return(
            <div>
                <NotesList />
                <NotesDetail />
            </div>
        )
    }
}