/* import './App.css' */
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path='/' element= {<ItemListContainer greeting={'Bienvenidos a ZapaSport'}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path='*' element={<h2>404 NOT FOUND</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
