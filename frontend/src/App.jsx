
import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './routes/routes.js' 

function App() {
  const routing = useRoutes(routes)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
