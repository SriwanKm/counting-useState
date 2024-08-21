'use client';

import styles from "../page.module.css"
import React, {useState} from "react"
export default function Questionair() {


    const [answer, setAnswer] = useState(true)
    // let going = ""
    function handleAnswer() {
        setAnswer(going => !going);
    }

    return (
        <div className={styles.questionair}>
            <h1 className={styles.head}>Would you like to go out tonight? :)</h1>
            <div onClick={handleAnswer} className={styles.answer_container}>
                <h2 className={styles.answer}>{answer? "Yes":"No"}</h2>
            </div>
        </div>
    )
}