import Image from "next/image";
import styles from "./page.module.css";
import Rover from "@/Images/Rover.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <div className={styles.top}>
          <h1 className={styles.title}>Meet our beast</h1>
        </div>
        <div className={styles.middle}>
          <h2>The Human Space Exploration Vehicle</h2>
        </div>
        <div className={styles.bottom}>
          <p>
            Meet our Rover, which is a representation of months of work and
            great teamwork. It has been a long process, and various obstacles
            arose, but we, the members of the IKTAN Roving team, based on
            perseverance, dedication, and passion for learning, were able to
            achieve our goals.
          </p>
          <p>
            Taking the previous vehicle designs from previous editions as a
            starting point, functionalities have been improved and this has
            resulted in a better space exploration vehicle that takes the best
            features of its previous versions, refines them and implements new
            ideas.
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <img src={Rover.src} alt="Rover" className={styles.rover} />
      </div>
    </main>
  );
}
