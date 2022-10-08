import ExerciseContents from '../Components/ExerciseContents';
import '../App.css';
import './SubInfo.css'

const SubInfo=(props)=>{

   


    return(
    <div className='SubInfo'>
        
        <ExerciseContents list={props.list} onRemove={props.onRemove} />
        
    </div>
    )

}


export default SubInfo