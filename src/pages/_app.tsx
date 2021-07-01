import { ChakraProvider } from '@chakra-ui/react'
import { TaskContextProvider } from '../contexts/TaskContext';

export function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <TaskContextProvider>
        <Component {...pageProps} />
      </TaskContextProvider>
    </ChakraProvider>
  );
}
export default MyApp
