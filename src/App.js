import './App.css'
import {FiSearch} from 'react-icons/fi'
import {useState} from 'react'
import api from './consumoapi/api'


function App() {

 async function iniciarPesquisa(params) {
  
  if (input === '') {
    alert('Digite um CEP para poder realizar a pesquisa !')
  }


  try{

    const esperar = await api.get(`${input}/json`)
    setCep(esperar.data)
    setInput('')

  }catch{

    alert('Algo deu errado, tente novamente !')

  }  

  }

  const [input, setInput] = useState('')
  const [cep, setCep] = useState(input)

  return (
    
    <main id='primeiraMain'>

    <article id='tituloArticle'>

    <div id='divTitulo'>
      <h1 id='tituloPrincipal'>Procura CEP</h1>
    </div> 

    </article>

    <article>

    <div id='divInput'>
      <input placeholder='Digite um CEP...' value={input} onChange={(e) => setInput(e.target.value)}/>
      <button id='botao' onClick={iniciarPesquisa}>  <FiSearch/>  </button>  
    </div>

    </article>  
      
    <article id='infoArticle'>
      {Object.keys(cep).length > 0 && (
        <div id='informacoesCep'>
        <h1>CEP:{cep.cep} </h1>
  
        <p>-{cep.logradouro}-</p>
        <p>{cep.bairro}-</p>
        <p>{cep.localidade}/{cep.uf}</p>
        
  
      </div>
      
      )}
    </article>




    </main>
  );
}

export default App;
