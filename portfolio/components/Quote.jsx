import styles from './Quote.module.css';

export default function Quote({ quote = [] , author }) {
    return (
        <article className={styles['container']}>
            <h2>{quote.map(element => {
                if(element.highlight === false) {
                    return element.text
                } else {
                    return <span>{element.text}</span>
                }
            })}</h2>
            <p>{author}</p>
        </article>
    )
}