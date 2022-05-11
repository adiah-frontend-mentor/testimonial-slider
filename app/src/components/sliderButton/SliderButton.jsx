import "./sliderButton.scss";


const SliderButton = ({prev, next}) => {
  return (
    <div className="slider">
      <button className="slider__btn"
        onClick={prev}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18">
          <path
            fill="none"
            stroke="#8585AC"
            // strokeWidth="3"
            d="M11 1L3 9l8 8"
          />
        </svg>
      </button>
      <button className="slider__btn"
        onClick={next}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18" viewBox="0 0 13 18">
          <path 
            fill="none" 
            stroke="#8585AC" 
            // strokeWidth="3" 
            d="M2 1l8 8-8 8" 
          />
        </svg>
      </button>
    </div>
  );
};

export default SliderButton;
