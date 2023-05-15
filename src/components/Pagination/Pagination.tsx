import React, {useCallback} from 'react';

import Image from 'next/image';
import paginateStyles from './Pagination.styles';
import ReactPaginate from 'react-paginate';
import {Global} from '@emotion/react';
import {PageChangeHandler, PaginationProps} from './Pagination.types';

const Pagination = ({totalPage, setPage, isDesktop}: PaginationProps) => {
  const onClickPage: PageChangeHandler = useCallback(
    ({selected}) => setPage(selected + 1),
    [setPage],
  );

  return (
    <>
      <Global styles={paginateStyles} />

      <ReactPaginate
        breakLabel="..."
        pageRangeDisplayed={3}
        marginPagesDisplayed={isDesktop ? 2 : 1}
        previousLabel={
          <Image
            src="/assets/images/section5/chevron_left.png"
            width={16}
            height={16}
            alt=""
          />
        }
        nextLabel={
          <Image
            src="/assets/images/section5/chevron_right.png"
            width={16}
            height={16}
            alt=""
          />
        }
        onPageChange={onClickPage}
        pageCount={totalPage}
        renderOnZeroPageCount={() => null}
      />
    </>
  );
};

export default Pagination;
