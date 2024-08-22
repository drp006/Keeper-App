import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isClick, setClick] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function createAreaClick(){
    setClick(true);
  }
  return (
    <div>
      <form className="create-note">
        {isClick ? <input name="title" onChange={handleChange} value={note.title}placeholder="Title" /> : null}
        <textarea onClick={createAreaClick} name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows={isClick ? 3 : 1}/> 
        <Zoom in={isClick}>
          <Fab onClick={submitNote} color="secondary" >
            <AddIcon />
          </Fab>
        </Zoom> 
        
      </form>
    </div>
  );
}

export default CreateArea;
