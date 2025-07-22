"use client";
import Title from "@/components/Title";
import { Input } from "@/components/ui/input";
import { contactFormItems } from "@/data/data";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

//motion
import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/motion/animation";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
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
          title="Let's Connect"
          text="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
        />

        {/* form */}
        <motion.form
          onSubmit={handleFormSubmit}
          variants={fadeIn}
          className="border border-grey-15 rounded-[12px] p-5 lg:p-10  mt-8 md:mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {contactFormItems.map((group) => (
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

            {/* Text area */}
            <div className="lg:col-span-3 md:col-span-2 flex flex-col gap-2">
              <label htmlFor="textarea">Message</label>
              <Textarea
                placeholder="Enter your Message here.."
                className="h-[150px] resize-none"
              />
            </div>
          </div>

          {/* Submit form */}
          <div className="flex items-center justify-between mt-8 lg:mt-12 flex-wrap gap-5">
            <div className="flex gap-1.5 ">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                I agree with Terms of Use and Privacy Policy
              </label>
            </div>
            <button className="secondary-btn">Send Your Message</button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
