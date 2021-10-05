import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";

export default function CharactersList() {
  const { error, loading, data } = useCharacters();
  console.log({ error, loading, data });
  if (loading) {
    return <div>Spinner...</div>;
  }
  if (error) {
    return <div>There is an error</div>;
  }
  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <div key={character.id}>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
