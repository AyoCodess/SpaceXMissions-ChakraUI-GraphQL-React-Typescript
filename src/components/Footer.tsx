
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Text, Flex, Box} from '@chakra-ui/react'

export const Footer = () => {
  return (
    <footer >
      <Box marginTop='auto'>
        <Text padding='1rem' fontWeight='medium' textAlign='center' >Created by Ayo Adesanya</Text>
        <Flex gap='2'  justifyContent='center' marginBottom='2rem'>
          <SocialIcon url='https://www.linkedin.com/in/ayoadesanya/' />
          <SocialIcon url='https://github.com/AyoCodess' />
          <SocialIcon url='https://www.ayoadesanya.com/' />
        </Flex>
      </Box>
    </footer>
  );
};