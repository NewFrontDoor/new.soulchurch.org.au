import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export function CurrentSeries({latestSermon}) {
  if (latestSermon === null) {
    return null;
  }

  return (
    <section>
      <Link to={'/series/' + latestSermon.series_id}>
        <img src={latestSermon.series_img} alt={latestSermon.sermonseries}  style={{width: "100%"}}/>
      </Link>
      <Link to={'/series/' + latestSermon.series_id}>
        <p dangerouslySetInnerHTML={{__html : latestSermon.sermonseries}} />
      </Link>
    </section>
  );
}

export function LatestSermon({latestSermon}) {
  if (latestSermon === null) {
    return null;
  }

  return (
    <section>
      <Link to={`/sermon/${latestSermon.nid}`}>
        <img src={latestSermon.series_img} alt={latestSermon.sermonseries}  style={{width: "100%"}}/>
      </Link>
      <Link
        to={'/series/' + latestSermon.series_id}
      ><p dangerouslySetInnerHTML={{__html: latestSermon.sermonseries}}/></Link>
      <Link to={`/sermon/${latestSermon.nid}`}>
      {latestSermon.node_title ? <p dangerouslySetInnerHTML={{__html: latestSermon.node_title}}/> : <p>Untitled</p>}
      </Link>
      <p dangerouslySetInnerHTML={{__html: latestSermon.preacher}}/>
    </section>
  );
}

export function RecentSeries({recentSeries}) {
  if (recentSeries === null) {
    return null;
  }

  return (
    <Wrapper>
      {recentSeries.map(series => (
        <div key={series.series_id}>
          <Link to={'/series/' + series.series_id}>
            <img src={series.series_img} alt={series.sermonseries} style={{width: "100%"}} />
          </Link>
          <Link
            dangerouslySetInnerHTML={{__html: series.node_title}}
            to={'/series/' + series.series_id}
          />
        </div>
      ))}
    </Wrapper>
  );
}
