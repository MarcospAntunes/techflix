import React from 'react';
import { Link } from "react-router-dom";
import styles from './Reigster.module.css'
import { useAuth } from '../../hooks';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';

function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [emailConf, setEmailConf] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConf, setPasswordConf] = useState("")
  const [error, setError] = useState("")

  const handleRegister = (e) => {
    e.preventDefault()
    if(!email || !emailConf || !password || !passwordConf || !name) {
      setError("Preencha todos os campos")
      return
    } else if (email !== emailConf) {
      setError("Emails não são iguais")
      return
    } else if (password !== passwordConf) {
      setError("As senhas não são iguais")
      return
    }

  const res = register(name, email, password)
    if(res) {
      setError(res)
      return
    }

    alert("Usuário registrado com sucesso!")
    navigate("/login")
  }

  return (
    <main className={styles.mainRegister}>
      <section>
        <h1>Faça o login para acessar nossos serviços!</h1>
      </section>

      <section className={styles.form}>
        <h2>Entrar</h2>
        <form method="post">
        <label htmlFor="nome">
          <input 
            type="text" 
            name="nome" 
            id="nome" 
            placeholder="Nome Completo" 
            minLength={4} 
            required
            value={name}
            onChange={(e) => [setName(e.target.value), setError("")]} 
          /> 
          <br />
          </label>
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

          <label htmlFor="emailConf">
            <input 
              type="email" 
              name="emailConf" 
              id="emailConf" 
              placeholder="Confirme seu e-mail" 
              minLength={4} 
              required
              value={emailConf}
              onChange={(e) => [setEmailConf(e.target.value), setError("")]} 
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
            
          <label htmlFor="passwordConf">
            <input 
              type="password" 
              name="passwordConf" 
              id="passwordConf" 
              placeholder="Confirme sua senha" 
              minLength={8} 
              required
              value={passwordConf}
              onChange={(e) => [setPasswordConf(e.target.value), setError("")]} 
            /> 
            <br />
          </label>

          <p style={{fontSize:'12px', padding: '10px'}}>Já possui uma conta? <Link to={'/login'}>clique aqui</Link> para realizar o login.</p>
          <input 
            type="submit" 
            value="Registrar" 
            onClick={(e) => handleRegister(e)}
          />
          <p style={{color: "#d83131"}}>{error}</p>
        </form> 
      </section>
    </main>
  )
}

export default Register;