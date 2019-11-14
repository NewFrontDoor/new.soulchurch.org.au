import React from 'react';
import TitleBreadcrumb from './pages/title-breadcrumb';
import ContentWrapper from './content-wrapper';

export default function OtherPageContent({title, category}) {
  return (
    <section>
      <TitleBreadcrumb title={title} breadcrumbs={[['Home', '/']]} />
      <ContentWrapper>
        Sorry this page is still under construction, or does not exist.
      </ContentWrapper>
    </section>
  );
}
