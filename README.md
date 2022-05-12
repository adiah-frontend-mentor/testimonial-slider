# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard


### Screenshot

![Screenshot](./screenshot.png)


### Links

- Solution URL: [github.com/adiah-frontend-mentor/testimonials-slider](https://github.com/adiah-frontend-mentor/testimonials-slider)
- Live Site URL: [adiah-frontend-mentor.github.io/testimonials-slider](https://adiah-frontend-mentor.github.io/testimonials-slider)

## My process

Styled the mobile and desktop sites.

Then I imported the data dynamically.

Then added transitions.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- React
- SCSS
- Flexbox
- Mobile-first workflow


### What I learned

Adding `viewbox` to scale svgs so that the whole image shows on resizing:

```jsx
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="18" viewBox="0 0 13 18">
  <path 
    fill="none" 
    stroke="#8585AC" 
    // strokeWidth="3" 
    d="M2 1l8 8-8 8" 
  />
</svg>
```

Transitions with `react-transition-group`

```jsx
<SwitchTransition>
  <CSSTransition
    key={data.image}
    timeout={500}
    classNames='testimonial-image__picture-'
  >
    <img src={data.image} alt="" className="testimonial-image__picture" />
  </CSSTransition>
</SwitchTransition>
```

Wrap the component that's changing with the `Transition` from the library.

The `CSSTransition` gives access to 3 transition stages:

* appear
* enter
* exit

And requires three props:

* `in` - tells the library when showing or hiding the component.
	Takes a boolean. In this case, use the title screen and gameboard states.
	If it's true, show the component, if it's false hide the component.

* `timeout` - how long for the animation to take place.

* `classNames` - the prefix to use on the classes that will be added to component to target in the css.

The `SwitchTransition` watches a single component , once the data inside changes trigger an enter and exit transition.

Wrap the component inside of a `CSSTransition` and then `SwitchTransition`

with the same required props, except no `in` use a `key`, since the component is not really being unmounted and mount.

the key -> what you listen to to tell if the component has changed.

Then you can style the transition stages

```scss
.testimonial-image {
  ...

	&__picture {
		position: relative;
		border-radius: 5px;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

		&--enter {
			opacity: 0;
			transform: translateX(-100%);

			@include abs.breakpoint(medium) {
				transform: translateX(100%);
			}

			&-active {
				opacity: 1;
				transform: translateX(0);
				transition: opacity 500ms, transform 500ms ease-in-out;
			}
		}

		&--exit {

			&-active {
				transform: translateX(100%);
				opacity: 0;
				transition: opacity 500ms, transform 500ms ease-in-out;
			}
		}
		
	}
}
```

### Continued development


### Useful resources




## Author

- Website - [Nathaniel Adiah](https://nathanieladiah.github.io)
- Frontend Mentor - [@nathanieladiah](https://www.frontendmentor.io/profile/nathanieladiah)
- Twitter - [@nathanieladiah](https://www.twitter.com/nathanieladiah)
