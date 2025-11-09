import { TestimonialItem } from './components/testimonialItem.jsx'
import testimonials from './data/testimonials.jsx'

const App = () => {
   const testimonialItems = testimonials.map((testimonial, idx) => <TestimonialItem key={idx} testimonial={testimonial} />)
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="m-12 text-4xl border-b-4 border-orange-500 p-3">Customers Love AI's Autos</h1>
      <div className="border border-red-500 w-full max-w-5xl flex justify-between">
        <button>Previous</button>
        <div className="flex">{testimonialItems}</div>
        <button>Next</button>
      
      </div>
    </div>
  );
};

export default App;
