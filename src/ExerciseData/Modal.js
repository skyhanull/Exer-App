import './Modal.css'

const Modal=(props)=>{

    return(
        <div className="modal"  onClick={props.onconfirm}>
            {props.message}
        <button onClick={props.onconfirm}>click</button>
        </div>
    )
}

export default Modal