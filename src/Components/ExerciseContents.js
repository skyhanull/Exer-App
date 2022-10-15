
import ExerciseDate from './ExerciseDate';
// import styled from 'styled-components';
import '../App.css';
import './ExerciseContents.css'
import { TiDelete } from 'react-icons/ti';
import { useState } from 'react';
// import EditModal from '../ExerciseData/EditModal';
import { FaPen , FaPenSquare } from "react-icons/fa";


const ExerciseContents=(props)=>{
    const { list ,onRemove ,onEdit, text} = props
  
 const [isEdit , setIsEdit]  = useState(false)
 const [localContent, setLocalContent] = useState(props.list.info.text);
// console.log(props.list.info.text)

console.log(text)




const toggleEdit= ()=>{
    setIsEdit(!isEdit)

}

const onEditHandler =()=>{
    
    onEdit(list.id, localContent)
    toggleEdit()
    
    
}

const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(list.info.text);
  };





    return(
    <div className='listback'>
            {/* {isEdit && <EditModal onEditHandler={onEditHandler}  list={list}/>  } */}

        {/* <div></div> */}
    <div className='Listcard'>
    
    
   
   
     <ExerciseDate  list = {props.list}/> 
    {/* <div>{list.info.time} - {list.info.lasttime}</div>   */}

    <div className='kcalcontent'>
        {isEdit ? 
        <div className='editcontent'>
        <textarea
          
        value={localContent}
        onChange={(e) => setLocalContent(e.target.value)} />
        </div>
        
    :<>
    
     <div className='timecontainer'>
    {list.info.time} - {list.info.lasttime}</div>
    {/* <div>{props.list.info.text}</div>  */}
    {/* <div>{localContent}</div> */}
    {text !== undefined ? <div className='textcontent-op'>{text}</div> : <div className='textcontent-op'>{props.list.info.text}</div>}
    
    
    </>  }
        
     </div>


   <div>
    {/* {isEdit ?<button onClick={onEditHandler}  >ook(수정)</button>:  <button onClick={onEditHandler}  >onp(수정)</button>}</div> */}
    {isEdit ? (
          <>
            <button onClick={handleQuitEdit} className='buttonclass1'>수 정 취 소</button>
            <button onClick={onEditHandler} className='buttonclass1'>수 정 완 료 </button>
          </>
        ) : (
          <>
            <button onClick={toggleEdit} className='buttonclass1'><FaPen  size="28px" /></button>
            {/* <button onClick={}>삭 제 하 기</button> */}
            <button className='buttonclass1' type='button' onClick={()=>onRemove(list.id)}>
        <TiDelete size="30px" />
     </button> 
          </>
        )}
    <div>


       
    </div>
    </div>
    </div>
    </div>
    )

}


export default ExerciseContents