import { RiSearchLine } from "@remixicon/react";
import React from "react";

export default function SearchFilters() {
  return (
    <section>
      <div className="container">
        {/* Search field */}
        <div className="max-w-[1100px] h-[81px] bg-grey-08 border border-grey-15 rounded-lg w-full flex items-center justify-between px-5 py-4 justify-self-center">
          <input
            type="search"
            placeholder="Search For A Property"
            className="w-full h-full outline-0"
          />
          <button className="secondary-btn flex items-center gap-2 shrink-0">
            <RiSearchLine size={25} />
            Find Property
          </button>
        </div>

        {/* Filter wrapper */}
        <div className=""></div>
      </div>
    </section>
  );
}
