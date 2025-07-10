import Title from "@/components/Title";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export const formItems = [
  {
    id: 1,
    inputs: [
      {
        id: 1,
        label: "First Name",
        type: "text",
        placeholder: "Enter First Name",
      },
      {
        id: 2,
        label: "Last Name",
        type: "text",
        placeholder: "Enter Last Name",
      },
      {
        id: 3,
        label: "Email",
        type: "email",
        placeholder: "Enter your Email",
      },
      {
        id: 4,
        label: "Phone",
        type: "number",
        placeholder: "Enter Phone Number",
      },
    ],
  },
  {
    id: 2,
    selects: [
      {
        id: 1,
        label: "Preferred Location",
        placeholder: "Select Location",
        options: ["New York", "Chicago", "Los Angeles", "Miami"],
      },
      {
        id: 2,
        label: "Property Type",
        placeholder: "Select Property Type",
        options: ["Villa", "Apartment", "House", "Loft", "Cabin"],
      },
      {
        id: 3,
        label: "No. of Bathrooms",
        placeholder: "Select number of Bathrooms",
        options: ["1", "2", "3", "4", "5"],
      },
      {
        id: 4,
        label: "No. of Bedrooms",
        placeholder: "Select number of Bedrooms",
        options: ["1", "2", "3", "4", "5", "6"],
      },
      {
        id: 5,
        label: "Budget",
        placeholder: "Select Budget",
        options: ["< 400000", "400000 - 600000", "> 600000"],
      },
    ],
  },
];

export default function ContactForm() {
  return (
    <section className="section">
      <div className="container">
        {/* Title */}
        <Title
          title="Let's Make it Happen"
          text="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
        />

        {/* form */}
        <form className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mt-8 md:mt-12 border border-grey-15 rounded-[12px] p-10">
          {formItems.map((group) => (
            <React.Fragment key={group.id}>
              {/* Map Inputs */}
              {group.inputs?.map((input) => (
                <div className="flex flex-col gap-2" key={input.id}>
                  <label
                    htmlFor={`input-${input.id}`}
                    className="font-semibold"
                  >
                    {input.label}
                  </label>
                  <Input
                    id={`input-${input.id}`}
                    type={input.type}
                    placeholder={input.placeholder}
                    className="h-[52px] w-full !rounded-[6px]"
                  />
                </div>
              ))}

              {/* Map Selects */}
              {group.selects?.map((select) => (
                <div
                  className={`flex flex-col gap-2 ${
                    select.label === "Budget" ? "!col-span-2" : ""
                  }`}
                  key={select.id}
                >
                  <label
                    htmlFor={`select-${select.id}`}
                    className="font-semibold"
                  >
                    {select.label}
                  </label>
                  <Select>
                    <SelectTrigger
                      id={`select-${select.id}`}
                      className="w-full !h-[52px] !rounded-[6px]"
                    >
                      <SelectValue placeholder={select.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {select.options.map((option, i) => (
                        <SelectItem key={i} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </React.Fragment>
          ))}

          {/* opation */}
          <div className="col-span-2 flex flex-col gap-2">
            <label htmlFor="">Preferred Contact Method</label>
            <div className="flex gap-6">
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="h-[52px] w-full !rounded-[6px]"
              />
              <Input
                type="number"
                placeholder="Enter Your Number"
                className="h-[52px] w-full !rounded-[6px]"
              />
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-4 flex flex-col gap-2">
            <label htmlFor="textarea">Message</label>
            <Textarea
              placeholder="Enter your Message here.."
              className="h-[150px] resize-none"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
