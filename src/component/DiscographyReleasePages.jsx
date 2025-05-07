import React, { useState } from "react";
import ReleaseTabs from "./ReleaseTabs";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const DiscographyReleasePages = ({ data, headerTitle, pageTitle, contentTitle, tab1Label, tab2Label, tab2Data }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  // Chọn dữ liệu dựa trên tab đang active
  const displayData = activeTab === "tab1" ? data : tab2Data;

  return (
    <div className="w-full min-h-screen mt-20 bg-white flex flex-col items-center py-8">
      <div>
        <motion.h2
          className="text-[95px] text-gray-400  text-center mb-2 italic"
          style={{ fontFamily: "MyFont" }}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {headerTitle}
        </motion.h2>
        <motion.h3
          className="text-[35px] text-black text-center"
          style={{ fontFamily: "MyFont3" }}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {pageTitle}
        </motion.h3>
        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-8">
          {contentTitle}
        </p>
        <ReleaseTabs
          tab1Label={tab1Label}
          tab2Label={tab2Label}
          onTabChange={(tab) => setActiveTab(tab)}
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {displayData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="cursor-pointer transition-transform hover:-translate-y-2 flex flex-col items-center"
              onClick={() => window.open(item.link, "_blank")}
            >
              <div
                className="bg-white shadow-lg"
                style={{ width: "438px", height: "282px", overflow: "hidden" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div
                className="text-[18px] font-semibold mt-4 text-gray-800 text-center"
                style={{ fontFamily: "MyFont2" }}
              >
                {item.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <p className="text-gray-500  text-lg" >
            and more...
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscographyReleasePages;