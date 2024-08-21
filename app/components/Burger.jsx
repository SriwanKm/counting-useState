'use client';
import React, { useState } from "react";
import styles from "../page.module.css"
import Count from "./Count"


export default function Burger() {
    let [countBurger, setCountBurger] = useState(0)

    function handleAdd() {
        setCountBurger(prevCount => prevCount + 1)
    }

    function handleSubtract() {
        setCountBurger(prevCount => Math.max(prevCount - 1, 0))
    }


    return (
        <div className={styles.burger_container}>
            <h1>How many burger would you like?</h1>
            <div className={styles.plus_minus}>
                <div onClick={handleSubtract} className={styles.subtract}>-</div>
                <Count num={countBurger} />
                <div onClick={handleAdd} className={styles.add}>+</div>
            </div>

        </div>
    )
}