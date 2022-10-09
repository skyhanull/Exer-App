
import React from 'react';
import './ExerciseDate.css'


const ExerciseDate=(props)=>{


   
    const month = props.list.info.date.toLocaleString('en-GB',{month: 'numeric'} );
    const day = props.list.info.date.toLocaleString('en-GB', { day: '2-digit' });
    const year = props.list.info.date.getFullYear()

    console.log(month)
    return(
        <div className="expense-date">
            <div className="expense-date__year">{year}</div>
        <div className="expense-date__month">{month}/{day}</div>
       
      
      </div>
    )
}

export default ExerciseDate