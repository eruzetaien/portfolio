import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import TransitionOverlay from './components/TransitionOverlay.tsx';
import './index.css';
import { router } from './routes/router.tsx';
import UnsupportedScreen from './pages/UnsupportedScreen'

function Root() {
    const [isUnsupported, setIsUnsupported] = useState(
      window.matchMedia('(max-width: 1328px), (max-height: 640px)').matches
    )

useEffect(() => {
    const mediaQuery = window.matchMedia(
        '(max-width: 1328px), (max-height: 640px)'
    )

    const handleChange = (event: MediaQueryListEvent) => {
      setIsUnsupported(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  if (isUnsupported) {
    return <UnsupportedScreen />
  }

  return (
    <>
      <TransitionOverlay />
      <RouterProvider router={router} />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
