import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  totalCount: number;
  currentPage: number;
};
const PAGINATION_LIMIT = 10;

export const SearchPagination: React.FC<Props> = ({
  totalCount,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalCount / PAGINATION_LIMIT);
  const previousPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <Pagination>
      <PaginationContent>
        {previousPage && (
          <PaginationItem>
            <PaginationPrevious href={`?page=${previousPage}`} />
          </PaginationItem>
        )}
        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink href={`?page=${index + 1}`}>
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        {nextPage && (
          <PaginationItem>
            <PaginationNext href={`?page=${nextPage}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
