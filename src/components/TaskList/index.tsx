import { Box, List, ListItem, Checkbox, Icon} from '@chakra-ui/react'
import { FiTrash } from 'react-icons/fi'

export const TaskList = () => {

  return (
    <Box paddingY={8}>
      <List spacing={3}>
        <ListItem borderBottom="1px" borderColor="gray.200" paddingY={2} display="flex" justifyContent="space-between">
          <Checkbox>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quo odit a, quibusdam </Checkbox>
          <Icon as={FiTrash} w={4} h={4} color="red.500" />
        </ListItem>

        <ListItem borderBottom="1px" borderColor="gray.200" paddingY={2} display="flex" justifyContent="space-between">
          <Checkbox>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quo odit a, quibusdam </Checkbox>
          <Icon as={FiTrash} w={4} h={4} color="red.500" />
        </ListItem>

        <ListItem borderBottom="1px" borderColor="gray.200" paddingY={2} display="flex" justifyContent="space-between">
          <Checkbox>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quo odit a, quibusdam </Checkbox>
          <Icon as={FiTrash} w={4} h={4} color="red.500" />
        </ListItem>
      </List>
    </Box>
  );
}