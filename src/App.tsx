import { Header } from "./components/Header";
import styles from "./App.module.css";

import "./global.css";
import { Footer } from "./components/Footer";
import { Veiculos } from "./components/Veiculos";
import { Motoristas } from "./components/Motoristas";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Motoristas />
        <Veiculos />
      </div>
      <Footer />
    </>
  );
}
