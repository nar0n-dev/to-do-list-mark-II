import { Center, Image } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Center bg={'purple.600'} h={48} color="white" py="2rem" alignItems="flex-start">
      <Image src="/images/logo.svg" alt="logo to do list"/>
    </Center>
  );
}