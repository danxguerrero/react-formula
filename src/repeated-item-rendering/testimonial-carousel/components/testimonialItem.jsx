export const TestimonialItem = ({testimonial}) => {
  return <div className=" w-72  border m-3 rounded-lg">
  <div className="flex flex-col items-center bg-orange-500 rounded-t-lg">
    <img src={testimonial.portrait} alt="Customer Photo" className="h-24 w-24 rounded-full mx-auto mt-4" />
    <p className="text-white">{testimonial.name}</p>
  </div>
  <div className="flex flex-col items-center p-3">
    <p>{testimonial.rating}<span className="text-yellow-300">{' ★'}</span></p>
    <p className="p-4">{testimonial.text}</p>
  </div>
  </div>
}