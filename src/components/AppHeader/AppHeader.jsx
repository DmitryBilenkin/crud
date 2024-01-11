import './AppHeader.css'

function AppHeader(props) {

    const onUpdateHandler =()=>{
        props.getFetch();
    };

  return (
    <div className='app-header'>
        <h1 className='app-header__header'>Notes</h1>
        <div className='update-btn' onClick={onUpdateHandler}>
        <img className='update-btn__img' src='https://cdn-icons-png.flaticon.com/512/117/117122.png' alt='update-logo'/>
        </div>
    </div>
  )
}

export default AppHeader
