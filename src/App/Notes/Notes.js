import React, { Component } from 'react';
import NoteApp from './NoteApp/NoteApp';

export class Memo extends Component {
    
    render() {
        return (
            <div>
                <NoteApp/>
                <div id="content"></div>
            </div>
        )
    }
}

export default Memo
