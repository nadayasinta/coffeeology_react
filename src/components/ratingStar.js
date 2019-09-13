import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const labels = {
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

function HoverRating(props) {
  const value = 2;
  const [hover, setHover] = React.useState(-1);
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <Typography component="legend">Rating</Typography>

      </div>
      <div className="row justify-content-center">
        <Rating
          name="hover-side"
          value={value}
          size="large"
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
      </div>
      <div className="row justify-content-center">
        <h3>{labels[hover !== -1 ? hover : value]}</h3>
      </div>
    </div>
  );
}
export default HoverRating;
