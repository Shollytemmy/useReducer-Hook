import React from 'react'

export  function Modal({modalContent, closeModal}) {

  setTimeout(() =>{
    closeModal()


  }, 2000)
  // console.log(ModalContent);
  return (
    <div className='modal'>{modalContent}</div>
  )
}
