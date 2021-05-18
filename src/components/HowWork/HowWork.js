import React from "react";

import styles from "./HowWork.module.css";

export default function HowWork() {
  return (
    <div className={styles.howWorkContainer}>
      <h1>
        Como funciona o <img src="logo_02.svg" alt="pronto agendei logo" />
      </h1>
      <div>
        <div>
          <img src="heart_01.svg" alt="" />
          <p>
            <strong>Busque o especialista</strong> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div>
          <img src="heart_02.svg" alt="" />
          <p className={styles.howWorkContainer_div_p_02}>
            <strong>Selecione o profissional desejado</strong> <br />
            Phasellus tristique volutpat felis ut consequat. Sed egestas pur
          </p>
        </div>
        <div className={styles.howWorkContainer_div_03}>
          <img src="heart_03.svg" alt="" />
          <p>
            <strong>Acesse o perfil </strong> <br />
            Fusce ut gravida neque. Integer tristique dignissim metus
          </p>
        </div>
      </div>
    </div>
  );
}
