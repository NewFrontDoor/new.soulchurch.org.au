import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  th {
    text-align: left;
    padding: 0 5px;
  }
  @media (max-width: 505px) {
    ${props =>
    props.columnHide.map(
      column => `th:nth-child(${column}) { display: none;}`
    )}
  }
`;

const Tr = styled.tr`
  background-color: ${props => (props.num % 2 ? '#eee' : '#fff')};
  border-bottom: 1px solid #ccc;
  td {
    padding: 0 5px;
  }
  @media (max-width: 505px) {
    ${props =>
    props.columnHide.map(
      column => `td:nth-child(${column}) { display: none;}`
    )}
  }
`;

export default function SermonTable({ sermons, headers, columnHide }) {
  return (
    <Table columnHide={columnHide}>
      <thead>
        <tr>
          {headers.includes('title') && <th>Title</th>}
          {headers.includes('series') && <th>Series</th>}
          {headers.includes('text') && <th>Bible Passage(s)</th>}
          {headers.includes('preacher') && <th>Speaker</th>}
          {headers.includes('datepreached') && <th>Date</th>}
          <tr />
        </tr>
      </thead>
      <tbody>
        {sermons.map((sermon, index) => (
          <Tr key={sermon.nid} num={index} columnHide={columnHide}>
            <td>
              <Link
                to={`/sermon/${sermon.nid}`}
                dangerouslySetInnerHTML={{
                  __html: sermon.node_title ? sermon.node_title : 'untitled'
                }}
              />
            </td>
            {headers.includes('series') && (
              <td>{sermon.series ? sermon.series : ''}</td>
            )}
            {headers.includes('text') && (
              <td>{sermon.text ? sermon.text : ''}</td>
            )}
            {headers.includes('preacher') && (
              <td dangerouslySetInnerHTML={{ __html: sermon.preacher }}></td>
            )}
            {headers.includes('datepreached') && (
              <td>{sermon.datepreached ? sermon.datepreached : ''}</td>
            )}
            <td>
              <a href={sermon.url} target="_blank" rel="noopener noreferrer">
                <FaDownload />
              </a>
            </td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}
