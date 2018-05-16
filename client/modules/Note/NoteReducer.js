import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE, EDIT_NOTE } from './NoteActions';

const initialState = [];

export default function notes(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTE:
      return [...state, action.note];

   case UPDATE_NOTE: {
   console.log(action.noteId);
     return state.map((note) => {
       return note.id === action.id ? { ...note, ...action.note } : note;
     });
   }
  case DELETE_NOTE:{
	console.log(state);
      return state.filter(note => note.id !== action.noteId);
  }
    case EDIT_NOTE: {
	  console.log(action.noteId);
      return state.map((note) => {
	   console.log(note);
       return note.id === action.noteId ? { ...note, editing: true } : note;
     });
    }
    default:
      return state;
  }
}
