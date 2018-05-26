import styled, {css, injectGlobal} from 'styled-components';

export const Flex = styled.div`
  display: flex;

  ${({flex}) =>
    flex &&
    css`
      flex: ${flex};
    `}

  ${({padding}) =>
    padding &&
    css`
      padding: ${padding};
    `} 
    
  ${({margin}) =>
    margin &&
    css`
      padding: ${margin};
    `}     

  ${({direction}) =>
    direction &&
    css`
      flex-direction: ${direction};
    `}

  ${({basis}) =>
    basis &&
    css`
      flex-basis: ${basis}%;
    `};    

  justify-content: ${({justifyContent}) =>
    justifyContent ? justifyContent : 'flex-start'};

  align-items: ${({alignItems}) => (alignItems ? alignItems : 'stretch')};

  @media (max-width: 768px) {
    ${({responsive}) =>
      responsive &&
      css`
        flex-direction: row;
        flex: 1;
      `}
  }
`;

export const Item = styled(Flex)`
  box-shadow: 0 2px 12px rgba(23, 26, 33, 0.18);
  padding: 23px;
  margin: 12px;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 22px;

  width: 100%;
  box-shadow: 0 2px 12px rgba(23, 26, 33, 0.18);
  border-radius: 8px;
`;

export const Button = styled.button`
  background: palegoldenrod;
  padding: 2px;
  color: #fff;
`;

export default function applyGlobalStyles() {
  return injectGlobal`
   * {
        border: 0;
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        font-weight: inherit;
        margin: 0;
        outline: 0;
        padding: 0;
        text-decoration: none;
        text-rendering: optimizeLegibility;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    html {
        display: flex;
        min-height: 100%;
        width: 100%;
        box-sizing: border-box;
        font-size: 16px;
        line-height: 1.5;
        background-color: #ffffff;
        color: #16171a;
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    }

    body {
        box-sizing: border-box;
        max-width: 100%;
        min-height: 100%;
        -webkit-overflow-scrolling: touch;
    }

    #root {
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flexbox;
        flex-direction: column;
        -ms-flex-direction: column;
        -moz-flex-direction: column;
        -webkit-flex-direction: column;
        min-height: 100vh;
        width: 100vw;
    }  

    a {
        color: currentColor;
        text-decoration: none;
    }

    a:hover {
        cursor: pointer;
    }        
  `;
}
