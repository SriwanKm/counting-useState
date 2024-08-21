'use client';
import React from "react";
import styles from "../page.module.css"

export default function Thing() {
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

    function addThingHandling() {
        setThings(prevThing => [...prevThing, `Thing ${prevThing.length + 1}`])
    }
    let allThing = things.map((thing) => <div>{thing}</div>)
    return (
        <div>
            <button className={styles.addThing} onClick={addThingHandling}>Add thing</button>
            {allThing}
        </div>
    )
}