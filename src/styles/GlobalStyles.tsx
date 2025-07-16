import { Global, css } from "@emotion/react";

const globalStyles = css`
  @import url(https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic);

* {
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

a {
color: white;
  /* color: #002c96; */
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 100%;
  font-family: Lato, sans-serif;
  font-size: 1.125rem;
}

::selection {
  background: #99caff; /* світло-блакитний */
  color: #000;
}

:focus-visible {
  outline-offset: 4px;
}

`

function GlobalStyles() {
  return <Global styles={globalStyles} />
}

export default GlobalStyles;