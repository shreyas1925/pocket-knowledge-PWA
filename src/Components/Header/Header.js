import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./Header.css";
import categories from "../../data/category";
const Header = ({
  word,
  setWord,
  category,
  setCategory,
  LightTheme,
  meaning,
}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightTheme ? "#000" : "#fff",
      },
      type: LightTheme ? "light" : "dark",
    },
  });

  const onHandleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="header">
      <span
        className="heading"
        style={{ color: LightTheme ? "#bdb2ff" : "#1B966A" }}
      >
        <b>{word ? word : "Pocket knowledge"}</b>
      </span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="outlined-basic"
            label="Search your word"
            variant="outlined"
            className="search"
            autocomplete="off"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <br />
          <TextField
            select
            label="Languages"
            className="select"
            value={category}
            onChange={(e) => onHandleChange(e.target.value)}
            helperText="Please Select your language"
            variant="outlined"
          >
            {categories.map((category) => (
              <MenuItem value={category.label} key={category.label}>
                {category.value}
              </MenuItem>
            ))}
          </TextField>

          {meaning[0] && word && category === "en" && (
            <div className="song">
              <audio
                className="song"
                style={{ borderRadius: 10 }}
                src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
                controls
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
