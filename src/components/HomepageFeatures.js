import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Tap into the Power of the Web',
    imgSrc: "/img/web-technologies.png",
    description: (
      <>
        Our engine is deeply rooted in the world's largest software ecosystem. Gain access to the best tools available, while letting us handle the complexity of modern web technologies.
      </>
    ),
  },
  {
    title: 'Work on the Fun Stuff',
    imgSrc: "/img/happy-emote.png",
    description: (
      <>
        We give you the tools to succeed, without taking away flexibility. Don't waste your time writing boring boilerplate code, and build on a solid foundation to realize your creative vision.
      </>
    ),
  },
  {
    title: 'Easy to Learn',
    imgSrc: "/img/docusaurus_keytar.png",
    description: (
      <>
      Pick from multiple levels of abstraction to work at the level you're most comfortable with. Leverage our extensive documentation and a helpful community to aid your learning.
      </>
    ),
  },
  {
    title: 'Powered by Open Source',
    imgSrc: "/img/GitHub-Mark-120px-plus.png",
    description: (
      <>
      We combine open source software that inspires confidence into a framework anyone can use. You're in full control, but rest assured the open source community has your back.
      </>
    ),
  },
  {
    title: 'Community-Driven by Design',
    imgSrc: "/img/Discord-Logo-Color.png",
    description: (
      <>
      Made by the community, for the community, from the ground up. The platform is managed by volunteers and as such will always be free - for both personal and commercial use.
      </>
    ),
  },
  {
    title: 'Made to Last',
    imgSrc: "/img/logo-testing.png",
    description: (
      <>
        Crafted with a focus on accessibility, full customization and high quality. We strive to develop an easy-to use, robust, and powerful framework that will stand the test of time.
      </>
    ),
  },
];

function Feature({title, description, imgSrc}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">

      <img class={styles.featureSvg} alt={title} src={imgSrc}></img>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
