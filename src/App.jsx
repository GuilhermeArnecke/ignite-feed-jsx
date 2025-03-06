import { Header } from "./components/Header";
import { Post }  from "./Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Gulherme Arnecke" 
            content="Este é um teste de aprendizado"
          />
          <Post 
            author="Enzo Rafael" 
            content="Este é o segundo teste de aprendizado exibido em tela"
          />
        </main>
      </div>
      
    </div>
  )
}
