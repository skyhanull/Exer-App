
import ExerciseDate from './ExerciseDate';
// import styled from 'styled-components';
import '../App.css';
import './ExerciseContents.css'
import { TiDelete } from 'react-icons/ti';


const ExerciseContents=(props)=>{

const { list ,onRemove } = props
console.log(props.list.info)
    return(
    <div className='Listcard'>
    
    
   
   
     <ExerciseDate  list = {props.list}/> 
    {/* <div>{list.info.time} - {list.info.lasttime}</div>   */}

    <div className='kcalcontent'>
        {/* <div className='content-box'> */}
        <div className='timecontainer'>{list.info.time} - {list.info.lasttime}</div>
        <div>{list.info.text}</div>
        
       
        
        </div>
   
    <div>
    <button className='buttonclass1' type='button' onClick={()=>onRemove(list.id)}>
        <TiDelete size="30px" />
    
        </button> 
 
    </div>
    </div>
    )

}


export default ExerciseContents