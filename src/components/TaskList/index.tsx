import { Box, List, ListItem, Button, Icon, ButtonGroup, IconButton, Text} from '@chakra-ui/react'
import { useContext, useEffect } from 'react';
import { FiTrash, FiCheck } from 'react-icons/fi'
import { TaskContext } from '../../contexts/TaskContext';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

type FirebaseTask = Record<string, {
  id?: string
  uid: number
  task: string
  isCompleted: boolean
}>

export const TaskList = () => {
  const { tasks, setTasks, handleRemoveTask, handleIsCompletedTask } = useContext(TaskContext)

  const { user } = useAuth()

  useEffect(() => {
    const taskRef = database.ref(`tasks/${user?.id}`);

    taskRef.on('value', tasks => {
      const databaseTasks = tasks.val();

      const firebaseTasks: FirebaseTask = databaseTasks.task ?? {};

      const parsedTasks = Object.entries(firebaseTasks).map(([key, value]) => {
        return {
            id: key,
            uid: value.uid,
            task: value.task,
            isCompleted: value.isCompleted,
        };
      })

      setTasks(parsedTasks)
    })

    return () => {
      taskRef.off('value')
    }
  }, [user?.id])

  return (
    <Box paddingY={8}>
      <List spacing={3}>
        {tasks.map(task => {
          return (
            <ListItem key={task.uid} borderBottom="1px" borderColor="gray.200" paddingY={2} display="flex" alignItems="center" justifyContent="space-between">
              <ButtonGroup size="sm" variant={task.isCompleted && ("solid") }>
                <IconButton onClick={() => handleIsCompletedTask(task.id)} aria-label="Add to friends" icon={<FiCheck />} colorScheme="green" />
                <Button ml="4px" variant="unstyled"><Text as={task.isCompleted && ("s")}>{task.task}</Text></Button>
              </ButtonGroup>
              <Icon as={FiTrash} w={4} h={4} color="red.500" onClick={() => handleRemoveTask(task.id)}/>
            </ListItem>
          )
        })}
      </List>
    </Box>
  );
}