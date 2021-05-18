import React from "react";

import Button from "../Button/Button";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <img src="logo_01.svg" alt="logo" />
      <div>
        <Button href="/" color="#fff" backgroundColor="1A89D9">
          Você é profissinal? Cadastre-se
        </Button>
      </div>
    </nav>
  );
}
