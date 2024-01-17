import React, { ReactElement, MouseEventHandler } from "react";
import styles from "./TurnOn.module.css";

interface BotonProps {
  funcionalidad: MouseEventHandler<HTMLButtonElement>;
  texto: string;
  isEncendido: boolean;
}

function TurnOn({ funcionalidad, texto, isEncendido }: BotonProps): ReactElement {
  return (
    <button
      className={isEncendido ? styles.botonLuz : styles.botonLuzApagada}
      onClick={funcionalidad}
    >
      {texto}
    </button>
  );
}

export default TurnOn;
