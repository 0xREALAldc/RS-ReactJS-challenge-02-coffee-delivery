import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;

  /* 
    this one line below means that properties like 'margin, padding, border of the element never grow it's width and heigth, but 
    to make it squeeze the element inside his borders, to keep the component the declared size
  */
  box-sizing: border-box;
}

/* to facilitate the use of REM metric unit, then I know that 0.1 REM is 1px */
html {
  font-size: 62.5%;
}

body {
  background: ${(props) => props.theme.background};

  /* 
  color: var(--gray-300); */
  /* 
    this line below here lets the fonts that we use more smooth, because we're not going to use fonts that are 
    default for the systems, it helps to let them with a better visual
  */
  -webkit-font-smoothing: antialiased; 
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.3;
  /* a note about using 'rem' 
      '1rem' means that we're using ONE metric unit relative to the default font size for html, that is 16px 
      this means the size of font will be relative to the device, and allows to if people have theis devices configured to 
      increase/decrease the font size to still do this in your website. 
   */
  font-size: 1.6rem; 
/* 
  margin: 0;
  padding: 0; */
}

`
