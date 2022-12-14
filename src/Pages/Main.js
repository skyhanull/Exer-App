
// import styled from "styled-components"
 import MainInfo from "./MainInfo"
import SubInfo from "./SubInfo"
import { useState } from "react"
import './Main.css'
// import ExerciseContents from "../Components/ExerciseContents"


const Main=()=>{

    
const [userlist,setUserlist] = useState([])

const addDataInfo =(info)=>{
    let id = 0;
    if(userlist.length > 0){
      id = userlist[0].id + 1
    }else{
      id =1 
    }
    let list = {id: id ,info}
    let newlist = [list,...userlist]
    setUserlist(newlist)
  }


const onRemove =(id)=>{
    setUserlist([...userlist].filter((list) => list.id !== id ))
}

const onEdit = (id, newcontent) =>{
  setUserlist(userlist.map((list)=> list.id === id ? {...list, text : newcontent}: list))
}
console.log(userlist)

 return(
        <div className="divideform">
        <MainInfo addDataInfo={addDataInfo}/>
       <SubInfo list={userlist} onRemove={onRemove} onEdit={onEdit}/>
        </div>
    )
}

export default Main