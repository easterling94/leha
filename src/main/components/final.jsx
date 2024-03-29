import { useAppSelector } from '../../services/store';
import { useState, useEffect } from 'react';
import styles from './final.module.css';

export const Final = () => {
  const { teams } = useAppSelector((store) => store.game);
  const [table, setTable] = useState(null);
  useEffect(() => {
    const ranged = [...teams].sort((el1, el2) => el2.score - el1.score)
    setTable(ranged);
  }, [])
  return (
    <div className={styles.body}>
      <div className={styles.answers}>
        {
          table ?
          table.map((el, i) => {
            return (
                <div key={el.id} className={styles.wrapper}>
                  <label className={styles.label}>
                    {el.name}
                  </label>
                    <input readOnly id={el.id} className={`${styles.input} ${i === 0 ? styles.first : ''}`} value={el.score}></input>
                </div>
            )
          })
          :
          ''
        }
        <div>ПОЗДРАВЛЯЕМ</div>
      </div>
    </div>
  )
}