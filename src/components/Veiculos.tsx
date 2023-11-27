import { CarProfile } from "@phosphor-icons/react";
import styles from "./Veiculos.module.css";
import { ListVeiculo } from "./ListVeiculo";

export function Veiculos() {
  return (
    <>
      <div className={styles.title}>
        <h1>
          <CarProfile size={40} />
          Veículos
        </h1>
        <a href="#">+ Adicionar</a>
      </div>
      <ListVeiculo />
    </>
  );
}
