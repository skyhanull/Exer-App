
// import styled from 'styled-components';
import '../App.css';
import './MainInfo.css'
import ExerciseInform from '../ExerciseData/ExerciseInform';


const MainInfo=(props)=>{

    const FormDataHandler=(data)=>{
        const InfomationData= data
       
        props.addDataInfo(InfomationData)
    }

    return(
            <div className='MainInfo'>
         <ExerciseInform  onSavedFormData={FormDataHandler}/>
            
             </div>

        
    )
    
          
   


}


export default MainInfo