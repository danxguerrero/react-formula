export const Joke = ({ joke, showAnswer, setShowAnswer }) => {
    return <div>
        <div className='m-8 flex flex-col items-center'>
            <div className='m-3 text-3xl text-slate-600'>{joke.question}</div>
            <div className='m-3 text-2xl text-blue-600'>{showAnswer ? joke.answer : ''}</div>
        </div>
    </div>
}