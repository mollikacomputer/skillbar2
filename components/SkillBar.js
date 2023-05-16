import styles from '@/styles/skillbar.module.css';
const SkillBar = () => {
  return (
    <div className="styles.skillContainer">
      <div className={styles.titleText}>Skill Lavel</div>
      
      <div className={styles.skill}>
        {/* html skill */}
        <div className={styles.skillBox}>
          <span className={styles.title}>HTML</span>
          <div className={styles.skillBar}>
            <span className={`${styles.skillPer} ${styles.html}`}>
              <span className={styles.tooltip}>90%</span>
            </span>
          </div>
        </div>
        {/* CSS skill */}
        <div className={styles.skillBox}>
          <span className={styles.title}>CSS</span>
          <div className={styles.skillBar}>
            <span className={`${styles.skillPer} ${styles.css}`}>
              <span className={styles.tooltip}>80%</span>
            </span>
          </div>
        </div>
        {/* Javascript skill */}
        <div className={styles.skillBox}>
          <span className={styles.title}>Javascript</span>
          <div className={styles.skillBar}>
            <span className={`${styles.skillPer} ${styles.javascript}`}>
              <span className={styles.tooltip}>70%</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SkillBar;
