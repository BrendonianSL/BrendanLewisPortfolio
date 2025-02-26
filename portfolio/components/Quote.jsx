import styles from './Quote.module.css';

export default function Quote({ quote = [] , author }) {
    return (
        <article className={styles['container'] + ' hidden'}>
            <h2 className={'animate'}>{quote.map(element => {
                if(element.highlight === false) {
                    return element.text
                } else {
                    return <span>{element.text}</span>
                }
            })}</h2>
            <p className={'animate'} style={{transitionDelay: '100ms'}}>{author}</p>
        </article>
    )
}