import React from 'react';
import {
  Title,
  Subtitle,
  Description,
  DescriptionType,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';

interface ICustomDocumentation {
  dataDoc?: any;
  title?: string;
  subtitle?: string;

}
const CustomDocumentation: React.VFC<ICustomDocumentation> = ({dataDoc, title, subtitle}) => {
  const data = dataDoc ? '<code>{dataDoc}</code>' : '<b>DATA: </b><code>No data is expected</code>'
  return (
    <>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Description type={DescriptionType.INFO} markdown={data}></Description>
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
      <Stories />
    </>
  )
}

export default CustomDocumentation;