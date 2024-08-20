import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/pedroqueirozs.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro Queiroz</strong>
                            <time title="19 de Agosto as 15:00" datetime="2024-08-19 15:51:00">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deixe seu comentario">
                            <Trash size={24}/>
                        </button>

                    </header>
                    <p>Muito bom Devon, parabéns!!👏👏</p>

                </div>
                <footer>
                    <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}