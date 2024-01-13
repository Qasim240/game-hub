import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput: React.FC<Props> = ({ onSearch }) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box marginBottom={5}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement>
            <BsSearch />
          </InputLeftElement>
          <Input ref={ref} type="tel" placeholder="Phone number" />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
