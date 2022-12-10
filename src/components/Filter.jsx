import { useDispatch } from 'react-redux';
import { setNameFilter } from '../redux/contacts/filterslice';
import { Input, Flex, Heading } from '@chakra-ui/react';
function Find() {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setNameFilter(e.currentTarget.value));
  };
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading textAlign="left" as="h2" size="26px" color="#1B3F34">
        CONTACTS LIST:
      </Heading>
      <Input
        maxW="550px"
        variant="flushed"
        placeholder="Find contact by name"
        name="search"
        onChange={onFilterChange}
      />
    </Flex>
  );
}
export default Find;
