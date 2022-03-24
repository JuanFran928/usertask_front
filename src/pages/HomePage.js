import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'

function HomePage() {

  let [tasks, setTasks] = useState([])
  let {authTokens} = useContext(AuthContext)

  useEffect(()=>{
    getTasks()
  }, [])

  let getTasks= async() =>{
    let response = await fetch('http://127.0.0.1:8080/api/task-list/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })

    let data = await response.json()
    setTasks(data)
  }




  return (
    <div>
      <p>Yo are logged in to the home page</p>
      <ul>
        {tasks.map(task => (<li key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
</div>
  )
}

export default HomePage