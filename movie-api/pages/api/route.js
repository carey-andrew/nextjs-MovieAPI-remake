"use client";
import React from "react";
import { useState, useEffect } from "react";

function Router() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiKey = process.env.DATA_API_KEY;
        const apiUrl = "https://api.themoviedb.org/3/movie/changes";

        const response = await fetch(apiUrl, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const responseData = await response.json();
        setData(responseData); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call fetchData when the component mounts
  }, []); // Empty dependency array ensures it runs once on mount

  console.log(data);

  return <div>This is the Main</div>;
}

export default Router;

