import React, { useContext } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import css from './Control.scss';
import Headline from '../Headline/Headline';
import DataContext from '../../data/Context';

const Control: React.FunctionComponent = () => {
  const context = useContext(DataContext.DataContext);
  function sortAsc() {
    context.sortContextAsc();
  }

  function sortDesc() {
    context.sortContextDesc();
  }

  function submit() {
    const sub = context.submitContext();
    console.log(sub);
  }

  return (
    <React.Fragment>
      <Headline text={'Control'}></Headline>
      <Card>
        <nav className={css.nav}>
          <Button className={css.sortAsc} onClick={sortAsc}>
            sort asc
          </Button>
          <Button className={css.sortDesc} onClick={sortDesc}>
            sort desc
          </Button>
          <Button className={css.submit} onClick={submit}>
            submit
          </Button>
        </nav>
      </Card>
    </React.Fragment>
  );
};

export default Control;
