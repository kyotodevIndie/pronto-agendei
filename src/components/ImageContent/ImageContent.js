import Link from "next/link";
import React from "react";
import Button from "../Button/Button";

import styles from "./ImageContent.module.css";

export default function ImageContent() {
  return (
    <div className={styles.imageContentContainer}>
      <div>
        <h1>Cuide do seu corpo e livre-se das dores</h1>
        <p>
          No ProntoAgendei você encontra fisioterapeutas qualificados para
          resolver o seu problema.
        </p>
        <div>
          <Link href="/">
            <a>Buscar Fisioterapeutas</a>
          </Link>
        </div>
      </div>
      <img src="image_03.svg" alt="Image" />
    </div>
  );
}
