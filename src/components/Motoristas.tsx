import { SteeringWheel } from "@phosphor-icons/react";
import styles from "./Motoristas.module.css";
import { ListMotorista } from "./ListMotorista";

export function Motoristas() {
    return (
        <>
            <div className={styles.title}>
                <h1>
                    <SteeringWheel size={40} />
                    Motoristas
                </h1>
                <a href="#">+ Adicionar</a>
            </div>
            <ListMotorista />
            <ListMotorista />
            <ListMotorista />
            <ListMotorista />
            <ListMotorista />
        </>
    )
}