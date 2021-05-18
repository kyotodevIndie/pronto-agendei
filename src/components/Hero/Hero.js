import React, { useState } from "react";

import styles from "./Hero.module.css";
import SearchInput from "../SearchInput/SearchInput";

import { Modal } from "react-bootstrap";
import LocationSelect from "../LocationSelect/LocationSelect";

export default function Hero() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.heroContainer}>
      <img src="hero_icons.svg" alt="hero icons" />
      <div>
        <h1>
          Encontre <strong>profissionais de saúde</strong> e agende
        </h1>
        <SearchInput />
        <p>
          <a href="#" onClick={handleShow}>
            <img src="icons/locate.svg" alt="locate icon" />
            Usar minha localização atual
          </a>
        </p>
        <div>
          <a href="#">
            <img src="icons/filter.svg" alt="locate icon" />
            BUSCA AVANÇADA
          </a>
        </div>
      </div>
      <img src="image_01.png" alt="profissionais de saúde" />

      <>
        <Modal
          show={show}
          onHide={handleClose}
          className={styles.modalContainer}
        >
          <Modal.Body>
            <p>
              Informe onde você está, assim conectaremos profissionais mais
              perto de você:
            </p>
            <LocationSelect />
            <br />
            <a onClick={handleClose}>Continuar</a>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}
