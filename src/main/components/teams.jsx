import { Next } from './button';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { setGameState, setTeamsName } from '../../services/slices/gameSlice';
import styles from './teams.module.css';

export const Teams = () => {
  const dispatch = useAppDispatch();
  const { teams } = useAppSelector((store) => store.game);
  const next = () => {
    dispatch(setGameState('question'));
  }
  const handleChange = (e) => {
    const team = {
      id: e.target.id, name: e.target.value
    }
    dispatch(setTeamsName(team))
  };
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div>
          <label className={styles.label}>
            Команда 1
          </label>
            <input id={0} className={styles.input} onChange={(e) => handleChange(e)} value={teams[0].name}></input>
        </div>
        <div>
          <label className={styles.label}>
            Команда 2
          </label>
            <input id={1} className={styles.input} onChange={(e) => handleChange(e)} value={teams[1].name}></input>
        </div>
        <div>
          <label className={styles.label}>
            Команда 3
          </label>
            <input id={2} className={styles.input} onChange={(e) => handleChange(e)} value={teams[2].name}></input>
        </div>
        <Next next={next}/>
      </div>
    </div>
  )
}