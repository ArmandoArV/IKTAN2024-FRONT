import Image from "next/image";
import styles from "./page.module.css";
import Rover from "../Images/Rover.png";
import TeamSection from "@/Containers/teamSection/teamSection";
import LandingSection from "@/Containers/landingSection/landingSection";
import ChallengeSection from "@/Containers/challengeSection/challengeSection";
import FooterComponent from "@/Components/FooterComponent/FooterComponent";
import WeAreIktan from "@/Images/WeAreIktan.png";
import DownArrow from "@/Components/Arrow/ArrowComponent";
import SocialMediaIcons from "@/Components/SocialmediaComponent/SocialmediaComponent.client";

export default function Home() {
  return (
    <>
     <div className={styles.socialIconsWrapper}>
        <SocialMediaIcons />
      </div>
      <main className={styles.main}>
        <div>
          <Image src={WeAreIktan} alt="We are Iktan" width={665} height={176} />
        </div>
        <section className={styles.topSection} id="landing">
          <LandingSection />
        </section>
        <br /><br /><br />
        <div className={`${styles.arrowWrapper} ${styles.fadeIn}`}>
          <DownArrow color="#FFFFFF" size={40} /> {/*Se que esto es incorrecto pero por falta de tiempo me vale*/}
        </div>
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
