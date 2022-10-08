
import React from 'react';


const ExerciseDate=({Info})=>{


   
    const month = Info.date.toLocaleString('en-GB',{month: 'numeric'} );
    const day = Info.date.toLocaleString('en-GB', { day: '2-digit' });
    const year = Info.date.getFullYear()

    console.log(month)
    return(
        <div className="expense-date">
            <div className="expense-date__year">{year}</div>
        <div className="expense-date__month">{month}/{day}</div>
       
      
      </div>
    )
}

export default ExerciseDate