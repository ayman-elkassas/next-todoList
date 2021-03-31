import Head from 'next/head'
import Footer from '../components/Layout/footer'
import Navbar from '../components/Layout/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Home Page</h1>
      <Footer/>
    </div>
  )
}
