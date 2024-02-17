import { createGlobalStyle } from 'styled-components'
import { AppRoutes } from "./routes"

function App() {

  return (
  <>
    <Global/>
    <AppRoutes/>
  </>
  )
}

const Global = createGlobalStyle`
*{margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  }
`

export default App
