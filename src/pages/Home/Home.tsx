import React, { FC, useRef, CSSProperties, useState } from 'react';
import styles from './Home.module.scss';
import Moon from '../../components/Moon';
import { useMouse } from 'react-use';
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io';
import reflection from '../../assets/img/reflection.svg';
import Vector from '../../model/Vector';

const Home : FC = () => {
    // let ref = useRef(null);
    // let mousePosition = useMouse(ref);
    // let relativeX = mousePosition.elX;
    // let relativeY = mousePosition.elY;
    let [moonPosition, setMoonPosition] = useState<Vector>({ x : 0, y : 0});

    console.log("mp", moonPosition)
    let reflectionStyle : CSSProperties= {
        transform : `translate3d(${Math.min(8, moonPosition.x/8) * -1}px,0px,0)`
    } 

    return (
        <div className={styles.home}>
            <header className={styles.homeHeader}>
                <div className={styles.homeHeaderIcon}>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ambidere">
                        <IoLogoTwitter size={25} color={'#FFF'}></IoLogoTwitter>
                    </a>
                </div>
                <div className={styles.homeHeaderIcon}>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/iequivocality">
                        <IoLogoGithub size={25} color={'#FFF'}></IoLogoGithub>
                    </a>
                </div>
            </header>
            <main className={styles.homeMain}>
                <div className={styles.homeTitleContainer}>
                    <div className={styles.homeTitle}>ambi</div>
                    <div className={styles.homeSubtitle}>software developer</div>
                    <div className={styles.homeSubtitle}>aidoru fan</div>
                </div>
                <div className={styles.homeRightContainer}>
                    <Moon top={-50} right={-50} onChangePosition={(v : Vector) => setMoonPosition(v)}></Moon>
                </div>
            </main>
            <footer className={styles.homeFooter}>
                <img className={styles.reflection} src={reflection} style={reflectionStyle}></img>
            </footer>
        </div>
    );
}
export default Home;