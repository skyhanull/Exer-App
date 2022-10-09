
import { useState } from 'react';
import '../App.css';
import Modal from './Modal';
import './ExerciseDataForm.css'


const ExerciseDataForm=(props)=>{
//가져올데이터 1.날짜 2.시간 3.칼로리 
const[enterdDate,setEnterdDate]=useState("")
const[enterdTime,setEnterdTime]=useState("")
const[lastTime,setLastTime]=useState("")
const[enterdKcal,setEnterdKcal]=useState("")
const[error,setError] = useState()


const DateHandler=(e)=>{
    setEnterdDate(e.target.value)
}
const TimeHandler=(e)=>{
    setEnterdTime(e.target.value)
    console.log(enterdTime)
    
}
const LastHandler=(e)=>{
    setLastTime(e.target.value)
    
    
}
const KcalHandler=(e)=>{
    setEnterdKcal(e.target.value)
}


const submitHandler = (event) => {
    event.preventDefault();

    if(+enterdKcal < 1){
        setError({
            title: "Error message",
            message :" 칼로리가 작성되지 않았습니다 칼로리를 작성해주세요" 
        })
        return
    }
        
    const exData = {
      
      date: new Date(enterdDate),
      time: enterdTime,
      lasttime: lastTime,
      kcal: enterdKcal
    };

    props.onSaveExerciseData(exData)
    setEnterdDate('');
    setEnterdTime('');
    setLastTime('')
    setEnterdKcal('');

}


  const ErrorHandler =()=>{
    setError(null)
  }

    return(
        <div className='DataForm'>
    {error && <Modal onconfirm={ErrorHandler} message={error.message} title={error.title} /> }
    <form onSubmit={submitHandler}>
     <div className='Exercise-DataForm'>
        <div className='Exercise-inputForm'>
        <label>Date</label>

        <input type="Date"
        min='2017-01-01'
        max='2022-12-31'
        value={enterdDate}
        onChange={DateHandler}
         ></input>
        </div>

        <div className='Exercise-inputForm'>
        <label>Time</label>

        <input type="time"
        
        value={enterdTime}
        onChange={TimeHandler}
        ></input>
         <input type="time"
        
        value={lastTime}
        onChange={LastHandler}
        ></input>
        </div>
        <div className='Exercise-inputForm'>
        <label>Kcal</label>
        <input type="number"
        value={enterdKcal}
        onChange={KcalHandler}
        ></input>
        </div>
        <div className="Exercise-actions">
         
          <button className='buttonclass' type='submit'>Add</button>
        </div>
    </div>  
     </form>
     </div>
    )

}


export default ExerciseDataForm