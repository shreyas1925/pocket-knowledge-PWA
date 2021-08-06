import React from "react";
import "./Definiton.css";

const Definition = ({ word, meaning, category }) => {
  return (
    <div className="meanings__main">
      {word == "" ? (
        <span className="subtitle"></span>
      ) : (
        meaning.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((defi) => (
              <div className="singleMean">
                <span>
                  <b style={{ color: "#1B966A" }}>Meaning : </b>
                  <b style={{ color: "#fff" }}> &#x2192; {defi.definition}</b>
                </span>

                {/* <hr className="hrtag" /> */}
                {defi.example && (
                  <span>
                    <b style={{ color: "#1B966A" }}>Example : </b>
                    <b style={{ color: "#A4A6A8" }}>{defi.example} </b>
                  </span>
                )}

                {defi.synonyms && (
                  <span>
                    <b style={{ color: "#1B966A" }}>Synonyms : </b>
                    {defi.synonyms.map((synonym) => (
                      <b style={{ color: "#A4A6A8" }}>{synonym}, </b>
                    ))}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definition;
