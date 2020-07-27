import React, {useState, useEffect} from 'react';
import {IoIosDocument} from 'react-icons/io';
import {Styled} from 'theme-ui';
import {fetchDrupalData} from '../utils/fetch-functions';
import ContentWrapper from '../components/content-wrapper';
import TitleBreadcrumb from './title-breadcrumb';

const NewslettersTable = newsletters => {
  return newsletters.map(newsletter => (
    <tr key={newsletter.date + '-' + newsletter.node_title}>
      <td>
        <IoIosDocument style={{fill: '#e74c3c'}} />
        &nbsp;
        <Styled.a
          href={newsletter.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          {newsletter.node_title}
        </Styled.a>
      </td>
    </tr>
  ));
};

export default function Newsletter({newslettersData}) {
  const [newsletters, setNewsletters] = useState(newslettersData);
  const [newslettersFetched, setNewslettersFetched] = useState(
    Boolean(newsletters)
  );

  useEffect(() => {
    if (newslettersFetched === false) {
      fetchDrupalData('newsletter', {}).then(response => {
        setNewsletters(response);
        setNewslettersFetched(true);
      });
    } else {
      setNewsletters(newsletters);
    }
  }, [newslettersFetched, newsletters]);

  return (
    <section>
      <TitleBreadcrumb
        title="Newsletters"
        breadcrumbs={[['Home', '/'], ['Resources', '']]}
      />
      <ContentWrapper width="wide">
        {newsletters && (
          <table>
            <tbody>
              <NewslettersTable newsletters={newsletters} />
            </tbody>
          </table>
        )}
      </ContentWrapper>
    </section>
  );
}
