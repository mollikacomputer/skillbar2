import styles from '@/styles/skillbar.module.css'
const SkillBar = () => {
  return (
        <div className="styles.skillContainer">
            <div className="styles.titleText">Skill Lavel</div>
            {/* html skill */}
            <div className="styles.skill">
                <div className="styles.skillBox">
                    <span className="styles.title">HTML</span>
                    <div className="styles.skillBar">
                        <span className="styles.skillPer html">
                            <span className="styles.tooltip">90%</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default SkillBar;
