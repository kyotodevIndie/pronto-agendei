import React, { useState } from "react";

import styles from "./Explore.module.css";

import Link from "next/link";

export default function Explore() {
  const [isAccodionOpened, setIsAccodionOpened] = useState(false);

  function handleOpen() {
    setIsAccodionOpened(false);
  }
  function handleClose() {
    setIsAccodionOpened(true);
  }
  return (
    <>
      <div className={styles.exploreContainer}>
        <h1>Explore o ProntoAgendei</h1>
        <p>
          O ProntoAgendei tem milhares de profissionais de saúde, informações de
          consultórios, tudo integrado a um software exclusivo. Veja o que estão
          buscando ProntoAgendei hoje.
        </p>
        {isAccodionOpened ? (
          <>
            <div>
              <div>
                <h2>Médicos especialistas mais buscados</h2>
                <a href="">Oftalmologista</a>
                <a href="">Otorrinolaringologista</a>
                <a href="">Ginecologista</a>
                <a href="">Infectologista</a>
              </div>

              <div>
                <h2>Fisioterapeutas por estado</h2>
                <a href="">Fisioterapeuta no Ceará</a>
                <a href="">Fisioterapeuta em Alagoas</a>
                <a href="">Fisioterapeuta no Maranhão</a>
                <a href="">Fisioterapeuta na Bahia</a>
              </div>
              <div>
                <h2>Personal Trainers e educadores físicos</h2>
                <a href=""> Personal trainer no Ceará</a>
                <a href="">Personal trainer em São Paulo</a>
                <a href="">Personal trainer em Manaus</a>
                <a href="">Personal trainer em Alagoas</a>
              </div>
            </div>
            <p>
              <strong>
                Encontre o profissional de saúde ideal para resolver o seu
                problema
              </strong>
            </p>
            <Link href="/">
              <a> Pesquisa por um profissional</a>
            </Link>
            <img
              src="icons/arrow.svg"
              alt="next icon"
              style={{ transform: "rotate(0deg)" }}
              onClick={handleOpen}
            />
          </>
        ) : (
          <img
            src="icons/arrow.svg"
            alt="next icon"
            style={{ transform: "rotate(180deg)" }}
            onClick={handleClose}
          />
        )}
      </div>
    </>
  );
}
