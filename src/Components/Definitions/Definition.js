import React from "react";
import "./Definiton.css";
import VpnLockIcon from "@material-ui/icons/VpnLock";

const Definition = ({ word, meaning, category, LightTheme }) => {
  return (
    <div
      className="meanings__main"
      style={{
        border: LightTheme ? "2px solid #bdb2ff" : "1px solid black",
        backgroundColor: LightTheme ? "#fff" : "#2d3543",
      }}
    >
      {word == "" ? (
        <span className="subtitle">
          Search for a word <VpnLockIcon />
        </span>
      ) : (
        meaning.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((defi) => (
              <div className="singleMean">
                <span>
                  <b style={{ color: LightTheme ? "#bdb2ff" : "#1B966A" }}>
                    Meaning :{" "}
                  </b>
                  <b style={{ color: LightTheme ? "black" : "#1B966A" }}>
                    {" "}
                    &#x2192; {defi.definition}
                  </b>
                </span>

                {/* <hr className="hrtag" /> */}
                {defi.example && (
                  <span>
                    <b style={{ color: LightTheme ? "#bdb2ff" : "#1B966A" }}>
                      Example :{" "}
                    </b>
                    <b style={{ color: "#A4A6A8" }}>{defi.example} </b>
                  </span>
                )}

                {defi.synonyms && (
                  <span>
                    <b style={{ color: LightTheme ? "#bdb2ff" : "#1B966A" }}>
                      Synonyms :{" "}
                    </b>
                    {defi.synonyms.map((synonym) => (
                      <b style={{ color: "#A4A6A8" }}>{synonym}, </b>
                    ))}
                  </span>
                )}
                <hr style={{ width: "100%", marginTop: 5 }} />
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definition;
