import { FaRegTrashAlt } from "react-icons/fa"
import { CiEdit } from "react-icons/ci"


function ToDo({text,updater,deleter}){
    return (
        <section className="todo">
            <p className="todo-title">{text}</p>
            <div className="icons-cont">
                <CiEdit className="edit" onClick={updater}/>
                <FaRegTrashAlt className="trash" onClick={deleter}/>
            </div>
      </section>
    )
}

export default ToDo

