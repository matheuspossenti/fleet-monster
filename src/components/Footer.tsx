import { Copyright } from "@phosphor-icons/react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <>
      <footer>
        <span className={styles.footer}>
          <Copyright size={15} />
          Todos os direitos reservados FleetSense - 2023
        </span>
      </footer>
    </>
  );
}
