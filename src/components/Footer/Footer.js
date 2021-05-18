import React from "react";

import Button from "../Button/Button";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div>
        <div className={styles.footerContainer__contact}>
          <a href="#">
            <img src="logo_01.svg" alt="logo" />
          </a>
          <div>
            <h2>CONTATO</h2>
            <a href="#">
              <img src="icons/facebook.svg" alt="Facebook icon" />
            </a>
            <a href="#">
              <img src="icons/instagram.svg" alt="Instagram icon" />
            </a>
            <a href="#">
              <img src="icons/youtube.svg" alt="Youtube Icon" />
            </a>
            <p>
              Entre em contato conosco através WhatsApp. De segunda à sexta das
              08h às 18: <span>(85) 98937-1016</span>
            </p>
            <Button href="/" backgroundColor="#18E176" color="#fff">
              Enviar uma mensagem
            </Button>
          </div>
        </div>

        <div className={styles.footerContainer__profissionals}>
          <h2>PROFISSIONAIS</h2>
          <a href="#">Fisioterapeuta</a>
          <a href="#">Médicos</a>
          <a href="#">Dentistas</a>
          <a href="#">Personal Trainers</a>
          <a href="#">Dentista</a>
          <a href="#">Psicologo</a>
          <a href="#">Fonodiologo</a>
          <a href="#">Farmacêutico</a>
          <a href="#">Assistente Social</a>
          <a href="#">Enfermeira</a>
          <a href="#">Cuidador de idosos</a>
          <a href="#">Terapeuta holístico</a>
          <a href="#">Biomédico</a>
        </div>

        <div className={styles.footerContainer__locate}>
          <h2>PROFISSIONAIS DE SAÚDE EM:</h2>
          <div>
            <div>
              <a href="#">Acre (AC)</a>
              <br />
              <a href="#">Alagoas (AL)</a>
              <br />
              <a href="#">Amapá (AP)</a>
              <br />
              <a href="#">Amazonas (AM)</a>
              <br />
              <a href="#">Bahia (BA)</a>
              <br />
              <a href="#">Ceará (CE)</a>
              <br />
              <a href="#">Distrito Federal (DF)</a>
              <br />
              <a href="#">Espírito Santo (ES)</a>
              <br />
              <a href="#">Goiás (GO)</a>
              <br />
              <a href="#">Maranhão (MA)</a>
              <br />
              <a href="#">Mato Grosso (MT)</a>
              <br />
              <a href="#">Mato Grosso do Sul (MS)</a>
              <br />
              <a href="#"> Minas Gerais (MG)</a>
              <br />
              <a href="#">Pará (PA)</a>
              <br />
            </div>
            <div>
              <a href="#">Paraíba (PB)</a>
              <br />
              <a href="#">Paraná (PR)</a>
              <br />
              <a href="#">Pernambuco (PE)</a>
              <br />
              <a href="#"> Piauí (PI)</a>
              <br />
              <a href="#">Rio de Janeiro (RJ)</a>
              <br />
              <a href="#">Rio Grande do Norte (RN)</a>
              <br />
              <a href="#"> Rio Grande do Sul (RS)</a>
              <br />
              <a href="#"> Rondônia (RO)</a>
              <br />
              <a href="#"> Roraima (RR)</a>
              <br />
              <a href="#"> Santa Catarina (SC)</a>
              <br />
              <a href="#"> São Paulo (SP)</a>
              <br />
              <a href="#">Sergipe (SE)</a>
              <br />
              <a href="#">Tocantins (TO)</a>
              <br />
            </div>
          </div>
        </div>

        <div className={styles.footerContainer__products}>
          <h2>OUTROS PRODUTOS</h2>
          <a href="#">Scal Software</a>
          <a href="#">Scal Telehealth</a>
          <a href="#">App Scal Profissional</a>
          <a href="#">Scal Bot</a>
        </div>
      </div>
      <div>
        <p>
          Scal Plataforma de Saúde e Tecnologia Ltda - Rua Professor Dias da
          Rocha, 70, Conj. 301, Meireles - 60170-240 - Fortaleza, CE
          <br />
          <span>
            <a href="#">Termos de Uso</a> |{" "}
            <a href="#">Política de privacidade</a> | <a href="#">Ajuda</a>
          </span>
        </p>
        <p>
          Por <img src="logo_Scal.svg" alt="Scal logo" />
        </p>
      </div>
    </div>
  );
}
