import React, {useContext} from 'react';
import NoteContext from '../Context/noteContext';

function About() {
    const a = useContext(NoteContext)
    return (
        <div>
        This is About {a.title}
        </div>
    )
}

export default About
