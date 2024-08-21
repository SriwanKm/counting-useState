import React from "react";
import styles from "../page.module.css"

export default function Count(props) {
  
    return (
        <div>
            <div className={styles.burgerNum_container}><h1 className={styles.burger_num}>{props.num}</h1></div>
        </div>
    )
}