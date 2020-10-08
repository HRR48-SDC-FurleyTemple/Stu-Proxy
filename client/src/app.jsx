import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    "view options"
    "reviews options"
    "bottom bottom"
`;

const View = styled.div`
  grid-area: view;
`;

const Options = styled.div`
  grid-area: options;
`;

const Reviews = styled.div`
  grid-area: reviews;
`;

const Bottom = styled.div`
  grid-area: bottom;
`;

const App = () => {
  return (
    <Grid>
      <View id='productView'></View>
      <Options id="productOptionsApp"></Options>
      <Reviews id='review-module'></Reviews>
      <Bottom id="BottomCarousel"></Bottom>
    </Grid>
  );
};


ReactDOM.render(<App />, document.getElementById("app"));