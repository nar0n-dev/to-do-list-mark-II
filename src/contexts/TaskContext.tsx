import React, { createContext, ReactNode, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

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

  const { user } = useAuth()

  const handleRemoveTask = async (uid: string) => {
    if(window.confirm('Are you sure you want to remove this task?')) {
        await database.ref(`tasks/${user?.id}/task/${uid}`).remove();
    }
  }

  const handleIsCompletedTask = async (uid: number) => {   
    await database.ref(`tasks/${user?.id}/task/${uid}`).update({
     isCompleted: true
    })
  }

  return (
    <TaskContext.Provider 
    value={{ tasks, setTasks, handleRemoveTask, handleIsCompletedTask }}>
      {children}
    </TaskContext.Provider>
  )
}