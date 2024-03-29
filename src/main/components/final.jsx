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
                <div key={el.id} className={styles.wrapper} value={el.score}>
                  <label className={`${styles.label} ${i === 0 ? styles.first : ''}`}>
                    {el.name}
                  </label>
                    <input readOnly id={el.id} className={styles.input} value={el.score}></input>
                </div>
            )
          })
          :
          ''
        }
        {
          table ?
          <div className={styles.congrats}>
            ПОЗДРАВЛЯЕМ команду {table[0].name}! Вы настоящие поклонники Леши! Остальным соболезнуем...
          </div>
          :
          ''
        }
      </div>
    </div>
  )
}