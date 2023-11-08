import styles from "./Header.module.css";
import { Truck } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Truck size={95} />
        <span className={styles.}>FleetMonster</span>
      </div>
      <nav></nav>
    </header>
  );
}
