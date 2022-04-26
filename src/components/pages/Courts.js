import React, { useEffect, useState } from "react";
import { courts } from "../Search";
import Table from "../Table";
import "../Courts.css";

import { motion } from "framer-motion";

export default function Courts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [query, setQuery] = useState("");
  const keys = ["name", "address", "type"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="court-background"
    >
      <h1 className="court-header">Basketball Courts</h1>
      <div className="search-container">
        <input
          className="search"
          placeholder="Search Name, Address, or Type..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        {<Table data={search(courts)} />}
      </div>
    </motion.div>
  );
}
