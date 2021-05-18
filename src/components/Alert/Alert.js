import React, { useState } from "react";

import styles from "./Alert.module.css";

export default function Alert() {
  const [isAlertOpened, seIsAlertOpened] = useState(true);

  function handleClose() {
    seIsAlertOpened(false);
  }
  return (
    <>
      {isAlertOpened ? (
        <div className={styles.alertContainer}>
          <img src="icons/close.svg" alt="close icon" onClick={handleClose} />
          <p>
            <span>Coronavírus (COVID-19):</span> A segurança e o bem-estar de
            todos os nossos clientes são nossa prioridade. Estamos monitorando
            ativamente a situação do coronavírus (COVID-19) e tomando medidas
            para ajudar a manter todos em segurança. Nesse momento dê
            preferência a profissionais que realizem teleatendimento.
          </p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
