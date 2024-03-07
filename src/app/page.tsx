import Image from "next/image";
import styles from "./page.module.css";
import Rover from "../Images/Rover.png";
import TeamSection from "@/Containers/teamSection/teamSection";
import LandingSection from "@/Containers/landingSection/landingSection";
import ChallengeSection from "@/Containers/challengeSection/challengeSection";
import FooterComponent from "@/Components/FooterComponent/FooterComponent";
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.topSection} id="landing">
          <LandingSection />
        </section>
        <section className={styles.teamSection} id="team">
          <TeamSection />
        </section>
        <section className={styles.challengeSection} id="challenge">
          <ChallengeSection />
        </section>
      </main>
      <FooterComponent />
    </>
  );
}
