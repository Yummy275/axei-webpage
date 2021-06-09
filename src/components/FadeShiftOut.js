import { keyframes } from 'styled-components';

const FadeShiftIn = (endX, endY) => keyframes`
    from {
        opacity: 1;
        transform: translate: (0);
    }
    to {
        opacity: 0;
        transform: translate(${endX}, ${endY});
    }
    
`;

export default FadeShiftIn;
