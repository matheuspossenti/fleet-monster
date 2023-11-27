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
      <div className={styles.cadastro}>
        <h1>Cadastro de Veículos</h1>
        <div className={styles.form}>
          <form action="">
            <label htmlFor="fmodelo"></label>
            <input type="text" id="fmodelo" />
            <label htmlFor="fmodelo"></label>
            <input type="text" id="fmodelo" />
            <label htmlFor="fmodelo"></label>
            <input type="text" id="fmodelo" />
          </form>
          <footer>
            <button>
              Cadastrar
            </button>
          </footer>
        </div>
      </div>
      <ListVeiculo />
    </>
  );
}
