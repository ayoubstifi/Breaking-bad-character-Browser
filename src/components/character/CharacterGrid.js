import React from "react";
import CharacterItem from "./CharacterItem.js";
import Spinner from "../ui/spinner";
const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    //<h1>Loading ...</h1>
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
