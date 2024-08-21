import Image from "next/image";
import styles from "./page.module.css";
import Questionair from "./components/Questionair"
import Burger from "./components/Burger"
import Thing from "./components/Thing"
import Cheese from "./components/Cheese"

export default function Home() {
  return (
    <main className={styles.main}>
     <Questionair/>
     <Burger/>
     <Cheese/>
     <Thing/>
    </main>
  );
}
