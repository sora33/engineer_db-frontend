import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  totalCount: number;
  currentPage: number;
  paramsWithoutPage: string;
};
const PAGINATION_LIMIT = 10;
export const SearchPagination: React.FC<Props> = ({
  totalCount,
  currentPage,
  paramsWithoutPage,
}) => {
  const totalPages = Math.ceil(totalCount / PAGINATION_LIMIT);
  const previousPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  // 現在のページの前後に表示するページ数
  const surroundingPages = 1;

  // 表示する最初と最後のページ番号を計算
  const startPage = Math.max(2, currentPage - surroundingPages);
  const endPage = Math.min(totalPages - 1, currentPage + surroundingPages);

  return (
    <Pagination>
      <PaginationContent>
        {previousPage && (
          <PaginationItem>
            <PaginationPrevious
              href={`?${paramsWithoutPage}&page=${previousPage}`}
            />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink
            href={`?${paramsWithoutPage}&page=1`}
            isActive={currentPage === 1}
          >
            1
          </PaginationLink>
        </PaginationItem>
        {startPage > 2 && "..."}
        {Array.from({ length: endPage - startPage + 1 }).map((_, index) => {
          const pageNumber = startPage + index;
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href={`?${paramsWithoutPage}&page=${pageNumber}`}
                isActive={currentPage === pageNumber}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        {endPage < totalPages - 1 && "..."}
        <PaginationItem>
          <PaginationLink
            href={`?${paramsWithoutPage}&page=${totalPages}`}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
        {nextPage && (
          <PaginationItem>
            <PaginationNext href={`?${paramsWithoutPage}&page=${nextPage}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
