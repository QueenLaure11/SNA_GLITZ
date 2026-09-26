"use client";

import React from "react";

import { JewelryTabsProps } from "@/types/tabs.type";


const JewelryTabs: React.FC<JewelryTabsProps> = ({ tabs, handleTabClick, activeTab }) => {


  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem" }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            style={{
              padding: "10px 30px",
              borderRadius: "25px",
              border: "none",
              cursor: "pointer",
              backgroundColor: activeTab === tab ? "#FDE3E3" : "transparent",
              color: activeTab === tab ? "#FF3535" : "#4B4B4B",
              fontFamily: "poppins",
              fontWeight: 200,
              fontSize: "18px",
              lineHeight: 1
            }}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default JewelryTabs;
