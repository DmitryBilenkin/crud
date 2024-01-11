import Note from '../Note/Note';
import './NotesView.css'

function NotesView(props) {
  return (
    <div className='notes-container'>
         {props.dataFetchGET.length===0 ? 
         <div className='init-text'>Введите текст в поле и нажмите "Отправить" для отображения заметок</div> 
         : 
         props.dataFetchGET.map(note => <Note key={note.id} id={note.id} content={note.content} deleteFetch={props.deleteFetch} getFetch={props.getFetch} />)}
    </div>
  )
}

export default NotesView;
