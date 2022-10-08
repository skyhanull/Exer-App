
// import ExerciseDate from './ExerciseDate';
// import styled from 'styled-components';
import '../App.css';
import './ExerciseContents.css'


const ExerciseContents=(props)=>{

const { list ,onRemove } = props

    return(
    <div className='Listcard'>
    
    
   
    <ul>
    <li>
    <div>dkdk4</div>
    <div>{list.info.time}</div>  
    <div>{list.info.kcal}</div>
    </li>
    <button type='button' onClick={()=>onRemove(list.id)}>delete</button> 
   </ul>
    </div>
    )

}


export default ExerciseContents