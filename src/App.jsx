import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Button } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Button variant="primary">
        Submit
      </Button>
    </Container>
  )
}

export default App
