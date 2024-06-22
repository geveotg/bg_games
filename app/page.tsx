import Image from "next/image";
import styles from "./page.module.css";
import Section from "./Home/components/Section";
import Markets from "./Home/components/markets";

export default function Home() {
  return (
    <main className={styles.main}>
      <Section />
    </main>
  );
}
