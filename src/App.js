import { Start } from './main/components/start';
import { Teams } from './main/components/teams';
import { Question } from './main/components/question';
import { Final } from './main/components/final';
import { useAppSelector } from './services/store';
import styles from './app.module.css';

function App() {
  const { gameState } = useAppSelector((store) => store.game)
  return (
    <div className={styles.body}>
      {
        gameState === 'start' ?
        <Start />
        :
        gameState === 'teams' ?
        <Teams />
        :
        gameState === 'question' ?
        <Question />
        :
        <Final />
      }
    </div>
  );
}

export default App;
