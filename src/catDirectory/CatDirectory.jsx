import { useState } from "react";
import CatItem from "./CatItem";
import initialCats from "./initial-cats";

const CatDirectory = () => {
  const [cats, setCats] = useState(initialCats);
  
  const catItems = cats.map((cat, idx) => <CatItem key={idx} cat={cat} />);

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-indigo-50">
      <div className="flex flex-col items-center w-full max-w-2xl">
        {catItems}
      </div>
    </div>
  );
};

export default CatDirectory;