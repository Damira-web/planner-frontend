import './App.css';
import { MySchedules } from './MySchedules'
import { useEffect, useState } from 'react';
import { getAllSchedule, addSchedule, editSchedule, deleteSchedule } from './FetchSchedule';

function App() {

  const [mySchedule, setSchedule] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [scheduleId, setScheduleId] = useState("");


  useEffect(() => {
    getAllSchedule(setSchedule)
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setScheduleId(_id)
  }

  return (
    <div>

      <h1>PLAN YOUR DAY</h1>

      <input
      type="text"
      placeholder="Add your plan"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />

      <button 
      disabled={!title}
      onClick=
      {editing ? () => editSchedule(scheduleId, title, setSchedule, setTitle, setEditing) : () => addSchedule(title, setTitle, setSchedule)}>
      {editing ? "EDIT" : "ADD"}    
      </button>

      {mySchedule.map((schedule) => <MySchedules text={schedule.title} key={schedule._id} 
      updatingInInput = {() => updatingInInput(schedule._id, schedule.title)}
      deleteSchedule={() => deleteSchedule(schedule._id, setSchedule)}
      />
      )}
    </div>
  );
}

export default App;