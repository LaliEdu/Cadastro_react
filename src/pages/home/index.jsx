import { useEffect } from 'react';
import './style.css'
import Trash from '../../assets/lixeira.png'
import api from '../../services/API'

function Home() {

  let users = []

  async function getUsers() {
    users = await api.get('/Users')
    } 

  useEffect(() => {
    getUsers()
  }, [])
  console.log(users)

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='name' type="text" placeholder='Enter your name' />
        <input name='email' type="email" placeholder='Enter your email' />
        <input name='age' type="number" placeholder='Enter your age' />
        <button type="button" className='button'>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>user.name</span></p>
            <p>Email: <span>user.email</span></p>
            <p>Age: <span>user.age</span></p>
          </div>
          
          <button>
            <img src={Trash} alt="Trash" />
          </button>
        </div>

      ))}
    </div>      

  )
}

export default Home