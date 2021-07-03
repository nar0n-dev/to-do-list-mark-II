import { Center, Image, Button, Flex, Container, HStack, Box } from "@chakra-ui/react";
import { FaGoogle } from 'react-icons/fa';
import { useAuth } from "../../hooks/useAuth";

export const Header = () => {

  const { signInWithGoogle, user } = useAuth()

  const signIn= async () => {
    if (!user) {
        await signInWithGoogle()
        alert("logado")
    }
}
  return (
    <Flex bg={'purple.600'} h={48} color="white" py="2rem" alignItems="flex-start">
      <Container maxW="container.xl">
        <HStack justifyContent="center">
          <Box w="80%">
            <Image src="/images/logo.svg" alt="logo to do list"/>
          </Box>

          <Button colorScheme="red" leftIcon={<FaGoogle />} onClick={signIn}>
            Google
          </Button>
        </HStack>
      </Container>
    </Flex>
  );
}