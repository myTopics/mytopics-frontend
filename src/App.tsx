import React from 'react';
import './App.css';
import {Card, StyledBody} from 'baseui/card';



const App: React.FC = () => {
  return (
    <div className="App">
      <Card
          overrides={{Root: {style: {width: '328px'}}}}
          headerImage={'https://source.unsplash.com/user/erondu/700x400'}
          title="Example card"
      >
        <StyledBody>
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
          ornare faucibus ex, non facilisis nisl.
        </StyledBody>
      </Card>
    </div>
  );
};

export default App;
