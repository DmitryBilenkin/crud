import './Note.css';

function Note(props) {
  
  const onDeleteNoteHandler =()=>{
    props.deleteFetch(props.id.toString()).then(() => props.getFetch()) 
  }

  return (
    <div className='note'>
      <div className='note__content'>{props.content}</div>
      <div className='note__delete-btn' onClick={onDeleteNoteHandler}>X</div>
    </div>
  )
}

export default Note;