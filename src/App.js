import React, { useEffect } from "react";
import Tmdb from "./Tmdb";

function App() {
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      console.log(list)
    }
    loadAll()
  }, [])
  
  return (
    <div>
      salve
    </div>
  );
}

export default App;
