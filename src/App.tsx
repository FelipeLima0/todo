import './global.css'
import style from './App.module.css'


import logo from './assets/logo.svg'

import { GrAddCircle } from 'react-icons/gr'
import { NotTask } from './components/NotTask'

import { ChangeEvent, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'

 
export function App() {
  const [taskList, setTaskList] = useState<string[]>([])
  
  const [task, setTask] = useState("")

  const [totalTasks, setTotalTasks] = useState(0);
  const [totalSelectedTasks, setTotalSelectedTasks] = useState(0);  

  function handleNewTask() {
    event?.preventDefault();
    setTaskList(prev => [...prev, task]);
    setTask("");
    setTotalTasks(totalTasks + 1);
}

function handleTask(event: ChangeEvent<HTMLInputElement>) {
  setTask(event?.target.value)
}

function handleDelet(index: number) {
  const updatedTasks = [...taskList];
    updatedTasks.splice(index, 1);
    setTaskList(updatedTasks);
    setTotalTasks(totalTasks - 1)
}

function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
  const isChecked = event.target.checked;
  if (isChecked) {
    setTotalSelectedTasks(totalSelectedTasks + 1);
  } else {
    setTotalSelectedTasks(totalSelectedTasks - 1);
  }
}

  return (
    <div>
      <header className={style.containerHead}>
      <img src={logo} alt="" />
      </header>
      <form 
        onSubmit={handleNewTask}
        className={style.formContainer}>
          <input 
          type="text" 
          placeholder='Adicione uma nova tarefa'
          value={task}
          onChange={handleTask}
          required
        />
        <button>
          <span>Novo</span>
          <GrAddCircle />
        </button>
      </form>
      <div className={style.contTask}>
        <p className={style.left}>
          Tarefas criadas <span>{totalTasks}</span>
        </p>
        <p className={style.rigth }>
          Concluídas{" "}
            {totalSelectedTasks} de {totalTasks}
        </p>
      </div>
        {taskList.length > 0 ? taskList.map((task, index) => (
          <div className={style.contHave}>
            <form className={style.haveTask}>
                <div >
                <input type="checkbox" onChange={handleCheckboxChange}/>
                <p>{task}</p>
                </div>
                <span><AiFillDelete onClick={() => handleDelet(index)} className={style.icon} /></span>

            </form>
          </div>
        )) : <NotTask />}

    </div>
  )
}