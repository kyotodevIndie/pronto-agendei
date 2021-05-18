import React from "react";

import Button from "../Button/Button";

import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <p>
        Use uma plataforma para profissionais de saúde e ainda crie seu perfil
        no <strong>ProntoAgendei.com.br</strong>
      </p>
      <Button href="/" color="#fff" backgroundColor="#18E176">
        Cadastre-se grátis
      </Button>
    </div>
  );
}
