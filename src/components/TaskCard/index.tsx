import { Container, Flex, Heading, Stack, Input, Button } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import { TaskContext } from '../../contexts/TaskContext'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'
import { TaskList } from '../TaskList'

export const TaskCard = () => {
  const [newTask, setNewTask] = useState('')

  const { user } = useAuth()

  const {setTasks} = useContext(TaskContext)
  
  const uid = Math.random()

  const handleCreateNewTask = async () => {

    if (newTask.trim() === "") {
      throw new Error("Preencha o campos task")
    } else {
      setTasks(task => [...task, { uid: uid, task: newTask, isCompleted: false }])
      setNewTask('')

      const taskRef = database.ref(`tasks/${user?.id}/task`);

      await taskRef.push({
          uid: uid, 
          task: newTask, 
          isCompleted: false,
      })
    }
  }
  
  return (
    <Container maxWidth="container.xl">
      <Flex flexDirection="column" justifyContent="center" background="white" padding={{base: '0.5rem', md:'1rem' , lg:'2rem'}} marginTop="-6rem" rounded="md" boxShadow="base">
        <Flex direction={["column", "row"]} justifyContent="space-around">
          <Heading>My Tasks</Heading>
          <Stack spacing={3} direction={{base: "column", md: "row"}} alignItems="center">
            <Input placeholder="Enter new task" size="md" value={newTask} onChange={(event) => setNewTask(event.target.value)} />
            <Button colorScheme="green" variant="solid" onClick={handleCreateNewTask}>
              <FiCheckSquare size={22} color="#fff"/>
            </Button>
          </Stack>
        </Flex>
        <TaskList />
      </Flex>
    </Container>
  );
}