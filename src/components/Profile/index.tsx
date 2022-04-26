import styles from '../../styles/components/profile.module.css'
export function Profile(){
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/62719536?v=4" />
      <div>
        <strong>Diego Imperiano</strong>
        <p>
          <img src="/assets/icons/level.svg" alt="" />
          level 1
        </p>
      </div>
    </div>
  )
}