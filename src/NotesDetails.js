import React from 'react';

export default class NotesDetail extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        // declares the note variables and assigns them to the properties from this.props where the name matches
        const {note} = this.props;
        return(
            <div>
                {note.text}
            </div>
        );
    }
}