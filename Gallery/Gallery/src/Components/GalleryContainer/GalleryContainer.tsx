import { useState } from "react";
import { CardProps } from "../../Types/Types";
import { Card } from "../Card/Card";
export const GalleryContainer = ({ cards }: { cards: CardProps[] }) => {
  

  return (
    <div>
     

      <div className=" flex gap-8 justify-center items-center flex-row bg-black flex-wrap">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};
