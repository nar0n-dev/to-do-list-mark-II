import { createContext, ReactNode, useState } from "react";

type Task = {
  uid: number
  task: string
  isCompleted: boolean
}

type TaskListProps = {
  tasks: Task[]
}

type TaskContextProps = {
  children: ReactNode
}

export const TaskContext = createContext({} as TaskListProps);

export const TaskContextProvider = (props: TaskContextProps) => {
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <TaskContext.Provider value={{ tasks }}>
      {props.children}
    </TaskContext.Provider>
  )
}