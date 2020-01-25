import React, { FC, useRef, CSSProperties } from 'react';
import styles from './Home.module.scss';
import Moon from '../../components/Moon';
import { useMouse } from 'react-use';
import moonlight from '../../assets/img/moonlight.svg';
import moon from '../../assets/img/moon.svg';

const Home : FC = () => {
    let ref = useRef(null);
    let mousePosition = useMouse(ref);
    let relativeX = mousePosition.elX;
    let relativeY = mousePosition.elY;

    let titleStyle : CSSProperties = {
        transform : `translate3d(${Math.min(20, relativeX/30) * -1}px,${Math.min(20, relativeY/45) * -1}px,0)`
    }

    return (
        <div className={styles.home}>
            <main className={styles.homeMain}>
                <div className={styles.homeTitleContainer} ref={ref} style={titleStyle}>
                    <div className={styles.homeTitle}>ambi</div>
                    <div className={styles.homeSubtitle}>software developer</div>
                    <div className={styles.homeSubtitle}>aidoru fan</div>
                </div>
                <div className={styles.homeRightContainer}>
                    <Moon></Moon>
                    {/* <div className={styles.homeMoonContainer}>
                        <div className={styles.homeMoon}>
                            <img src={moon}></img>
                        </div>
                        <div className={styles.homeMoonlight}>
                            <img src={moonlight}></img>
                        </div>
                    </div> */}
                </div>
            </main>
        </div>
    );
}
export default Home;