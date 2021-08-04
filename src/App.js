import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import "./App.css";
import Header from "./Components/Header";

const App = () => {
  const [meaning, setMeaning] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");

  const dict_api = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
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
  }, []);

  return (
    <div className="app">
      <Container maxWidth="md" className="contain">
        <Header
          word={word}
          setWord={setWord}
          category={category}
          setCategory={setCategory}
        />
      </Container>
    </div>
  );
};

export default App;
