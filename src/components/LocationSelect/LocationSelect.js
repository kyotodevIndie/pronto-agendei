import React, { useState, useEffect } from "react";

import Select, { components } from "react-select";

export default function LocationSelect() {
  const [optionWidth, setOptionWidth] = useState("0px");

  useEffect(() => {
    const media = window.matchMedia("(max-width: 500px)");
    if (media.matches) {
      setOptionWidth("200px");
    } else {
      setOptionWidth("435px");
    }
  }, []);

  const options = [
    {
      value: "Acre (AC)",
      label: "Acre (AC)",
    },
    {
      value: "Alagoas (AL)",
      label: "Alagoas (AL)",
    },
    {
      value: "Amapá (AP)",
      label: "Amapá (AP)",
    },
    {
      value: "Amazonas (AM)",
      label: "Amazonas (AM)",
    },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: 20,
      backgroundColor: state.isFocused ? " rgba(196, 196, 196, 0.1)" : "none",
      color: "#8B8FA1",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "14px",
    }),
    control: (provided, state) => ({
      ...provided,
      border: "1px solid #EEF0F3",
      boxShadow: state.isFocused ? "0px 0px 6px #18e176" : "none",
      outline: "0",
      width: `${optionWidth}`,
      height: "54px",
      borderRadius: "8px",
      padding: "20px 10px 20px 42px",
      color: "#BFBFBF;",
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
      color: "#8B8FA1",
    }),
    input: () => ({
      display: "flex",
      alignItems: "flex-start",
      padding: "none",
      marginTop: "-4px",
      color: "#8B8FA1",
    }),
  };

  return (
    <>
      <Select
        components={{ Control, MenuList }}
        styles={customStyles}
        options={options}
        placeholder="Digite a sua cidade, estado ou CEP"
      />
    </>
  );
}
const Control = ({ children, ...props }) => {
  const customStyles = {
    position: "absolute",
    marginLeft: "-25px",
    marginTop: "-3px",
  };

  return (
    <components.Control {...props}>
      <img
        src="icons/location.svg"
        alt="icone de localização"
        style={customStyles}
      />{" "}
      {children}
    </components.Control>
  );
};

const MenuList = ({ children, ...props }) => {
  return <components.MenuList {...props}>{children}</components.MenuList>;
};
