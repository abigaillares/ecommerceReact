import ItemListContainer from './components/itemListContainer/itemListContainer'
import NavBar from './components/NavBar/NavBar'
import './App.css'

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos!"}/>

    </div>
  )
}

export default App
