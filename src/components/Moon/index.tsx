import React, { FC, useRef, CSSProperties } from 'react';
import styles from './Moon.module.scss';
import moonlight from '../../assets/img/moonlight.svg';
import moon from '../../assets/img/moon.svg';
import { useMouse } from 'react-use';

const Moon : FC = () => {
    let ref = useRef(null);
    let mousePosition = useMouse(ref);
    let relativeX = mousePosition.elX;
    let relativeY = mousePosition.elY;

    let moonStyle : CSSProperties = {
        transform : `translate3d(${Math.min(8, relativeX/100) * -1}px,${Math.min(8, relativeY/100) * -1}px,0)`
    }

    return (
        <div className={styles.moonContainer} ref={ref} style={moonStyle}>
            <div className={styles.moon}>
                <img src={moon}></img>
            </div>
            <div className={styles.moonlight}>
                <img src={moonlight}></img>
            </div>
        </div>
    );
}
export default Moon;