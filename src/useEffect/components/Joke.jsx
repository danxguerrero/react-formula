export const Joke = (props) => {
  const { joke, showAnswer } = props;

  return (
    <div className="m-20">
      <div className="mb-12 text-4xl text-center text-neutral-600">{joke.question}</div>
      {showAnswer ? <div className="text-3xl text-center text-blue-600">{joke.answer}</div> : null}
    </div>
  );
};