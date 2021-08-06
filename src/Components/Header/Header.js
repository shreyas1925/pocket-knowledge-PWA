import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./Header.css";
import categories from "../../data/category";
const Header = ({ word, setWord, category, setCategory }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const onHandleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="header">
      <span className="heading" style={{ color: "#1B966A" }}>
        <b>{word ? word : "Pocket knowledge"}</b>
      </span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="outlined-basic"
            label="Search your word"
            variant="outlined"
            className="search"
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
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
