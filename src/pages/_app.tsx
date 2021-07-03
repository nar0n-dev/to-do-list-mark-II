import { ChakraProvider } from '@chakra-ui/react'
import { TaskContextProvider } from '../contexts/TaskContext';
import { AuthContextProvider } from '../contexts/AuthContext';

export function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <TaskContextProvider>
          <Component {...pageProps} />
        </TaskContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}
export default MyApp
