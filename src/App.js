import './App.css'
import { TextStyle } from './components/text-style/text-style'
import { Button } from './components/button/button'

function App() {

  return (
    <>
    
    
    <TextStyle color="blue" uppercase = "uppercase">
      <h3>texto do componente</h3>
    </TextStyle>

    <Button label="Baixar CV">
      <button>Clique Aqui</button>
    </Button>

    </>
  )
}

export default App
