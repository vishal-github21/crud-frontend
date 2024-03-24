import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Create, Table, Update} from './routes'

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/crud-frontend/' element={<Table/>}></Route>
          <Route path='/crud-frontend/create' element={<Create/>}></Route>
          <Route path='/crud-frontend/update/:id' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
