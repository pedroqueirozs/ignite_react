import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>

        <Sidebar />
        <main>
          <Post
          // author="Pedro Queiroz"
          // content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, temporibus magni consequatur veniam tenetur neque optio labore cumque, aspernatur odio hic sit? Dignissimos, exercitationem tempore aperiam expedita cum doloribus. Architecto."
          />
          <Post
          // author="Lais Nunes"
          // content="Um novo conteudo de post aqui"
          />

        </main>
      </div>
    </>
  )
}

