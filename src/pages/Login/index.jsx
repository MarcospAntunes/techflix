import React from 'react';
import { Link } from "react-router-dom";
import styles from './Login.module.css'
import { useAuth } from '../../hooks';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    if(!email || !password) {
      setError("Preencha todos os campos")
      return
    }
    const res = login(email, password)

    if(res) {
      setError(res)
      return
    }
    navigate('/home')
    window.location.reload()
  }

  return (
    <main className={styles.mainLogin}>
      <section>
        <h1>Faça o login para acessar nossos serviços!</h1>
      </section>

      <section className={styles.form}>
        <h2>Entrar</h2>
        <form method="post">
          <label htmlFor="email">
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Email" 
              minLength={4} 
              required
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]} 
            /> 
            <br />
          </label>

          <label htmlFor="senha">
            <input 
              type="password" 
              name="senha" 
              id="senha" 
              placeholder="Senha" 
              minLength={8} 
              required
              value={password}
              onChange={(e) => [setPassword(e.target.value), setError("")]} 
            /> 
            <br />
          </label>

          <p style={{fontSize:'12px', padding: '10px'}}>Não tem uma conta? <Link to={'/registrar'}>clique aqui</Link> para registrar</p>
          <input 
            type="submit" 
            value="Entrar" 
            onClick={(e) => handleLogin(e)}
          />
          <p style={{color: "#d83131"}}>{error}</p>
        </form> 
      </section>
    </main>
  )
}

export default Login;