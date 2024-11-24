import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import chatComp from "./components/chat.tsx"

function App() {
  const [count, setCount] = useState(0)

  return <chatComp />;
}

export default App
