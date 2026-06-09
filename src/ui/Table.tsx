import type { ReactNode } from "react";

type TableSectionProps = {
  children: ReactNode;
};

function Table({ children }: TableSectionProps) {
  return (
    <div className="bg-secondary-0 overflow-x-auto scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-transparent scrollbar-thumb-rounded-xl">
      <table>{children}</table>
    </div>
  );
}

function TableHeader({ children }: TableSectionProps) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }: TableSectionProps) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }: TableSectionProps) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;

export default Table;