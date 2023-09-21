import { useState } from "react";
import { useCookies } from "react-cookie";
import Modal from "./Modal";
import GetBook from "./BookImport";



const ListHeader = ({listName, getData}) => {

  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [showModal, setShowModal] = useState(false)
  const [showImport, setShowImport] = useState(false)


    const signOut = () => {
         //console.log('signout') //placeholder for signout function
         removeCookie('Email')
         removeCookie('AuthToken')

         window.location.reload()
    }

    return (
      <div className="list-header">
        <h1>{listName}</h1>
        <div className="button-container">
            <button className="create" onClick={() => setShowImport(true)}>IMPORT</button>
            <button className="create" onClick={() => setShowModal(true)}>ADD NEW</button>
            <button className="signout" onClick={signOut}>SIGN OUT</button>
        </div>
        {showImport && <GetBook setShowImport={setShowImport} getData={getData}/>} 
        {showModal && <Modal mode={'create'} setShowModal={setShowModal} getData={getData}/>}         
      </div>
    );
  }
  
  export default ListHeader;