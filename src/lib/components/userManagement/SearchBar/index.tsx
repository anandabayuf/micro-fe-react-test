import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import type React from "react";
import { FiSearch } from "react-icons/fi";

import type { SearchBoxPropsType } from "./types";

interface SubmitProps {
  currentTarget: HTMLFormElement | undefined;
  preventDefault: () => void;
}

const SearchBox: React.FC<SearchBoxPropsType> = ({
  value,
  onChange,
  placeHolder,
  id,
}: SearchBoxPropsType) => {
  const handleSubmit = (e: SubmitProps) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const values: any = Object.fromEntries(data.entries());

    onChange(values.search || "");
  };
  return (
    <form
      id={`${id}-search-bar-form`}
      onSubmit={handleSubmit}
      style={{ width: "100%" }}
    >
      <InputGroup
        w={{ base: "full", md: "30%" }}
        maxW={{ base: "full", md: 350 }}
        minW={200}
      >
        <InputLeftElement pointerEvents="none" h={46} w={46}>
          <FiSearch color="gray" size={18} />
        </InputLeftElement>
        <Input
          id={`${id}-search-bar-form-input-search`}
          defaultValue={value}
          name="search"
          _focus={{
            backgroundColor: "white",
            borderColor: "gray.400",
          }}
          variant="filled"
          backgroundColor="gray.100"
          h={46}
          rounded="0"
          placeholder={placeHolder || ""}
          _placeholder={{ color: "gray.600" }}
          fontSize={16}
          fontWeight={400}
          color="gray.900"
        />
      </InputGroup>
    </form>
  );
};

export default SearchBox;
