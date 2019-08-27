import React, { Component } from 'react';
import NoteEditor from '../NoteEditor/NoteEditor';
import NoteGrid from '../NoteGrid/NoteGrid';

export class NoteApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
     }
      componentDidMount() {
          let localNotes = JSON.parse(localStorage.getItem('notes'));
          if(localNotes) {
              this.setState({
                  notes: localNotes
              })
          }
      }
      componentDidUpdate() {
          this.updateLocalStorage();
      }
      handleDeleteNote(note) {
          let noteId = note.id;
          let newNotes = this.state.notes.filter(function (note) {
              return note.id != noteId;
          });
          this.setState({
              notes: newNotes
          })
      }
      handleNoteAdd(newNote) {
          this.setState({
              notes: [newNote, ...this.state.notes]
          })
      }
      updateLocalStorage() {
        let notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
      render() {
          return (
              <div className="notes-app">
                  <h2 className="app-header">Notes App</h2>
                  <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                  <NoteGrid notes={this.state.notes} onNoteDelete={this.handleDeleteNote}/>
              </div>
          );
      }
}

export default NoteApp
