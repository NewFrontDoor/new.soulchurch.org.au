import React from 'react';
import {Styled} from 'theme-ui';
import HomeBlock from '../utils/block-text-serializer';

export default function TextCard({header, description}) {
  return (
    <div>
      <Styled.h3>{header}</Styled.h3>
      <HomeBlock blocks={description} />
    </div>
  );
}
