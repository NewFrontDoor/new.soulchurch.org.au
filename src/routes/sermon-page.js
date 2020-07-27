import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Styled} from 'theme-ui';
import {fetchDrupalData} from '../utils/fetch-functions';
import ContentWrapper from '../components/content-wrapper';
import SermonBlock from '../pages/sermon-block';
import TitleBreadcrumb from '../pages/title-breadcrumb';

export default function SermonPage({
  match: {
    params: {nid}
  }
}) {
  const [sermon, setSermon] = useState(null);
  useEffect(() => {
    fetchDrupalData('sermons', {filters: [{nid}]}).then(response => {
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
            <Styled.p>Sorry, that sermon could not be found.</Styled.p>
            <Styled.p>
              You can find all of our available sermons on{' '}
              <Link to="/allsermons">this page.</Link>
            </Styled.p>
          </>
        )}
      </ContentWrapper>
    </>
  );
}
