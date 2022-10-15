import ExerciseContents from '../Components/ExerciseContents';
import '../App.css';
import './SubInfo.css'

const SubInfo=({list, onRemove , onEdit})=>{

  
console.log(list)

    return(
    <div className='SubInfo'>
        {list.map((list)=>{
            return(
             <ExerciseContents 
             key={list.id}
             list={list} 
             onRemove={onRemove}
             onEdit={onEdit}
             text={list.text}
              />
            )
        })}

        
    </div>
    )

}


export default SubInfo