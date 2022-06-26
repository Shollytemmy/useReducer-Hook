  // console.log(state, action)
  // let new name = [...state.people, action.payload]
  // return{...state, people: peole.concat()} payload 

  // return {...state, people: state.people.concat(action.payload)}
  
  //return{...state, people: state.people.concat(action.payload),isModalOpen: true, modalContent: 'Item added'} 



  export const reducerFunc = (state, action) => {

  const newPerson = state.people.concat(action.payload)
   
  if(action.type === 'ADD_ITEM'){
    return{...state, people: newPerson,isModalOpen: true, modalContent: 'Item added'} 
  }

  if(action.type === 'NO_VALUE'){
    return {...state, isModalOpen: true, modalContent:'Please enter field value'}
  }

  if(action.type === 'REMOVE'){
    const newPerson = state.people.filter((person) => person.id !== action.payload)
    return {...state, people: newPerson}
  }

  if(action.type === 'CLOSE'){
    return {...state, isModalOpen: false}
  }

   throw new Error('No matching action type')
}