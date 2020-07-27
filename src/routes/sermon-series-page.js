import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Styled} from 'theme-ui';
import {fetchDrupalData} from '../utils/fetch-functions';
import ContentWrapper from '../components/content-wrapper';
import TitleBreadcrumb from '../pages/title-breadcrumb';
import SermonTable from '../pages/sermon-table';

export default function SermonSeriesPage({
  match: {
    params: {nid}
  }
}) {
  const [sermons, setSermons] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchDrupalData('sermons', {filters: [{sermonSeries: nid}]}).then(
      response => {
        setSermons(response);
        setLoaded(true);
      }
    );
  }, [nid]);

  if (!loaded) {
    return (
      <ContentWrapper width="wide">
        <Styled.p>Fetching content... please wait</Styled.p>
      </ContentWrapper>
    );
  }

  if (sermons.length === 0 && loaded) {
    return (
      <ContentWrapper width="wide">
        <Styled.p>Sorry, this sermon series could not be found.</Styled.p>
        <Styled.p>
          You can find all of our available sermons on{' '}
          <Link to="/allsermons">this page.</Link>
        </Styled.p>
      </ContentWrapper>
    );
  }

  return (
    <>
      <TitleBreadcrumb
        title={sermons[0].sermonseries ? sermons[0].sermonseries : ''}
        breadcrumbs={[['Home', '/'], ['Sermons', '']]}
      />
      <ContentWrapper width="wide">
        <img
          src={
            sermons[0].series_full_img
              ? sermons[0].series_full_img
              : sermons[0].series_img
          }
        />
        <Styled.h2>Sermons</Styled.h2>
        <SermonTable
          sermons={sermons}
          columnHide={[2]}
          headers={['title', 'text', 'preacher', 'datepreached']}
        />
      </ContentWrapper>
    </>
  );
}
