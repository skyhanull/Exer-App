
import './EditModal.css'
const EditModal=(props)=>{

    const {onEditHandler, list} =props
    console.log(props.list)


    return(
        <div className="modaledit">
            <form>
            <input
            type="text"
            ></input>
             <button onEditHandler={()=>onEditHandler(list.id)}>x</button> 
            </form>
        </div>
    )
}

export default EditModal