import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const MySchedules = ({text, updatingInInput, deleteSchedule}) => {

    console.log(text)
    
    return(
        <div>
            <p>{text}</p>
            <FaEdit onClick={updatingInInput}></FaEdit>
            <RiDeleteBin6Fill onClick={deleteSchedule}></RiDeleteBin6Fill>
        </div>
    )
}