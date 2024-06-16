import React from 'react';
import {
  UITable,
  UITableBody,
  UITableHead,
  UINoInfoContainer,
  UITableLabel,
} from './styles';
import { UIH2, UIVContainer } from '../styles';

type TableProps = {
  columns: React.ReactNode;
  rows: React.ReactNode[];
  noDataTitle: string;
  noDataSubtitle: React.ReactNode;
  label?: string;
};

const Table = ({
  columns,
  rows,
  noDataTitle,
  noDataSubtitle,
  label,
}: TableProps) => {
  if (!rows.length) {
    return (
      <UINoInfoContainer>
        <UIH2>{noDataTitle}</UIH2>
        {noDataSubtitle}
      </UINoInfoContainer>
    );
  }

  return (
    <UIVContainer>
      {label ? <UITableLabel>{label}</UITableLabel> : null}
      <UITable>
        <UITableHead>{columns}</UITableHead>
        <UITableBody>{rows.map((row) => row)}</UITableBody>
      </UITable>
    </UIVContainer>
  );
};

export default Table;
