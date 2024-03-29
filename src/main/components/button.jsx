import styles from './button.module.css';

export const Next = ({next, word='Далее'}) => {
  return (
    <div className={styles.next} onClick={next}>{word}</div>
  )
}