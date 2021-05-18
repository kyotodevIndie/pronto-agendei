import React from "react";
import LocationSelect from "../LocationSelect/LocationSelect";

import styles from "./AdvancedSearch.module.css";

export default function AdvancedSearch() {
  return (
    <div className={styles.advancedSearchContainer}>
      <h1>Busca Avançada</h1>
      <LocationSelect />
      <h2>Qual o profissional que você precisa?</h2>

      <div>
        <a href="">Ver todas as áreas </a>
      </div>

      <h2>Como você quer ser atendido</h2>

      <h2>Tipo de atendimento</h2>

      <h2>Métodos de pagamento aceitos</h2>

      <h2>Outros filtros</h2>

      <div>
        <input type="checkbox" id="check1" />
        <label for="check1">Presencialmente</label>
      </div>
    </div>
  );
}
