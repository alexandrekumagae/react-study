import React from 'react'

import { createBrowserRouter } from 'react-router-dom'

import App from './app'

const ExampleUseRef = React.lazy(() => import('./pages/example-use-ref'))
const ExampleUseMemo = React.lazy(() => import('./pages/example-use-memo'))
import { NotFound } from './pages/not-found'
import { ExampleUseComposition } from './pages/example-use-composition'
import { ExampleForm } from './pages/example-form'
import { ExampleUseCallback } from './pages/example-use-callback'
import { ExampleContext } from './pages/example-context'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/use-ref',
    element: <React.Suspense fallback={<div>Carregando...</div>}><ExampleUseRef /></React.Suspense>,
  },
  {
    path: '/use-memo',
    element: <React.Suspense fallback={<div>Carregando página...</div>}><ExampleUseMemo /></React.Suspense>
  },
  {
    path: '/use-composition',
    element: <ExampleUseComposition />,
  },
  {
    path: '/example-form',
    element: <ExampleForm />,
  },
  {
    path: '/example-use-callback',
    element: <ExampleUseCallback />,
  },
  {
    path: '/example-context',
    element: <ExampleContext />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
