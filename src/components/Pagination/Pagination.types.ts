export type PageChangeHandler = (selectedItem: PageChangeHandlerParams) => void;

interface PageChangeHandlerParams {
  selected: number;
}

export interface PaginationProps extends IsDesktop {
  totalPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
