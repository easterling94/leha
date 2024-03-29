import { Next } from './button';
import { useAppDispatch } from '../../services/store';
import { setGameState } from '../../services/slices/gameSlice';
import styles from './start.module.css';

export const Start = () => {
  const dispatch = useAppDispatch();
  const next = () => {
    dispatch(setGameState('teams'));
  }
  return (
    <div className={styles.body}>
      <div className={styles.star}>*</div>
      <div className={styles.note}>* если бы за каждый Лешин &nbsp;<span className={styles.span}>кринж</span>постинг давали по рублю</div>
      <div className={styles.next}><Next next={next}/></div>
    </div>
  )
}