import React, { useState, useEffect } from "react";

import styles from "./SearchInput.module.css";
import Select, { components } from "react-select";

export default function SearchInput() {
  const [optionWidth, setOptionWidth] = useState("0px");

  useEffect(() => {
    const media = window.matchMedia("(max-width: 500px)");
    if (media.matches) {
      setOptionWidth("200px");
    } else {
      setOptionWidth("314px");
    }
  }, []);

  const options = [
    {
      value: "Fisioterapeuta",
      label: "Fisioterapeuta",
      imgSrc: "icons/fisioterapeuta.svg",
      altImg: "Icone de Fisioterapeuta",
    },
    {
      value: "Médico",
      label: "Médico",
      imgSrc: "icons/medico.svg",
      altImg: "Icone de Médico",
    },
    {
      value: "Dentista",
      label: "Dentista",
      imgSrc: "icons/dentista.svg",
      altImg: "Icone de Dentista",
    },
    {
      value: "Nutricionista",
      label: "Nutricionista",
      imgSrc: "icons/nutricionista.svg",
      altImg: "Icone de Nutricionista",
    },
    {
      value: "Psicologo",
      label: "Psicologo",
      imgSrc: "icons/psicologo.svg",
      altImg: "Icone de Psicologo",
    },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: 20,
      backgroundColor: state.isFocused ? "rgba(196, 196, 196, 0.1);" : "none",
      color: "#8B8FA1",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "14px",
    }),
    control: (provided, state) => ({
      ...provided,
      border: "1px solid #000",
      boxShadow: state.isFocused ? "0px 0px 6px #18e176" : "none",
      outline: "0",
      width: `${optionWidth}`,
      height: "54px",
      padding: "20px 10px 20px 42px",
      border: "1px solid #18e176",
      borderRadius: "8px 0px 0px 8px",
      color: "#18e176",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
    dropdownIndicator: () => ({
      display: "none",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "#bfbfbf",
      display: state.isFocused ? "none" : "flex",
      alignItems: "flex-start",
    }),
    valueContainer: () => ({
      display: "flex",
      alignItems: "flex-start",
      padding: "none",
    }),
    input: () => ({
      display: "flex",
      alignItems: "flex-start",
      padding: "none",
      marginTop: "-4px",
    }),
  };

  return (
    <div className={styles.searchInputContainer}>
      <div className={styles.selectInput}>
        <Select
          components={{ Control, MenuList, Option }}
          styles={customStyles}
          options={options}
          placeholder="Estou procurando por"
        />
      </div>
      <button>Buscar(2.122)</button>
    </div>
  );
}

const Control = ({ children, ...props }) => {
  const customStyles = {
    position: "absolute",
    marginLeft: "-25px",
    marginTop: "-3px",
  };

  return (
    <components.Control style={styles.control} {...props}>
      <img src="icons/search.svg" alt="icone de lupa" style={customStyles} />{" "}
      {children}
    </components.Control>
  );
};

const MenuList = ({ children, first, ...props }) => {
  const customStyles = {
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "16px",
    color: "#28333E",
    margin: "20px 0px 11px 20px",
  };
  return (
    <components.MenuList {...props}>
      <div style={customStyles}>Mais buscados:</div>
      {children[0]}
      <div style={customStyles}>Outros profissionais</div>
      {children[1]}
      {children[2]}
      {children[3]}
      {children[4]}
    </components.MenuList>
  );
};

const Option = ({ children, ...props }) => {
  const customStyles = {
    marginBottom: "-10px",
    marginRight: "7px",
  };
  return (
    <components.Option {...props}>
      <img
        src={props.data.imgSrc}
        alt={props.data.altImg}
        style={customStyles}
      />
      {children}
    </components.Option>
  );
};
