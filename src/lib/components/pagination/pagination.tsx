import { Flex, Text, Button } from "@chakra-ui/react";
import { changeIntoIdFormat } from "lib/utils/id";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { FormattedMessage } from "react-intl";

interface PaginationProps {
  currentPageIndex?: number;
  listPageSize?: number[];
  currentPageSize: number;
  onNextPage?: () => void;
  onPrevPage?: () => void;
  selectPageIndex: (index: number) => void;
  countData: number;
  selectedListperPage: (size: number) => void;
  id?: string;
}

const Pagination = ({
  currentPageIndex = 0,
  listPageSize,
  currentPageSize,
  onNextPage,
  onPrevPage,
  countData,
  selectPageIndex,
  selectedListperPage,
  id,
}: PaginationProps) => {
  const countPageIndex = Math.ceil(countData / currentPageSize);

  const handleSelectIndex = (index: number) => () => selectPageIndex(index);
  const handleSelectedListPerPage = (size: number) => () =>
    selectedListperPage(size);

  return (
    <Flex
      justify="space-between"
      flexDir={{ base: "column-reverse", md: "row" }}
      alignItems="center"
    >
      <Flex gap={4} alignItems="center" display={"flex"} width={"100%"}>
        <Text fontWeight={400} fontSize="sm" color="gray.600">
          <FormattedMessage id="numberOfRows" />
        </Text>
        {listPageSize?.map((item) => (
          <Button
            id={`${id}-pagination-page-size-${item}-btn`}
            key={item}
            size="sm"
            rounded="none"
            variant={currentPageSize === item ? "solid" : "ghost"}
            fontWeight={700}
            onClick={handleSelectedListPerPage(item)}
          >
            {item}
          </Button>
        ))}
      </Flex>
      <Flex alignItems={"center"} justifyContent={"flex-end"} width={"100%"}>
        <Button
          id={`${id}-pagination-previous-page-btn`}
          variant="ghost"
          onClick={onPrevPage}
          disabled={currentPageIndex === 0}
        >
          <MdKeyboardArrowLeft size={24} />
        </Button>
        <Flex>
          {Array.from(Array(countPageIndex).keys()).map((item) => {
            if (item < 4) {
              return (
                <Button
                  id={`${id}-pagination-page-${item + 1}-btn`}
                  key={item}
                  size="sm"
                  rounded="none"
                  variant={currentPageIndex === item ? "solid" : "ghost"}
                  fontWeight={700}
                  onClick={handleSelectIndex(item)}
                >
                  {item + 1}
                </Button>
              );
            }
            return null;
          })}
          {countPageIndex > 4 && (
            <>
              ...
              <Button
                id={`${id}-pagination-page-${countPageIndex}-btn`}
                size="sm"
                rounded="none"
                variant={
                  currentPageIndex === countPageIndex ? "solid" : "ghost"
                }
                fontWeight={700}
                onClick={handleSelectIndex(countPageIndex)}
              >
                {countPageIndex}
              </Button>
            </>
          )}
        </Flex>
        <Button
          id={`${id}-pagination-next-page-btn`}
          variant="ghost"
          onClick={onNextPage}
          disabled={currentPageIndex === countPageIndex - 1}
        >
          <MdKeyboardArrowRight size={24} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Pagination;
