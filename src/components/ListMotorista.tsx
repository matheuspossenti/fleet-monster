import styles from "./ListMotorista.module.css";
import { Trash } from "phosphor-react";

export function ListMotorista(){
    return (
        <>
            <div className={styles.motorista}>
                <span className={styles.name}>Nome</span>
                <span>Idade</span>
                <span>CNH</span>
                <span>Numero</span>
                <span>Veículo</span>
                <button
                    onMouseDown={() => {}}
                    title="Deletar comentário"
                >
                    <Trash size={24} />
                </button>
            </div>
        </>
    )
}