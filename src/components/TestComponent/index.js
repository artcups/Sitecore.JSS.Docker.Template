import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const TestComponent = (props) => (
  <div>
    <p>TestComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default TestComponent;
