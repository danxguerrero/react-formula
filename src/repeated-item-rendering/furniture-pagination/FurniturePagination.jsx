import { useState } from 'react';

import FurnitureItem from "./components/FurnitureItem";
import { PageButton } from './components/PageButton';
import furnitures from "./data/furnitures";

const FurniturePagination = () => {
    const [startIndex, setStartIndex] = useState(0);
    const furnitureItems = furnitures.slice(5 * startIndex, 5 * (startIndex + 1)).map((furniture, idx) => (
        <FurnitureItem furniture={furniture} key={idx} />
    ));
    const numPages = Math.ceil(furnitures.length / 5)
    const pageButtons = Array.from({length: numPages}).map((_, idx) => <PageButton key={idx} pageNum={idx + 1} onClick={() => setStartIndex(idx)} startIndex={startIndex}/>)

    return (
        <div className="flex flex-col items-center py-64 bg-stone-100">
            
            <div className="mx-4 mb-10 text-4xl text-stone-600 ">Autumn's Fabulous Furniture</div>
            <div className="border-b border-neutral-300 w-full max-w-2xl flex justify-end">
                {pageButtons}
            </div>
            <div className="w-full max-w-2xl">{furnitureItems}</div>
            
        </div>
    );
};

export default FurniturePagination;
