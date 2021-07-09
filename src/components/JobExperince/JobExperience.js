/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Flex, Text, Select, Box } from '@chakra-ui/react';

export const JobExpeerience = ({ job, index }) => {
  return (
    <Box>
      <Flex direction="row" h={'auto'}>
        <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
          #{index}
        </Text>
        <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
          {job.key}
        </Text>

        <Select placeholder="Select years of experience" w={300} ml={40} mt={8}>
          <option value={0}>{`<1 Years`}</option>
          <option value={1}>1 Year</option>
          <option value={2}>2 Years</option>
          <option value={3}>3 Years</option>
          <option value={4}>4 Years</option>
          <option value={5}>5+ Years</option>
        </Select>
      </Flex>
      <hr style={{ marginTop: '20px' }} />
    </Box>
  );
};
