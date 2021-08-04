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
                <b> &#x2192; {defi.definition}</b>
                <hr className="hrtag" />
                {defi.example && (
                  <span>
                    <b>Example : </b>
                    {defi.example}
                  </span>
                )}
                <br />
                {defi.synonyms && (
                  <span>
                    <b>Synonyms : </b>
                    {defi.synonyms.map((synonym) => (
                      <b>{synonym}, </b>
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
