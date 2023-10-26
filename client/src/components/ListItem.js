import { useState } from "react";
import ProgressBar from "./ProgressBar";
import BookIcon from "./BookIcon";
import Modal from "./Modal";
import BookCover from "./BookCover";


const ListItem = ({task, getData}) => {

    const [showModal, setShowModal] = useState(false)

    const deleteItem = async() => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVERURL}/books/${task.id}`, {
          method:'DELETE'
        })

        if(response.status === 200){
          getData()
        }
      
      }  catch (err) {
        console.error(err)
        
      }
    }


    //removed <p className="task-title">Title: {task.title}</p> from the return statement.
    //moved its functionality into the BookCover component


    return (
      <li className="list-item">
        <div className="info-container">
        <BookIcon/>    
        <BookCover task={task}/>
        </div>

        <div className="progress-container">  
        <ProgressBar progress={task.progress}/>
        </div>

        <div className="button-container">
            <button className="edit" onClick={() => setShowModal(true)}>Edit</button>
            <button className="delete" onClick={deleteItem}>Delete</button>
        </div>
        {showModal && <Modal mode={'edit'} setShowModal={setShowModal} getData={getData} task={task}/>}
      </li>
    );
  }
  
  export default ListItem;