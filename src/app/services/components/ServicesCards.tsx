import Cards from "@/components/Cards";
import { CardsItems } from "@/data/data";
import React from "react";

export default function ServicesCards() {
  return (
    <section>
      <div className="container grid grid-cols-2 gap-2.5 mt-10 lg:grid-cols-4">
        {CardsItems.map((item) => (
          <Cards key={item.id} icon={item.icon} label={item.label} />
        ))}
      </div>
    </section>
  );
}
