import ExerciseContents from '../Components/ExerciseContents';
import '../App.css';
import './SubInfo.css'

const SubInfo=({list, onRemove})=>{

   


    return(
    <div className='SubInfo'>
        {list.map((list)=>{
            return(
             <ExerciseContents 
             key={list.id}
             list={list} 
             onRemove={onRemove} />
            )
        })}

        
    </div>
    )

}


export default SubInfo