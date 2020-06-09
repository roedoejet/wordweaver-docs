
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags'),
  exact: true,
  
},
{
  path: '/blog/tags/welcome',
  component: ComponentCreator('/blog/tags/welcome'),
  exact: true,
  
},
{
  path: '/blog/tags/wordweaver',
  component: ComponentCreator('/blog/tags/wordweaver'),
  exact: true,
  
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome'),
  exact: true,
  
},
{
  path: '/docs',
  component: ComponentCreator('/docs'),
  exact: true,
  
},
{
  path: '/docs/:route',
  component: ComponentCreator('/docs/:route'),
  
  routes: [
{
  path: '/docs/acknowledgements',
  component: ComponentCreator('/docs/acknowledgements'),
  exact: true,
  
},
{
  path: '/docs/doc1',
  component: ComponentCreator('/docs/doc1'),
  exact: true,
  
},
{
  path: '/docs/features',
  component: ComponentCreator('/docs/features'),
  exact: true,
  
},
{
  path: '/docs/firststeps',
  component: ComponentCreator('/docs/firststeps'),
  exact: true,
  
},
{
  path: '/docs/gramble-intro',
  component: ComponentCreator('/docs/gramble-intro'),
  exact: true,
  
},
{
  path: '/docs/installation',
  component: ComponentCreator('/docs/installation'),
  exact: true,
  
},
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro'),
  exact: true,
  
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx'),
  exact: true,
  
},
{
  path: '/docs/ww-custom-intro',
  component: ComponentCreator('/docs/ww-custom-intro'),
  exact: true,
  
},
{
  path: '/docs/ww-i18n',
  component: ComponentCreator('/docs/ww-i18n'),
  exact: true,
  
},
{
  path: '/docs/ww-ui-style',
  component: ComponentCreator('/docs/ww-ui-style'),
  exact: true,
  
},
{
  path: '/docs/ww-ui-types',
  component: ComponentCreator('/docs/ww-ui-types'),
  exact: true,
  
},
{
  path: '/docs/ww-ui-validation',
  component: ComponentCreator('/docs/ww-ui-validation'),
  exact: true,
  
},
{
  path: '/docs/wwui-custom-intro',
  component: ComponentCreator('/docs/wwui-custom-intro'),
  exact: true,
  
},
{
  path: '/docs/wwui-page-Settings',
  component: ComponentCreator('/docs/wwui-page-Settings'),
  exact: true,
  
},
{
  path: '/docs/wwui-page-about',
  component: ComponentCreator('/docs/wwui-page-about'),
  exact: true,
  
},
{
  path: '/docs/wwui-page-tableviewer',
  component: ComponentCreator('/docs/wwui-page-tableviewer'),
  exact: true,
  
},
{
  path: '/docs/wwui-page-wordmaker',
  component: ComponentCreator('/docs/wwui-page-wordmaker'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
