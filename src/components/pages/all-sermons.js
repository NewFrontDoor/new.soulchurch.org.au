import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { fetchDrupalData } from '../../utils/fetch-functions';
import ContentWrapper from '../content-wrapper';
import SermonTable from './sermon-table';
import TitleBreadcrumb from './title-breadcrumb';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 150px;
  grid-template-rows: 50px;
  gap: 20px;
  align-items: end;
  margin-bottom: 20px;
  input,
  select,
  button {
    border: 1px solid #cdcdcd;
    border-radius: 0;
    box-shadow: none;
    transition: border-color ease-in-out 0.3s;
    border-radius: 4px;
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
  }
  button {
    font-weight: 400;
    :active,
    :hover,
    :focus {
      border-color: #ef3b24;
      background-color: #ef3b24;
      color: #fff;
    }
  }
`;

const SearchInput = styled('input')`
  box-sizing: border-box;
  -webkit-box-sizing:border-box;
  -moz-box-sizing: border-box;
`;

export default function Sermons({ globalSermons, setGlobalSermons }) {
  const [sermons, setSermons] = useState(globalSermons);
  const [sermonSeriesSet, setSeries] = useState(null);
  const [seriesValue, setSeriesValue] = useState('');
  const [viewingRefinedList, setList] = useState(false);
  const [searchQuery, setQuery] = useState('');
  const [searchType, setType] = useState();
  const [loaded, setLoaded] = useState(globalSermons);

  useEffect(() => {
    setSermons(globalSermons);
    setLoaded(true);
  }, [globalSermons]);

  useEffect(() => {
    if (!sermons) {
      fetchDrupalData('sermons', {}).then(response => {
        setGlobalSermons(response);
        setLoaded(true);
      });
    }

    fetchDrupalData('series', {}).then(response => {
      setSeries(response);
    });
  }, [sermons, setGlobalSermons]);

  function loadSeries(nid) {
    if (nid === '' || nid === undefined) {
      fetchDrupalData('sermons', {}).then(response => {
        setSermons(response);
        setSeriesValue('');
        setList(false);
      });
    } else {
      setSeriesValue(nid);
      fetchDrupalData('seriesFilter', { nid }).then(response => {
        setSermons(response);
        setList(true);
      });
    }
  }

  function searchSermons() {
    console.log(searchQuery + '-' + searchType);
    if (searchQuery && searchType) {
      fetchDrupalData('sermons', { [searchType]: searchQuery }).then(response => {
        setSermons(response);
        setList(true);
      });
    }
  }

  return (
    <section>
      <TitleBreadcrumb
        title="All Sermons"
        breadcrumbs={[['Home', '/'], ['Sermons', '']]}
      />
      {loaded && (
        <ContentWrapper width="wide">
          <Grid>
            <div>
              View Series:
              <select
                value={seriesValue}
                onChange={e => loadSeries(e.target.value)}
              >
                <option value="">---</option>
                {sermonSeriesSet &&
                  sermonSeriesSet.map(series => {
                    return (
                      <option key={series.nid} value={series.nid}>
                        {series.node_title}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div>
              Search:{' '}
              <SearchInput
                type="text"
                value={searchQuery}
                onChange={e => setQuery(e.target.value)}
              />
            </div>
            <div>
              In:
              <select
                value={searchType}
                onChange={e => setType(e.target.value)}
              >
                <option value="title">Title</option>
                <option value="preacher">Speaker</option>
                <option value="passage">Bible Passage</option>
              </select>
            </div>
            <button type="button" onClick={() => searchSermons()}>
              Search
            </button>
          </Grid>
          {sermons && (
            <SermonTable
              sermons={sermons}
              columnHide={[2]}
              headers={['title', 'text', 'preacher', 'datepreached']}
            />
          )}
          <br />
          <span style={{ float: 'left' }}>
            {viewingRefinedList && (
              <button onClick={() => loadSeries()}>
                Return to All Sermons
              </button>
            )}
          </span>
        </ContentWrapper>
      )}
    </section>
  );
}
