"use client";
import React from "react";
import Title from "@/components/Title";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ourOfficeItems } from "@/data/data";
import Button from "@/components/Button";
//motion
import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/motion/animation";

interface TabPanelItem {
  id: number;
  subtitle: string;
  title: string;
  text: string;
  contactInfo: {
    icon: React.ElementType;
    label: string;
  }[];
}

export default function OurOffices() {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="container"
      >
        {/* Title */}
        <Title
          title="Discover Our Office Locations"
          text="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"
        />

        {/* Tabs */}
        <motion.div variants={fadeIn}>
          {ourOfficeItems.map((item) => (
            <Tabs key={item.id}>
              <TabList
                className={
                  "space-x-2 flex mt-8 mb-12 flex-wrap p-2 rounded-sm space-y-2 border-b border-b-grey-15 pb-6 w-full"
                }
              >
                {item.tabList.map((tab, index) => (
                  <Tab
                    key={index}
                    className={
                      "border border-b-grey-15 rounded-sm w-32 h-12 flex items-center justify-center cursor-pointer"
                    }
                  >
                    {tab.label}
                  </Tab>
                ))}
              </TabList>

              {item.tabList.map((tab, index) => {
                let filteredPanels: TabPanelItem[] = [];

                if (tab.label === "All") {
                  filteredPanels = item.tabPanels;
                } else if (tab.label === "Regional") {
                  filteredPanels = item.tabPanels.filter((panel) =>
                    panel.subtitle.toLowerCase().includes("regional")
                  );
                } else if (tab.label === "International") {
                  filteredPanels = item.tabPanels.filter((panel) =>
                    panel.subtitle.toLowerCase().includes("international")
                  );
                }

                return (
                  <TabPanel key={index}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredPanels.map((panel) => (
                        <div
                          key={panel.id}
                          className="border border-grey-15 p-5 lg:p-8 rounded-lg grid gap-4 lg:gap-7"
                        >
                          <div className="space-y-2">
                            <p className="">{panel.subtitle}</p>
                            <h4 className="">{panel.title}</h4>
                            <p className="">{panel.text}</p>
                          </div>

                          <div className="space-x-2 flex items-center mb-4 flex-wrap space-y-1.5">
                            {panel.contactInfo.map((info, index) => (
                              <p
                                key={index}
                                className="flex items-center gap-2 text-sm border border-grey-15 py-1 rounded-[50px] px-2"
                              >
                                <span>{React.createElement(info.icon)}</span>
                                {info.label}
                              </p>
                            ))}
                          </div>
                          <button className="secondary-btn">
                            Get Direction
                          </button>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                );
              })}
            </Tabs>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
