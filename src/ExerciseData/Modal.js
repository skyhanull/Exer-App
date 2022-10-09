import './Modal.css'
import { BiError } from "react-icons/bi";

const Modal=(props)=>{

    return(
        <div className="modal"  onClick={props.onconfirm}>
            <div className='modalerror-title'><BiError />{props.title}</div>
            <div className='modalerror-message'>{props.message}</div>
            <div className="modalerror-button">
            <button className="click-errorbtn"onClick={props.onconfirm}>click</button>
            </div>
           
        </div>
    )
}

export default Modal