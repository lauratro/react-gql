import React from "react";
import { gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantityPerUnit: Int!) {
    createProduct(record: { name: "Hotdog", quantityPerUnit: 3 })
    record {
      name
    }
  }
`;

export default function Mutation() {
  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: "Hotdog",
        quantityPerUnit: 4,
      },
    }
  );
  return (
    <div>
      <button onClick={() => createProduct()}>Click</button>
    </div>
  );
}
