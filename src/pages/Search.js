import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");
  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATION,
    {
      //first elem. array can be any name
      variables: {
        name,
      },
    }
  );
  console.log({ called, error, data, loading });
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>Loading...</div>}
      {error && <div>There is an error...</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
