import { useState } from 'react'
import { TestimonialItem } from './components/testimonialItem.jsx'
import testimonials from './data/testimonials.jsx'

const TestimonialCarousel = () => {
    const [startIndex, setStartIndex] = useState(1)
    const testimonialItems = testimonials.slice(startIndex, startIndex + 3).map((testimonial, idx) => <TestimonialItem key={idx} testimonial={testimonial} />)
    const handlePrevClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1)
        } else {
            setStartIndex(testimonials.length - 3)
        }
    }

    const handleNextClick = () => {
        if (startIndex < testimonials.length - 3) {
            setStartIndex(startIndex + 1)
        } else {
            setStartIndex(0)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="m-12 text-4xl border-b-4 border-orange-500 p-3">Customers Love AI's Autos</h1>
            <div className="w-full max-w-5xl flex justify-between items-center">
                <div className="p-5 rounded-full bg-orange-500 h-12 w-24 flex items-center justify-center">
                    <button className="text-white text-lg" onClick={handlePrevClick}>{'<'}</button>
                </div>
                <div className="flex">{testimonialItems}</div>
                <div className="p-5 rounded-full bg-orange-500 h-12 w-24 flex items-center justify-center">
                    <button className="text-white text-lg" onClick={handleNextClick}>{'>'}</button>
                </div>

            </div>
        </div>
    );
};

export default TestimonialCarousel;