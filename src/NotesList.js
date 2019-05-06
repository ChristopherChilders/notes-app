import React from 'react';
import styles from './NotesList.module.css';

function NotesListItem({id, text, handleClick}){
    return (
        <li>
            <a href="#" onClick={(e) =>{ e.preventDefault(); 
            console.log('you clicked'); 
            handleClick(id);}}>{text}</a>
        </li>
    )
}

export default function NotesList({notes}) {
    const items = notes.map(note, i => 
    <NotesListItem id={note.id} text={note.text} handleClick={handleSelection} key={id}/>);
    return(
        <ul className={styles.list}>
            {items}
        </ul>
    )
}