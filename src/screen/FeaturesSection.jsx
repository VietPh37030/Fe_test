import React from 'react';
import { Paintbrush, RefreshCw, Sliders, Download, Headphones, Clock, MapPin, LayoutTemplate } from "lucide-react";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Paintbrush className="w-12 h-12 text-primary" />,
      title: "ENHANCED PAGE BUILDER",
      description:
        "A boosted version of WPBakery Page Builder included ($74 value) with a clean admin design and a ton of additional elements for musicians.",
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-primary" />,
      title: "SLIDER REVOLUTION",
      description:
        "Comes with the Revolution Slider plugin included ($109 value). All demo slider templates are included in your theme package.",
    },
    {
      icon: <Sliders className="w-12 h-12 text-primary" />,
      title: "LIVE CUSTOMIZER",
      description:
        "No more bloated theme options panels. Change the main appearance of your website and see the changes instantly in the live preview.",
    },
    {
      icon: <Download className="w-12 h-12 text-primary" />,
      title: "ONE-CLICK DEMO INSTALL",
      description:
        "Import the demo data in one click and edit the content to suits your need. The easiest way to create an awesome website quickly.",
    },
    {
      icon: <Headphones className="w-12 h-12 text-primary" />,
      title: "POWER ELITE SUPPORT",
      description:
        "Your theme package comes with 6 months of support included for free! We got a dedicated support forum with a very rich knowledge base and support staff tech guys to help you out.",
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "LIFETIME FREE UPDATES",
      description:
        "With Herion, you will get lifetime free updates. Updates may contain various theme improvements, bug fixes, and security updates.",
    },
    {
      icon: <MapPin className="w-12 h-12 text-primary" />,
      title: "TRANSLATABLE READY",
      description:
        "Translation files are included to translate your site easily with plugins like Loco Translate or create a multilingual website using WPML.",
    },
    {
      icon: <LayoutTemplate className="w-12 h-12 text-primary" />,
      title: "CHILD THEME INCLUDED",
      description:
        "Herion comes packed with a ready-to-use child theme template in case you want to re-brand the theme for you or your client or if you want to add your own customization.",
    },
    {
      icon: <LayoutTemplate className="w-12 h-12 text-primary" />,
      title: "CHILD THEME INCLUDED",
      description:
        "Herion comes packed with a ready-to-use child theme template in case you want to re-brand the theme for you or your client or if you want to add your own customization.",
    },
    {
      icon: <LayoutTemplate className="w-12 h-12 text-primary" />,
      title: "CHILD THEME INCLUDED",
      description:
        "Herion comes packed with a ready-to-use child theme template in case you want to re-brand the theme for you or your client or if you want to add your own customization.",
    },
    {
      icon: <LayoutTemplate className="w-12 h-12 text-primary" />,
      title: "CHILD THEME INCLUDED",
      description:
        "Herion comes packed with a ready-to-use child theme template in case you want to re-brand the theme for you or your client or if you want to add your own customization.",
    },
    {
      icon: <LayoutTemplate className="w-12 h-12 text-primary" />,
      title: "CHILD THEME INCLUDED",
      description:
        "Herion comes packed with a ready-to-use child theme template in case you want to re-brand the theme for you or your client or if you want to add your own customization.",
    },
  ];

  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-5">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-start bg-white rounded-xl p-6 shadow-md h-full"
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;