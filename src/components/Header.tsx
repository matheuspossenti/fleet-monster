import { User } from "phosphor-react";
import styles from "./Header.module.css";
import { Truck, HouseSimple, Phone, CarProfile } from "@phosphor-icons/react";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Truck size={95} />
          <span className={styles.title}>FleetMonster</span>
        </div>
        <ul className={styles.list}>
          <li>
            <a href="#">
              <HouseSimple size={35} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Phone size={35} />
              <span>Contato</span>
            </a>
          </li>
        </ul>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">
              <CarProfile size={25} />
              <span>Veículos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <User size={25} />
              <span>Motoristas</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
