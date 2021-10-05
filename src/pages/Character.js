import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import "../style/Character.css";
import { useParams } from "react-router";
export default function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  console.log({ data, loading, error });
  if (error) return <div>There is an error</div>;
  if (loading) return <div>Loading...</div>;
  return (
    <div className="Character">
      <img
        src={data.character.image}
        width={750}
        height={750}
        alt={data.character.name}
      />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} -<b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
