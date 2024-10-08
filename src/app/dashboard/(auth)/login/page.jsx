"use client"
import React from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {

  const session = useSession();
  const router = useRouter();



  if(session.status === "loading"){
    return <p>Loading...</p>;
  }

  if(session.status === "authenticated"){
    router?.push("/dashboard");
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {email, password})
  };

  //test4321@gmail.com
  //test4321

  return (
    <div className={styles.container}>

      <form className= {styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder='email' className={styles.input} required />
        <input type="password" placeholder='password' className={styles.input} required />
        <button className={styles.button} onClick={() => signIn("credentials")}>
          Login
        </button>
      </form>
      <Link href="dashboard/login">Login with an existing account</Link>
      
      <button className={styles.button} onClick={() => signIn("google")}>
        Login with Google
      </button>
      
      </div>
  )
}

export default Login