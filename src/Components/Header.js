import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./Header.css";
import categories from "../data/category";
const Header = ({ word, setWord, category, setCategory }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <div className="header">
      <span className="heading">{word ? word : "Pocket knowledge"}</span>
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
          <TextField
            select
            label="Languages"
            className="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
