
import { useState } from 'react';
import '../App.css';
import Modal from './Modal';
import './ExerciseDataForm.css'
import { BsFillCalendarCheckFill} from "react-icons/bs";
import { BiTimeFive  } from "react-icons/bi";


const ExerciseDataForm=(props)=>{
//가져올데이터 1.날짜 2.시간 3.칼로리 
const[enterdDate,setEnterdDate]=useState("")
const[enterdTime,setEnterdTime]=useState("")
const[lastTime,setLastTime]=useState("")
const[enterdtext,setEnterdText]=useState("")
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
    setEnterdText(e.target.value)
}


const submitHandler = (event) => {
    event.preventDefault();


   if(enterdtext.trim().length === 0 || Object.keys(enterdDate).length === 0){
    setError({
        title: 'invaild input',
        message: '내용을 입력해주세요'
       })
        return;
   }
    const exData = {
      
      date: new Date(enterdDate),
      time: enterdTime,
      lasttime: lastTime,
      text: enterdtext
    };

    props.onSaveExerciseData(exData)
    setEnterdDate('');
    setEnterdTime('');
    setLastTime('')
    setEnterdText('');

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
        <label><BsFillCalendarCheckFill /></label>

        <input type="Date"
        min='2017-01-01'
        max='2022-12-31'
        value={enterdDate}
        onChange={DateHandler}
         ></input>
        </div>

        <div className='Exercise-inputForm'>
        <label><BiTimeFive size='20px'/></label>

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
        <label>text</label>
        <input type="text"
        value={enterdtext}
        onChange={KcalHandler}
        placeholder="내용을 입력해주세요"
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