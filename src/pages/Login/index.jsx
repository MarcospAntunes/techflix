import React from 'react';
import { Link } from "react-router-dom";
import styles from './Login.module.css'

function Login() {
    function form() {
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault()
            window.location.href ='/home'
        })
    }

    return (
        <>
            <main className={styles.mainLogin}>
                <section>
                    <h1>Faça o login para acessar nossos serviços!</h1>
                </section>

                <section className={styles.form}>
                    <h2>Entrar</h2>
                    <form action="post">
                        <label htmlFor="email">
                            <input type="email" name="email" id="email" placeholder="Email" minLength={4} required /> <br />
                        </label>

                        <label htmlFor="senha">
                            <input type="password" name="senha" id="senha" placeholder="Senha" minLength={8} required /> <br />
                        </label>

                        <p style={{fontSize:'12px', padding: '10px'}}>Não tem uma conta? <Link to={'/registrar'}>clique aqui</Link> para registrar</p>
                        <input type="submit" value="Entrar" onClick={form}/>
                    </form> 
                </section>

            </main>
        </>
    )
}

export default Login;