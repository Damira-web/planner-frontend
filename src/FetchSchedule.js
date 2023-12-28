import axios from 'axios';

const getAllSchedule = (setSchedule) => {
    axios.get('https://planner-backend-45jm.onrender.com')
    .then(({data}) => {console.log(data)
    setSchedule(data)
    })
}

const addSchedule = (title, setTitle, setSchedule) => {
    axios.post('https://planner-backend-45jm.onrender.com/saveSchedule', {title})
    .then((data) =>{
        console.log(data)
        setTitle("")
        getAllSchedule(setSchedule)
    })
}

const editSchedule = (scheduleId, title, setSchedule, setTitle, setEditing) => { 
    axios.post('https://planner-backend-45jm.onrender.com/editSchedule', {_id: scheduleId, title})
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllSchedule(setSchedule)
    })
}

const deleteSchedule = (_id, setSchedule) => {
    axios.post('https://planner-backend-45jm.onrender.com/deleteSchedule', {_id})
    .then((data) => {
        console.log(data)
        getAllSchedule(setSchedule)
    })
}

export {getAllSchedule, addSchedule, editSchedule, deleteSchedule};