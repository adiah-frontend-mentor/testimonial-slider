import './testimonial.scss';

import SliderButton from '../sliderButton/SliderButton';

const Testimonial = ({data, next, prev}) => {
  return (
	<div className='testimonial'>
		<div className="testimonial-image">
			<img src={data.image} alt="" className="testimonial-image__picture" />
			<SliderButton 
				next={next}
				prev={prev}
			/>
		</div>
		<div className="text">
			<p className="text__body">
				“ {data.quote} ”
			</p>	
			<div className="text__footer">
				<h1 className="text__name">{data.name}</h1>
				<p className="text__position">{data.position}</p>
			</div>
		</div>
	</div>
  )
}

export default Testimonial