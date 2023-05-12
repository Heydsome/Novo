import {useState} from 'react'
import Task from './Task'

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(0)
  const onSubmit = (e)=>{
    e.preventDefault()
    if(!text){
        alert('Please add a task')
        return
    }
    onAdd({text,day,reminder})
    setText('')
    setDay('')
    setReminder(0)
  }
  return (
    <form className = 'add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type = 'text' placeholder='Add Task'
                value={text} onChange={(e)=> setText(e.target.value)}

            />
            
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type = 'text' placeholder='Add Day'
                value={day} onChange={(e)=> setDay(e.target.value)}
            />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type = 'checkbox' 
            checked = {reminder} //always false when loading
            value ={reminder} 
            onChange={(e)=> setReminder(e.currentTarget.checked)}/>
        </div>
        <input type = 'submit' value ="Save Task" className = 'btn btn-block'
         

         />
    </form>
  )
}

export default AddTask
