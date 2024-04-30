import React from 'react'
import ReactDOM from 'react-dom/client'

import { router } from './routes';
import { RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

import './index.css'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
  }
`

const theme = {
  container: {
    base: "1024px",
  }
};

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
