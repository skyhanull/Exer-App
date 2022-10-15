


import '../App.css';
import './ExerciseInform.css'
import ExerciseDataForm from './ExerciseDataForm';



const ExerciseInform=(props)=>{

  const onSaveExerciseDataHandler=(enteredExpenseData)=>{
    const exData={
    ...enteredExpenseData,
    
  }
 
  props.onSavedFormData(exData)

  }
    return(
    <div className='Datacontent'>
   
      <ExerciseDataForm onSaveExerciseData={onSaveExerciseDataHandler}/>
  
    </div>
    )

}


export default ExerciseInform