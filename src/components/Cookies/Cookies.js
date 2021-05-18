import React, { useState } from "react";
import Button from "../Button/Button";

import styles from "./Cookies.module.css";

export default function Cookies() {
  const [isCookiesOpened, setIsCookiesOpened] = useState(true);

  function handleClose() {
    setIsCookiesOpened(false);
  }
  return (
    <>
      {isCookiesOpened ? (
        <div className={styles.cookiesContainer}>
          <p>
            Usamos{" "}
            <strong>
              cookies para personalizar conteúdos e melhora a sua experiência.
            </strong>{" "}
            Ao navegar neste site, você concorda com a nossa Política de Cookies
          </p>
          <a onClick={handleClose}>Continuar navegando</a>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
