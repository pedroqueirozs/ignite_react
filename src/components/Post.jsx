import styles from "./Post.module.css"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/pedroqueirozs.png" />
                    <div className={styles.authorInfo}>
                        <strong>Pedro Queiroz</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="19 de Agosto as 15:00" datetime="2024-08-19 15:51:00">Publicado ha 1h </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>  Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="">jane.design/doctorcare</a></p>

                <p><a href="">#novoprojeto </a> <a href=""> #nlw</a> <a href="">#rocketseat</a></p>
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentario"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

        </article>
    )
}