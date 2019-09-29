import * as React from 'react';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button} from 'baseui/button';
import { useContext } from 'react';
import { StateContext } from '../../context/StateContext';
import './FetchLoader.css';
import { Spinner } from 'baseui/spinner';

export default () => {
  const context = useContext(StateContext);
  return context.state.showFetchLoader && (
    <div className={'fetch-loader-container'}>
      <Card
        overrides={{Root: {style: {width: '328px'}}}}
        headerImage={'/penguin-facts-penguin-highway.jpg'}
        title="Penguin Fun Facts #3"
      >
        <StyledBody>
          Penguins all take the same path to the water, effectively creating penguin highways.
        </StyledBody>
        <StyledAction className={'fetch-spinner-container'}>
          <Spinner />
        </StyledAction>
      </Card>
    </div>
  ) || (<></>);
};