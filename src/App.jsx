import NotesView from './components/NotesView/NotesView';
import EntryField from './components/EntryField/EntryField';
import AppHeader from './components/AppHeader/AppHeader';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const url = 'http://localhost:7070/notes';
  
  const [dataFetchGET, setDataFetchGET] = useState([]);
  
  async function getFetch() {
    try {
      const responce = await fetch(url);
      const dataGET = await responce.json();
      setDataFetchGET(dataGET);
    } catch (e){
        console.error(e);
    };      
  }; 

  async function postFetch(body) {
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(body)            
      });
      await getFetch();   
    } catch(e) {
        console.error(e)
    };
  };

  async function deleteFetch(id) {
    try {
      await fetch(`${url}/${id}`, {
        method: 'DELETE'
      })
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(()=>{
    getFetch();
  },[]);

  return (
    <div className="App">
      <AppHeader getFetch={getFetch}/>
      <NotesView url={url} dataFetchGET={dataFetchGET} getFetch={getFetch} deleteFetch={deleteFetch}/>
      <EntryField url={url} postFetch={postFetch}/>
    </div>
  );
};

export default App;
