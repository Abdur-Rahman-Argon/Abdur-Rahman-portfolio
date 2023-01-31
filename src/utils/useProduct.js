import React, { useEffect, useState } from "react";

const useProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://my-web-server.onrender.com/portfolio-project")
      // fetch("http://localhost:5000/portfolio-project")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data];
};

export default useProduct;
