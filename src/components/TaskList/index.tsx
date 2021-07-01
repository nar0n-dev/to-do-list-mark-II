import { Box, List, ListItem, Button, Icon, ButtonGroup, IconButton, Text} from '@chakra-ui/react'
import { useContext } from 'react';
import { FiTrash, FiCheck } from 'react-icons/fi'
import { TaskContext } from '../../contexts/TaskContext';

export const TaskList = () => {
  const { tasks, handleRemoveTask, handleIsCompletedTask } = useContext(TaskContext)
  return (
    <Box paddingY={8}>
      <List spacing={3}>
        {tasks.map(task => {
          return (
            <ListItem key={task.uid} borderBottom="1px" borderColor="gray.200" paddingY={2} display="flex" alignItems="center" justifyContent="space-between">
              <ButtonGroup size="sm" variant={task.isCompleted && ("solid") }>
                <IconButton onClick={() => handleIsCompletedTask(task.uid)} aria-label="Add to friends" icon={<FiCheck />} colorScheme="green" />
                <Button ml="4px" variant="unstyled"><Text as={task.isCompleted && ("s")}>{task.task}</Text></Button>
              </ButtonGroup>
              <Icon as={FiTrash} w={4} h={4} color="red.500" onClick={() => handleRemoveTask(task.uid)}/>
            </ListItem>
          )
        })}
      </List>
    </Box>
  );
}