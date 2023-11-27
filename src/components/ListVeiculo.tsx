import { GasPump, GlobeHemisphereWest } from "phosphor-react";
import styles from "./ListVeiculo.module.css";
import img from "../assets/truck.svg";

export function ListVeiculo(){
    return(
        <>
            <div className={styles.veiculo}>
                <div className={styles.content}>
                    <img src={img} alt="" />
                    <div className={styles.description}>
                        <h1>Scania S-Sleeper 560</h1>
                        <span>Ano: 2023</span>
                        <span>Motorista: Teco</span>
                        <span>Cor: Cinza</span>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <h1>AAA-0000</h1>
                    <button>
                        <GasPump size={25} />
                        Abastecimento
                    </button>
                    <button>
                        <GlobeHemisphereWest size={25} />
                        Viagens
                    </button>
                </div>
            </div>
        </>
    )
}