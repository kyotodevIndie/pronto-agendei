import Link from "next/link";
import React from "react";

import Button from "../Button/Button";

import styles from "./ImageContent02.module.css";
export default function ImageContent02() {
  return (
    <div className={styles.imageContent02Container}>
      <img src="image_04.svg" alt="Image" />
      <div>
        <h1>Malhe com um Personal</h1>
        <p>
          Nossos personal trainers vão criar treinos personalizados que atendam
          aos seus objetivos. Com sessões virtuais, você terá acompanhamento
          individual quando e onde quiser.
        </p>
        <div>
          <Link href="/">
            <a>Treinar com um Personal</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
