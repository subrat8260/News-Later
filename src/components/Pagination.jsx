import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export function PaginationDemo({ page, setPage, totalArticles }) {
  const totalPage = Math.ceil(totalArticles / 10);
  const visiblePages = [];

  for (let i = 1; i <= totalPage; i++) {
    // Always show first & last
    if (i === 1 || i === totalPage) {
      visiblePages.push(i);
    }

    // Show around current page
    else if (i >= page - 1 && i <= page + 1) {
      visiblePages.push(i);
    }

    // Add ellipsis once before gap
    else if (i === page - 2 || i === page + 2) {
      visiblePages.push("...");
    }
  }

  return (
    <Pagination>
      <PaginationContent>
        {/* PREVIOUS */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPage(page > 1 ? page - 1 : 1)}
          />
        </PaginationItem>

        {/* PAGE NUMBERS */}
        {visiblePages.map((p, idx) =>
          p === "..." ? (
            <PaginationItem key={"e" + idx}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink isActive={p === page} onClick={() => setPage(p)}>
                {p}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        {/* NEXT */}
        <PaginationItem>
          <PaginationNext
            onClick={() => setPage(page < totalPage ? page + 1 : totalPage)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
