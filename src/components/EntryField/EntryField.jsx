import './EntryField.css'
import { useState } from 'react'

function EntryField(props) {
    const [fieldsValue, setFieldsValue] = useState('');
    const [dataFetchPOST, setDataFetchPOST] = useState({})

    const onFieldHandler =(event)=>{
        setFieldsValue(event.target.value);
        setDataFetchPOST(prev => prev = 
            {
                id: 0,
                content: event.target.value
            });
    };

    const onAddNoteHandler =(event)=>{
        event.preventDefault();

        props.postFetch(dataFetchPOST);        
        setFieldsValue('');
    };
    
  return (
    <form className='entry-container' onSubmit={onAddNoteHandler} >
        <div className='entry-field_title'>New note</div>
        <div className='entry-field_container'>
            <textarea className='entry-field' onChange={onFieldHandler} value={fieldsValue} />
            <button className='btn-send'>
                <img className='btn-send__img' src='https://cdn-icons-png.flaticon.com/512/60/60525.png' alt='send-logo'/>
            </button>
        </div>          
    </form>    
  )
}

export default EntryField;
