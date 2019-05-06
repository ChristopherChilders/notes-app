import React from 'react';

function NotesEditor(props){
    return (
        <textarea value={text} />
    )
}

export default class NotesDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false
        };
    }

    render() {
        // declares the note variables and assigns them to the properties from this.props where the name matches
        const {note} = this.props;
        const {isEditing} = this.state;
        return(
            <div>
                {
                    isEditing ? <NotesEditor text={note.text} /> : note.text
                }
                {note.text}
            </div>
        );
    }
}