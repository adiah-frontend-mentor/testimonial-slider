import './testimonial.scss';

import { CSSTransition, SwitchTransition } from 'react-transition-group';

import SliderButton from '../sliderButton/SliderButton';

const Testimonial = ({data, next, prev}) => {


	return (
		<div className='testimonial'>
			<div className="testimonial-image">
				<SwitchTransition>
					<CSSTransition
						key={data.image}
						timeout={500}
						classNames='testimonial-image__picture-'
					>
						<img src={data.image} alt="" className="testimonial-image__picture" />
					</CSSTransition>
				</SwitchTransition>
				
				<SliderButton 
					next={next}
					prev={prev}
				/>
			</div>
			<div className="text">
				<SwitchTransition>
					<CSSTransition
						key={data.quote}
						timeout={500}
						classNames='text__body-'
					>
						<p className="text__body">
							“ {data.quote} ”
						</p>	
					</CSSTransition>
				</SwitchTransition>

				<SwitchTransition>
					<CSSTransition
						key={data.quote}
						timeout={500}
						classNames="text__footer-"
					>
						<div className="text__footer">
							<h1 className="text__name">{data.name}</h1>
							<p className="text__position">{data.position}</p>
						</div>
					</CSSTransition>
				</SwitchTransition>



			</div>
		</div>
	)
}

export default Testimonial