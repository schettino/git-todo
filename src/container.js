import * as React from 'react';
import {Flex} from './style';

const Container = props => (
  <Flex direction="row" justifyContent="center">
    <Flex basis="60" padding="30px" direction="row" {...props} />
  </Flex>
);

export default Container;
