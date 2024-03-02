"use client";
import React from "react";
import InfoCard from "./infoCard";
import infoData from "@/utils/json-files/info";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { TbMailHeart } from "react-icons/tb";

import AnimateHeroLogo from "../AnimateHeroLogo/AnimateHeroLogo";

const InfoCards = () => {
  return (
    <>
      <div>
        <AnimateHeroLogo />

        {infoData.sections.map((section, index) => (
          <InfoCard
            key={index}
            title={section.header}
            description={section.content}
          />
        ))}

        <InfoCard
          title={infoData.contact.header}
          footer={
            <div className="flex justify-between items-center text-2xl text-indigo-500">
              <div
                onClick={() =>
                  window.open(`mailto:${infoData.contact.email}`, "_blank")
                }
                className="cursor-pointer"
              >
                <TbMailHeart className="text-2xl" />
              </div>
              <div
                onClick={() =>
                  window.open(infoData.socials.instagram, "_blank")
                }
                className="cursor-pointer"
              >
                <FaInstagram className="text-2xl" />
              </div>
              <div
                onClick={() => window.open(infoData.socials.facebook, "_blank")}
                className="cursor-pointer"
              >
                <FaFacebookF className="text-2xl" />
              </div>
            </div>
          }
        ></InfoCard>
      </div>
    </>
  );
};

export default InfoCards;
