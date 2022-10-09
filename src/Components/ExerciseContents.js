
import ExerciseDate from './ExerciseDate';
// import styled from 'styled-components';
import '../App.css';
import './ExerciseContents.css'


const ExerciseContents=(props)=>{

const { list ,onRemove } = props
console.log(props.list.info)
    return(
    <div className='Listcard'>
    
    
   
   
     <ExerciseDate  list = {props.list}/> 
    {/* <div>{list.info.time} - {list.info.lasttime}</div>   */}

    <div className='kcalcontent'>
        {list.info.kcal}
        {list.info.time} - {list.info.lasttime}
        </div>
   
    <div>
    <button className='buttonclass1' type='button' onClick={()=>onRemove(list.id)}>delete</button> 
 
    </div>
    </div>
    )

}


export default ExerciseContents