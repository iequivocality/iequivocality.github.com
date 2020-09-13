import React, { FC, useRef, CSSProperties, useEffect } from 'react';
import styles from './Moon.module.scss';
import moonlight from '../../assets/img/moonlight.svg';
import moon from '../../assets/img/moon.svg';
import { useMouse } from 'react-use';
import Vector from '../../model/Vector';

interface MoonProps {
    top : number,
    right : number,
    onChangePosition? : (point : Vector) => void
}

const Moon : FC<MoonProps> = (props : MoonProps) => {
    let { onChangePosition } = props;
    let ref = useRef(null);
    let mousePosition = useMouse(ref);
    let relativeX = mousePosition.elX;
    let relativeY = mousePosition.elY;

    useEffect(() => {
        if (onChangePosition) {
            onChangePosition({ x : relativeX, y : relativeY});
        }
    }, [relativeX, relativeY, onChangePosition]);

    let moonStyle : CSSProperties = {
        transform : `translate3d(${Math.min(20, relativeX/50) * -1}px,${Math.min(20, relativeY/50) * -1}px,0)`,
        top : `${props.top}px`,
        right : `${props.right}px`
    }

    return (
        <div className={styles.moonContainer} ref={ref} style={moonStyle}>
            <div className={styles.moon}>
                <img src={moon} alt="moon"></img>
            </div>
            <div className={styles.moonlight}>
                <img src={moonlight} alt="moonlight"></img>
            </div>
        </div>
    );
}
export default Moon;