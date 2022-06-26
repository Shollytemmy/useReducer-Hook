import { useReducer, useState } from 'react';
import { Modal } from './Components/Modal';
import { reducerFunc } from './reducerFunc';
import './App.css';

const defaultState ={
  people: [],
  isModalOpen: false,
  modalContent: ''

}

function App() {
  
  const [state, dispatch] = useReducer(reducerFunc, defaultState)
  const [person, setPerson] = useState({firstName: '', email: ''})


    const handleSubmit = (e) => {
      e.preventDefault();

      if(person.firstName && person.email){
        const newperson = {...person, id: new Date().getTime().toString(), firstName: person.firstName, email: person.email}

        dispatch({type: 'ADD_ITEM', payload: newperson})

        setPerson({firstName: '', email: ''})
      } else{
        dispatch({type: 'NO_VALUE'})
      }


      
    }

    function closeModal(){
      dispatch({type: 'CLOSE'})


    }

    



  return (
    <>
    
    <div className="App">
      <div className=''>{state.isModalOpen && <Modal modalContent={state.modalContent} closeModal = {closeModal} />}</div>
      <form onSubmit={handleSubmit} className='form'>
        <div className="form-control">

          <label htmlFor="firstName" className='label'>FirstName: </label>
            <input type="text" id='name' name='firstName' value={person.firstName} onChange={(e) => setPerson({...person, firstName: e.target.value})} />
        </div>
        

        <div className="form-control">
          <label htmlFor="email" className='label'>Email: </label>
            <input type="text" id='name' name='email' value={person.email} onChange={(e) => setPerson({...person, email: e.target.value})} />
        </div>
        <button type='submit' className='btn'>add</button>
      </form>

      {state.people.map((person) =>{
          const {id, firstName, email} = person
          
          return(
            <section key={id} className="list">
             <p>{firstName}</p>
             <p>{email}</p>
             <button style={{width: '', height: '1.7rem'}} className='cta' onClick={() => dispatch({type: 'REMOVE', payload: id})} >remove</button> 

              </section>
          )
        })}

    </div>

         
        
      
    </>
  );
}

export default App;
