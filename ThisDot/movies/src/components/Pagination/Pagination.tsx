'use client';

import { QUERY_PARAMS } from '@/constants/common';
import { useQueryParams } from '@/hooks/useQueryParams';
import classes from './pagination.module.css';

type PaginationProps = {
  totalPages: number;
}

export const Pagination = ({ totalPages }: PaginationProps) => {
  const { getQueryParam, setQueryParam } = useQueryParams();
  const currentPage = parseInt(getQueryParam(QUERY_PARAMS.PAGE)) || 1;
  const hasPreviousButton = currentPage !== 1;
  const hasNextButton = currentPage !== totalPages;

  const handlePageChange = (newPage: number) => {
    const value = newPage.toString();
    setQueryParam({ key: QUERY_PARAMS.PAGE, value });
  };

  return (
    <div className={classes.pagination_wrapper}>
      {hasPreviousButton && (
        <button onClick={() => handlePageChange(currentPage - 1)} className={classes.prev_button}>
          Previous
        </button>
      )}

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`${classes.pagination_item} ${currentPage === index + 1 ? classes.pagination_item__active : ''}`}>
          {index + 1}
        </button>
      ))}

      {hasNextButton && (
        <button onClick={() => handlePageChange(currentPage + 1)} className={classes.next_button}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
