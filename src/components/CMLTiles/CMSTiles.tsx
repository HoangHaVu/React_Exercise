import React from 'react';
import css from './CMSTiles.scss';

const CMSTiles: React.FunctionComponent = () => {
  return (
    <div className={css.tile}>
      <img className={css.pic} src="/no_picture.png" alt="pics"></img>
      <div className={css.content}>asdbasibdiuabsfiuhausidfasdbasibdiuabsfiuhausidfuishdifasdbasibdiuabsfiuhausidfuishdifasdbasibdiuabsfiuhausidfuishdifuishdif</div>
    </div>
  );
};
export default CMSTiles;
