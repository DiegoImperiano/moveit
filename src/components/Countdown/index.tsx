import {  useContext } from 'react'
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/countdown.module.css'


export function Countdown() {
  const {
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCoundown, 
    resetCoundown
  } = useContext(CountdownContext)

  const [minuteLeft, minutRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minutRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      { hasFinished ? (
        <button 
        disabled
        className={styles.countdownButton}
      >
        Ciclo encerrado
      </button>
      ) : (
        <>
          { isActive ? (

            <button 
              type='button' 
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCoundown}
            >
              Abandonar ciclo
            </button>

            ) : (
              <button 
                type='button' 
                className={styles.countdownButton}
                onClick={startCoundown}
              >
                Iniciar um ciclo
              </button>
            )
          }
        </>
      )} 
    </div>
  )
}