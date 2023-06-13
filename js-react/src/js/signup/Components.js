import styled from 'styled-components';

export const Container = styled.div`
    backgound-color: #fff;
    border: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 678px;
    max-width: 100%;
    min-height: 400px;
`;

export const SignUpContainer = styled.div`
    position: absolute;
    top 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
    ${props => props.signinIn !== true ? `
    transform:translateX(100%);
    opacity: 1;
    z-index: 5;
    `
    
    : null}
`;

