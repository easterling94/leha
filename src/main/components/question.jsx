import { useAppDispatch, useAppSelector } from '../../services/store';
import { setGameState, setIntermediate, setTeamsScore, setQuestionNumber } from '../../services/slices/gameSlice';
import { useState, useEffect } from 'react';
import { Next } from './button';
import styles from './question.module.css';

export const Question = () => {
  const { questions, teams,intermediate, questionNumber } = useAppSelector((store) => store.game);
  const dispatch = useAppDispatch();
  const [image, setImage] = useState(questions[questionNumber].image);
  const [word, setWord] = useState('Далее');
  useEffect(() => {
    setImage(questions[questionNumber].image);
    questionNumber === 13 ? setWord('Завершить'): setWord('Далее')
  }, [questionNumber])
  const handleClick = () => {
    dispatch(setIntermediate());
    !intermediate ? 
    setImage(questions[questionNumber].correctAnswer)
    :
    setImage(questions[questionNumber].image)
  };
  const next = () => {
    questionNumber === 13 ?
    dispatch(setGameState('final'))
    :
    dispatch(setQuestionNumber());
  };
  const handleChange = (e) => {
    const team = {
      id: e.target.id, score: Number(e.target.value)
    }
    dispatch(setTeamsScore(team))
  };
  return (
    <div className={styles.body}>
      <img className={styles.image} src={image} onClick={handleClick}></img>
      {
        !intermediate ?
          <div className={styles.answers}>
            <div className={styles.answer}><span className={styles.span}>A:&nbsp;&nbsp;</span>{questions[questionNumber].answers[0]}</div>
            <div className={styles.answer}><span className={styles.span}>B:&nbsp;&nbsp;</span>{questions[questionNumber].answers[1]}</div>
            <div className={styles.answer}><span className={styles.span}>C:&nbsp;&nbsp;</span>{questions[questionNumber].answers[2]}</div>
            <div className={styles.answer}><span className={styles.span}>D:&nbsp;&nbsp;</span>{questions[questionNumber].answers[3]}</div>
          </div>
        :
        <div className={styles.answersIntermediate}>
          <div className={styles.wrapper}>
            <label className={styles.label}>
              {teams[0].name}
            </label>
              <input id={0} className={styles.input} onChange={(e) => handleChange(e)} value={teams[0].score}></input>
          </div>
          <div className={styles.wrapper}>
            <label className={styles.label}>
            {teams[1].name}
            </label>
              <input id={1} className={styles.input} onChange={(e) => handleChange(e)} value={teams[1].score}></input>
          </div>
          <div className={styles.wrapper}>
            <label className={styles.label}>
            {teams[2].name}
            </label>
              <input id={2} className={styles.input} onChange={(e) => handleChange(e)} value={teams[2].score}></input>
          </div>
          <div className={styles.wrapper}>
            <label className={styles.label}>
            {teams[3].name}
            </label>
              <input id={3} className={styles.input} onChange={(e) => handleChange(e)} value={teams[3].score}></input>
          </div>
          <div className={styles.wrapper}>
            <label className={styles.label}>
            {teams[4].name}
            </label>
              <input id={4} className={styles.input} onChange={(e) => handleChange(e)} value={teams[4].score}></input>
          </div>
          <Next next={next} word={word}/>
        </div>
      }
    </div>
  )
}