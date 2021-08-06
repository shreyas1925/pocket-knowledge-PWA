import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Switch, withStyles } from "@material-ui/core";
import "./App.css";
import Header from "./Components/Header/Header";
import Definition from "./Components/Definitions/Definition";
import { grey } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";

const App = () => {
  const [meaning, setMeaning] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");
  const [LightTheme, setLightTheme] = useState(false);

  const dict_api = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeaning(data.data);
    } catch (err) {
      {
        console.log(err);
      }
    }
  };

  console.log(meaning);

  useEffect(() => {
    dict_api();
  }, [word, category]);

  const Darkmode = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div
      className="app"
      style={{
        height: "100vh",
        backgroundColor: LightTheme ? "#fff" : "#282c34",
        color: LightTheme ? "black" : "white",
        transition: "all 0.7s linear",
      }}
    >
      <Container maxWidth="md" className="contain">
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <Darkmode
            checked={LightTheme}
            onChange={() => setLightTheme(!LightTheme)}
          />
        </div>
        <div
          className="menu"
          style={{
            position: "absolute",
            top: 0,
            left: 15,
            cursor: "pointer",
            paddingTop: 10,
          }}
        >
          <MenuIcon />
        </div>

        <Header
          word={word}
          setWord={setWord}
          category={category}
          setCategory={setCategory}
          LightTheme={LightTheme}
          meaning={meaning}
        />
        {meaning && (
          <Definition
            LightTheme={LightTheme}
            word={word}
            meaning={meaning}
            category={category}
          />
        )}
      </Container>
    </div>
  );
};

export default App;
