import Link from "next/link";
import React from "react";

import styles from "./Junbotron.module.css";

export default function Junbotron() {
  return (
    <div className={styles.junbotronContainer}>
      <div>
        <img src="phone_01.png" alt="Aplicativo Scal" />
        <div>
          <p>TELEMEDICINA E TELEATENDIMENTO</p>
          <h1>
            Cuide da sua saúde física e mental sem{" "}
            <strong>precisar sair de casa</strong>
          </h1>
          <p>
            Encontre profissionais que realizem atendimento remoto. Assim, você
            não precisa se deslocar a um consultório ou hospital
          </p>
          <Link href="/">
            <a> Ver profisisonais</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
