import words from "./data/words.jsx";
import WordItem from "./components/WordItem.jsx";

export const WordFilter = () => {
  const worditems = words.map((word, idx) => <WordItem word={word} key={idx} />);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center w-full max-w-lg">
        {worditems}
      </div>
    </div>
  );
};

