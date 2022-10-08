


import '../App.css';
import ExerciseDataForm from './ExerciseDataForm';



const ExerciseInform=(props)=>{

  const onSaveExerciseDataHandler=(enteredExpenseData)=>{
    const exData={
    ...enteredExpenseData,
    
  }
 
  props.onSavedFormData(exData)

  }
    return(
    <>
   
      <ExerciseDataForm onSaveExerciseData={onSaveExerciseDataHandler}/>
  
    </>
    )

}


export default ExerciseInform