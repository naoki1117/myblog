import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient,  QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MantineProvider } from '@mantine/core';

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return   (  
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      /** Put your mantine theme override here */
      colorScheme: 'dark',
      
    }}
  >
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </MantineProvider>
  )
}

export default MyApp
