import './testimonial.scss';

import tanya from '../../images/image-tanya.jpg';
import SliderButton from '../sliderButton/SliderButton';

const Testimonial = () => {
  return (
	<div className='testimonial'>
		<div className="testimonial-image">
			<img src={tanya} alt="" className="testimonial-image__picture" />
			<SliderButton />
		</div>
		<div className="text">
			<p className="text__body">
				“ I’ve been interested in coding for a while but never taken the jump, until now. 
				I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
				excited about the future. ”
			</p>	
			<div className="text__footer">
				<h1 className="text__name">Tanya Sinclair</h1>
				<p className="text__position">UX Engineer</p>
			</div>
		</div>
	</div>
  )
}

export default Testimonial