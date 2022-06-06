import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/action';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root');
const EditTask = ({task}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
const [text, setText] = useState(task.description)
const handleChange=(e)=>{
    setText(e.target.value)   
  }
  const dispatch=useDispatch();
//   const handleEdit=(el, text)=>{
// dispatch(editTask(el.id,text))
//   }
  const handleSubmit = (e) => { 
    e.preventDefault();
    const newTask = {
        id:task.id,
        completed:task.completed,
        description:text
    }
dispatch(editTask(newTask))
closeModal()
}
  
  return (
    <div>
<button onClick={openModal}>Edit Task</button>
      <Modal
        isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Edit Task</h2>
        <form action=""  onSubmit={handleSubmit}>
          <input value={text} type="text" placeholder='add to do' onChange={handleChange} />
          <button >Confirmer</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  )
}

export default EditTask