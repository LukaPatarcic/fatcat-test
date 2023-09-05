import { keyframes } from 'styled-components';

const horizontalScroll = keyframes`
	from {
	  	transform: translateX(0)
	}
  
  	to {
	  	transform: translateX(-100%);
	}
`;

const slideInDesktop = keyframes`
  0% { 
    transform: translateY(-10%); 
    opacity: 0;
  }
  100% { 
    transform: translateY(0); 
    opacity: 1;
  }
`;

const slideOutDesktop = keyframes`
  0% { 
    transform: translateY(0); 
    opacity: 1;
  }
  100% { 
    transform: translateY(-10%); 
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  0% { 
    opacity: 0;
  }
  100% { 
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% { 
    opacity: 1;
  }
  100% { 
    opacity: 0;
  }
`;

export const hovering = keyframes`
    0% {
		transform: translate(0,-10px);
    }
    25% {
		transform: translate(-10px,0);
    }
    50% {
		transform: translate(0,10px);
    }
    75% {
		transform: translate(10px,0);
    }
    100% {
		transform: translate(0,-10px);
    }
`;

export const ANIMATIONS = {
	horizontalScroll,
	slideInDesktop,
	slideOutDesktop,
	fadeIn,
	fadeOut,
	hovering,
};
