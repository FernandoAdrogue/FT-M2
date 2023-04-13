import './App.css';
import ListaPersonas from './components/ListaPersonas/ListaPersonas';

//LIsta de Personas para probar el componente
const listaPersonas = [
  {name: "Jorge Vega", age:23},
  {name: "Fernando Adrogue", age:49},
  {name: "Paul Esperon", age:30},
];

function App() {
  return (
    <div className="App">
      <ListaPersonas listaPersonas={listaPersonas}/>
    </div>
  );
}

export default App;