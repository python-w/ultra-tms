import styled from "styled-components";
import { get4k, mediaQueries } from "../utils/Helpers";

const TableOuter = styled.div`
  padding: 0 24px 12px 24px;
  border-radius: 16px;
  background: #f1f7f9;
  overflow-x: auto;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 12px;
  @media (min-width: ${mediaQueries.xxxl}px) {
    border-spacing: 0 ${get4k(12)};
  }
  thead {
    text-align: left;
    th {
      padding: 10px 24px;
      font-size: 14px;
      text-transform: uppercase;
      @media (min-width: ${mediaQueries.xxxl}px) {
        padding: ${get4k(10)} ${get4k(24)};
        font-size: ${get4k(14)};
      }
    }
  }
  tbody {
    tr {
      &:nth-child(even) {
        td {
          background: #d8e9ee;
        }
      }
    }
    td {
      font-weight: 500;
      padding: 10px 16px;
      background: #fff;
      width: 25%;
      white-space: nowrap;
      @media (min-width: ${mediaQueries.xxxl}px) {
        padding: ${get4k(10)} ${get4k(16)};
      }
      div {
        display: flex;
        align-items: center;
        &.react-international-phone-input-container {
          width: 100%;
        }
      }
      &:first-child {
        border-top-left-radius: 48px;
        border-bottom-left-radius: 48px;
        @media (min-width: ${mediaQueries.xxxl}px) {
          border-top-left-radius: ${get4k(48)};
          border-bottom-left-radius: ${get4k(48)};
        }
      }
      &:last-child {
        border-top-right-radius: 48px;
        border-bottom-right-radius: 48px;
        @media (min-width: ${mediaQueries.xxxl}px) {
          border-top-right-radius: ${get4k(48)};
          border-bottom-right-radius: ${get4k(48)};
        }
      }
    }
  }
`;

export default function CustomTable({ headers, children }) {
  return (
    <TableOuter>
      <Table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        {children}
      </Table>
    </TableOuter>
  );
}
