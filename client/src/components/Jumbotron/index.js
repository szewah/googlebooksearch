import React from "react";
import { Input, FormBtn } from "../Form";
import "./style.css";
import logo from "../../google.png";

const Jumbotron = ({ q, handleInputChange, handleFormSubmit }) => {
  return (
    <div
      style={{
        height: 400,
        clear: "both",
        textAlign: "center",
        background: "white",
        borderTop: "1px solid #EBEBEB",
        color: "#777",
        fontFamily: "arial,sans-serif",
        width: "100%"
      }}
      className="jumbotron"
    >
      <img className="img img-fluid " src={logo} alt="logo" />

      <form>
        <Input
          value={q}
          name="query"
          onChange={handleInputChange}
        />
        <FormBtn onClick={handleFormSubmit} type="submit">
          Find
        </FormBtn>
      </form>
      <p>Search the world's most comprehensive index of full-text books.</p>
    </div>
  );
};

export default Jumbotron;