"use client";
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
import { formItems } from "@/data/data";

//motion
import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/motion/animation";

export default function ContactForm() {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title
          title="Let's Make it Happen"
          text="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
        />

        {/* form */}
        <motion.form
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mt-8 md:mt-12 border border-grey-15 rounded-[12px] p-5 lg:p-10"
        >
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
                    className="h-[52px] w-full !rounded-[6px] "
                  />
                </div>
              ))}

              {/* Map Selects */}
              {group.selects?.map((select) => (
                <div
                  className={`flex flex-col gap-2 ${
                    select.label === "Budget" ? "!lg:col-span-2" : ""
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
          <div className="lg:col-span-2 flex flex-col gap-2">
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
          <div className="lg:col-span-4 flex flex-col gap-2">
            <label htmlFor="textarea">Message</label>
            <Textarea
              placeholder="Enter your Message here.."
              className="h-[150px] resize-none"
            />
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
