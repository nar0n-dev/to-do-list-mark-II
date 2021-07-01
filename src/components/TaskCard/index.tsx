import { Container, Flex, Heading, HStack, Input, Button } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import { TaskContext } from '../../contexts/TaskContext'
import { TaskList } from '../TaskList'

export const TaskCard = () => {
  const [newTask, setNewTask] = useState('')
  
  const {setTasks} = useContext(TaskContext)
  
  const uid = Math.random()

  const handleCreateNewTask = () => {
    if (newTask.trim() === "") {
      throw new Error("Preencha o campos task")
    } else {
      setTasks(task => [...task, { uid: uid, task: newTask, isCompleted: false }])
      setNewTask('')
    }
  }
  
  return (
    <Container maxWidth="container.xl">
      <Flex flexDirection="column" justifyContent="center" backgroundColor="white" padding={28} marginTop="-6rem" rounded="md" boxShadow="base">
        <Flex flexDirection="row" justifyContent="space-around">
          <Heading>My Tasks</Heading>
          <HStack spacing={3}>
            <Input placeholder="Enter new task" size="lg" value={newTask} onChange={(event) => setNewTask(event.target.value)} />
            <Button colorScheme="green" variant="solid" onClick={handleCreateNewTask}>
              <FiCheckSquare size={22} color="#fff"/>
            </Button>
          </HStack>
        </Flex>
        <TaskList />
      </Flex>
    </Container>
  );
}