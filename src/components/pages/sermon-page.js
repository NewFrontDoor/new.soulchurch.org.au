import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchDrupalData } from '../../utils/fetch-functions';
import ContentWrapper from '../content-wrapper';
import SermonBlock from './sermon-block';
import TitleBreadcrumb from './title-breadcrumb';

export default function SermonPage({
  match: {
    params: { nid }
  }
}) {
  const [sermon, setSermon] = useState(null);
  useEffect(() => {
    fetchDrupalData('sermons', { filters: [{ nid }] }).then(response => {
      setSermon(response[0]);
    });
  }, [nid]);

  return (
    <>
      <TitleBreadcrumb
        title={sermon ? sermon.node_title : 'Loading...'}
        breadcrumbs={[['Home', '/'], ['Sermons', '/sermons']]}
      />
      <ContentWrapper>
        {sermon ? (
          <SermonBlock sermon={sermon} />
        ) : (
            <>
              <p>Sorry, that sermon could not be found.</p>
              <p>
                You can find all of our available sermons on{' '}
                <Link to="/allsermons">this page.</Link>
              </p>
            </>
          )}
      </ContentWrapper>
    </>
  );
}
