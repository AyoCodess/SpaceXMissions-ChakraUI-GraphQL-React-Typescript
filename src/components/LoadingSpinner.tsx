import React from 'react';
import { Circles } from 'react-loader-spinner';
import { Flex} from '@chakra-ui/react'

export const LoadingSpinner = () => {
  return (
    <Flex flexDirection='column' alignItems='center' justifyContent='center' height='100vh'>
      <Circles ariaLabel='loading-indicator' color='red' width="7rem" height="7rem" />
    </Flex>
  );
};