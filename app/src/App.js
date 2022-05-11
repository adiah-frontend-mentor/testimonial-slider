import { useState } from 'react';
import './App.scss';
import Testimonial from './components/testimonial/Testimonial';

import tanya from './images/image-tanya.jpg';
import john from './images/image-john.jpg';

const testimonialData = [
  {
    name: 'Tanya Sinclair',
    position: 'UX Engineer',
    image: tanya,
    quote: 'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.'
  },
  {
    name: 'John Tarkpor',
    position: 'Junior Front-end Developer',
    image: john,
    quote: 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.'
  }
]
console.log(testimonialData.length)

function App() {

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonial(oldTestimonial => oldTestimonial === 0 ? testimonialData.length - 1 : oldTestimonial - 1)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial(oldTestimonial => oldTestimonial === testimonialData.length - 1 ? 0 : oldTestimonial + 1)
  }



  return (
    <div className="page-wrapper">
      <Testimonial 
        data={testimonialData[currentTestimonial]}
        next={nextTestimonial}
        prev={prevTestimonial}
      />
    </div>
  );
}

export default App;
