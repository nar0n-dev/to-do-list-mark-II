import React, { createContext, ReactNode, useState } from "react";

type TaskType = {
  uid: number
  task: string
  isCompleted: boolean
}

type PropsTaskContext = {
  tasks: TaskType
  setTasks: React.Dispatch<any>
  handleRemoveTask: (uid: number) => void
  handleIsCompletedTask: (uid: number) => void
}

type TaskContextProviderProps = {
  children: ReactNode,
}

export const TaskContext = createContext({} as PropsTaskContext);

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [tasks, setTasks] = useState<TaskType[]>([])

  const handleRemoveTask = (uid: number) => {
    const removeTask = tasks.filter(task => task.uid !== uid)
    setTasks(removeTask)
  }

  const handleIsCompletedTask = (uid: number) => {
    const finishTask = tasks.map(tasks => tasks.uid === uid ? {...tasks, isCompleted: !tasks.isCompleted} : tasks)
    setTasks(finishTask)
    console.log(finishTask)
  }

  return (
    <TaskContext.Provider 
    value={{ tasks, setTasks, handleRemoveTask, handleIsCompletedTask }}>
      {children}
    </TaskContext.Provider>
  )
}