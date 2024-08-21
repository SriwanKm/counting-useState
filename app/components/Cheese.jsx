'use client';
import styles from "../page.module.css"
import React, { useState } from "react";




export default function Cheese() {
    const [addedCheese, setAddedCheese] = useState(["Added cheese 1", "Added cheese 2"])
    function handlingAddCheese() {

        setAddedCheese(prevCheese => {
            return [...prevCheese, `Added cheese ${addedCheese.length + 1}`]
        })
    }
    let allCheese = addedCheese.map(cheese => <div>{cheese}</div>)

    return (
        <div>
            <button className={styles.button_AddCheese} onClick={handlingAddCheese}>Add cheese</button>
            {allCheese}
        </div>
    )
}
