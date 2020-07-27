import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import {Text, Heading, Link} from '@theme-ui/components';
import {Styled} from 'theme-ui';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {NavHashLink as NavLink} from 'react-router-hash-link';
import Form from '../components/form';
import GridBlock from '../components/grid-block';
import Card from '../components/card-grid-item';
import Overlay from '../components/overlay-grid-item';
import HorizontalCard from '../components/horizontal-card-grid-item';
import TextCard from '../components/text-card-grid-item';

const Blockquote = css`
  position: relative;
  font-size: 1.1em;
  line-height: 1.3em;
  font-style: italic;
  z-index: 1;
  &::before {
    content: '\\201C';
    position: absolute;
    top: 0.12em;
    left: -0.5em;
    color: #ebebeb;
    font-size: 5em;
    z-index: -1;
  }
`;

const Presentation = styled('pre')`
  font-size: 25px;
  max-width: 500px;
  text-align: center;
  margin: auto;
  @media (min-width: 420px) {
    font-size: 30px;
  }
`;

const normalStyle = props => css`
  flex: 1 0 auto;
  width: calc(100% - 40px);
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 420px) {
    width: ${props.width};
  }
`;

const scrollWithOffset = (el, offset) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: 'smooth'
  });
};

function GridBlockSerializer({node: {blocks, columns, style}}) {
  return (
    <GridBlock
      items={blocks}
      columns={
        (columns === undefined) | null
          ? `repeat(auto-fit, minmax(200px, 1fr))`
          : `repeat(${columns}, 1fr)`
      }
      columnRawValue={(columns === undefined) | null ? 1 : columns}
      gap="20px"
      style={style}
      marginBottom="0"
      renderProp={(data, style) =>
        style === 'card' ? (
          <Card {...data} />
        ) : style === 'overlay' ? (
          <Overlay {...data} />
        ) : style === 'horizontal' ? (
          <HorizontalCard {...data} />
        ) : style === 'text' ? (
          <TextCard {...data} />
        ) : (
          ''
        )
      }
    />
  );
}

const CustomLinkSerializer = props => {
  if (props.mark.href.includes('#')) {
    return (
      <NavLink
        to={props.mark.href}
        sx={{variant: 'styles.a'}}
        location={{
          pathname: document.location.pathname + document.location.hash
        }}
        scroll={el => scrollWithOffset(el, 90)}
      >
        {props.children}
      </NavLink>
    );
  }

  return <Link href={props.mark.href}>{props.children}</Link>;
};

const InternalLinkSerializer = props => {
  return <a href={props.mark.slug}>{props.children}</a>;
};

const CustomStyleSerializer = props => {
  const style = props.node.style || 'normal';

  if (/^h\d/.test(style))
    return (
      <Heading as={style} sx={{variant: `styles.${style}`}}>
        {props.children}
      </Heading>
    );

  switch (style) {
    case 'presentation':
      return (
        <Presentation className="presentation">{props.children}</Presentation>
      );
    case 'blockquote':
      return <blockquote className={Blockquote}>{props.children}</blockquote>;
    default:
      return <Text sx={{variant: `styles.p`}}>{props.children}</Text>;
  }
};

function FormSerializer({node: {header, id, body, fields}}) {
  return <Form header={header} id={id} description={body} fields={fields} />;
}

function ListSerializer(props) {
  return props.type === 'bullet' ? (
    <Styled.ul>{props.children}</Styled.ul>
  ) : (
    <Styled.ol>{props.children}</Styled.ol>
  );
}

function ListItemSerializer(props) {
  return props.type === 'bullet' ? (
    <li>{props.children}</li>
  ) : (
    <li>{props.children}</li>
  );
}

const serializers = {
  types: {
    block: CustomStyleSerializer,
    form: FormSerializer,
    gridblock: GridBlockSerializer
  },
  marks: {
    link: CustomLinkSerializer,
    internalLink: InternalLinkSerializer
  },
  list: ListSerializer,
  listItem: ListItemSerializer
};

const SanityBlock = props => (
  <BlockContent blocks={props.blocks} serializers={serializers} />
);

export default SanityBlock;
