import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Save Time</>,
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        WordWeaver was designed to be easily modified and used in a wide variety of language conjugation contexts.
        Have a look at the <a href='docs/intro#important-features-for-language-revitalization'>features</a> to see if it's right for your project.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        WordWeaver lets you focus on your language model, and we&apos;ll do the chores and visualization. Go
        ahead and have a read about how to <a href='docs/installation'>get started</a>.
      </>
    ),
  },
  {
    title: <>Build beautiful, interactive conjugators</>,
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Turn your language data into an interactive web and mobile conjugation application.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/intro')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
