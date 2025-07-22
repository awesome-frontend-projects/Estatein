"use client";

import React, { useState } from "react";
import {
  RiSearchLine,
  RiMapLine,
  RiHome4Line,
  RiMoneyDollarCircleLine,
  RiBuildingLine,
} from "@remixicon/react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { propertiesItems } from "@/data/data";

//motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "@/motion/animation";

// Properties data type
type PropertyIcon = {
  icon: string;
  label: string;
};

type PropertyItem = {
  id: number;
  img: string;
  title: string;
  text: string;
  location: string;
  type: string;
  year: number;
  price: number;
  icons: PropertyIcon[];
};

// Filter item type
type FilterItem = {
  id: number;
  icon: React.ComponentType<any>;
  label: string;
  field: keyof PropertyItem;
  options: string[];
};

const filterItems: FilterItem[] = [
  {
    id: 1,
    icon: RiMapLine,
    label: "Location",
    field: "location",
    options: ["New York", "Chicago", "Los Angeles", "Miami"],
  },
  {
    id: 2,
    icon: RiHome4Line,
    label: "Property Type",
    field: "type",
    options: ["Villa", "Apartment", "House", "Loft", "Cabin"],
  },
  {
    id: 3,
    icon: RiMoneyDollarCircleLine,
    label: "Price Range",
    field: "price",
    options: ["< 400000", "400000 - 600000", "> 600000"],
  },
  {
    id: 4,
    icon: RiBuildingLine,
    label: "Build Year",
    field: "year",
    options: ["Before 2010", "2010 - 2020", "2020+"],
  },
];

export default function SearchFilters() {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<
    Partial<Record<keyof PropertyItem, string>>
  >({});

  const handleFilterChange = (field: keyof PropertyItem, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredProperties = propertiesItems.filter((item) => {
    const matchesSearch =
      search.trim() === "" ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.text.toLowerCase().includes(search.toLowerCase());

    const matchesFilters = filterItems.every(({ field }) => {
      if (!filters[field]) return true;

      const filterValue = filters[field]!.toLowerCase();

      if (field === "year") {
        if (filterValue === "before 2010") return item.year < 2010;
        if (filterValue === "2010 - 2020")
          return item.year >= 2010 && item.year <= 2020;
        if (filterValue === "2020+") return item.year > 2020;
        return true;
      }

      if (field === "price") {
        if (filterValue === "< 400000") return item.price < 400000;
        if (filterValue === "400000 - 600000")
          return item.price >= 400000 && item.price <= 600000;
        if (filterValue === "> 600000") return item.price > 600000;
        return true;
      }

      // For string fields (location, type), case-insensitive compare
      const itemFieldValue = item[field];
      if (typeof itemFieldValue === "string") {
        return itemFieldValue.toLowerCase() === filterValue;
      }

      return false;
    });

    return matchesSearch && matchesFilters;
  });

  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="container"
      >
        {/* Search field */}
        <motion.div
          variants={fadeIn}
          className="max-w-[1100px] h-[81px] bg-grey-08 border border-grey-15 rounded-lg w-full flex items-center justify-between px-5 py-4 justify-self-center"
        >
          <input
            type="search"
            placeholder="Search For A Property"
            className="w-full h-full outline-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="secondary-btn p-3 md:px-5 md:py-2.5 shrink-0">
            <RiSearchLine size={25} />
          </button>
        </motion.div>

        {/* Filter wrapper */}
        <motion.div
          variants={fadeIn}
          className="flex justify-center flex-wrap gap-5 mt-10"
        >
          {filterItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex flex-col gap-1">
                <label className="text-grey-60 flex items-center gap-1 mb-2">
                  <Icon /> {item.label}
                </label>
                <Select
                  onValueChange={(value) =>
                    handleFilterChange(item.field, value)
                  }
                >
                  <SelectTrigger className="!w-[200px] !h-[52px] !rounded-[6px]">
                    <SelectValue placeholder={`Select ${item.label}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {item.options.map((option, i) => (
                      <SelectItem key={i} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            );
          })}
        </motion.div>

        {/* Card wrapper */}
        <motion.div
          variants={fadeInUp}
          className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 mt-20"
        >
          {filteredProperties.length > 0 ? (
            filteredProperties.map((item) => (
              <div
                className="border border-grey-15 p-6 rounded-xl"
                key={item.id}
              >
                {/* Card img */}
                <figure>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={354}
                    height={255}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </figure>

                {/* Card content */}
                <div className="mt-3.5">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="flex items-center flex-wrap gap-1.5 my-5">
                    {item.icons.map((iconItem, index) => (
                      <div
                        className="border border-grey-15 rounded-[28px] p-3 flex gap-1.5 bg-grey-10"
                        key={index}
                      >
                        <span>
                          <Image
                            src={iconItem.icon}
                            alt="icon"
                            width={20}
                            height={20}
                          />
                        </span>
                        <p className="text-sm">{iconItem.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between flex-wrap gap-2.5">
                    <p className="font-semibold grid gap-1">
                      Price{" "}
                      <span className="text-white text-lg">${item.price}</span>
                    </p>
                    <button className="secondary-btn">
                      View Property Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full mt-10 text-center text-gray-500">
              No properties found matching your criteria.
            </p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
