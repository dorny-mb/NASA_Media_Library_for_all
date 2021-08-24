import React, { ChangeEvent, FC, useEffect, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

import { useDebounce } from "../../hooks";

type SearchBarProps = InputProps & {
  onSearch: (text: string) => void;
  isLoading?: boolean;
};

const SearchBar: FC<SearchBarProps> = ({ onSearch, isLoading, ...rest }) => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>();

  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (onSearch) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch]);

  return (
    <InputGroup>
      <InputLeftElement>
        <FiSearch />
      </InputLeftElement>
      <Input
        {...rest}
        backdropFilter="blur(5px)"
        borderRadius="1rem  0 0 0"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
      />
      <InputRightElement>
        {isLoading && <Spinner size="sm" />}
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;

SearchBar.defaultProps = {
  width: "100%",
  minWidth: "220px",
  flex: 1,
  type: "text",
  placeholder: "Search...",
};
