import styles from "./Header.module.css";
import { Truck, HouseSimple, Phone } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className={styles.header}>
      <Truck size={95} />
      <span className={styles.title}>FleetMonster</span>
      <ul className={styles.list}>
        <li>
          <HouseSimple size={25} />
          <span>Home</span>
        </li>
        <li>
          <Phone size={25} />
          <span>Contato</span>
        </li>
      </ul>
    </header>
  );
}
