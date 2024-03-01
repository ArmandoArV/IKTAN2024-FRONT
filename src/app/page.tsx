import Image from "next/image";
import styles from "./page.module.css";
import Rover from "../Images/Rover.png";
import TeamSection from "@/Containers/teamSection/teamSection";
import LandingSection from "@/Containers/landingSection/landingSection";
import ChallengeSection from "@/Containers/challengeSection/challengeSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.topSection}>
        <LandingSection />
      </section>
      <section className={styles.teamSection}>
        <TeamSection />
      </section>
      <section className={styles.challengeSection}>
        <ChallengeSection />
      </section>
    </main>
  );
}
