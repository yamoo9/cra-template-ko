import styles from './AppDemo.module.scss';
import React, { useState } from 'react';
import logo from 'assets/logo.svg';
import { Divider } from 'semantic-ui-react';

import ConnectStoreDemo from '~/components/ReduxConnectDemo/ReduxConnectDemo';
import CardsDemo from '~/components/ReduxHooksDemo/ReduxHooksDemo';

/**
 * AppDemo 컴포넌트
 */
const AppDemo = () => {
  const [ state ] = useState({
    logo: {
      src: logo,
      className: styles.logo,
      alt: '이듬(E.UID) 블렌디드 러닝',
    },
    description: `
      "이듬" 블렌디드 러닝이 지향하는 비전은 동반 성장에 있습니다.
      강사에서 수강생으로 한 방향으로 흘러가는 지식 전달이 아닌, 함께 공감하고, 
      이해하며 경험하는 교육 가치를 통해 공동의 혁신을 이끌어내는 것을 목표로 합니다.`,
    link: {
      className: styles.link,
      href: 'https://yamoo9.github.io/EUID',
      external: true,
      text: '→ 이듬(E.UID) 블렌디드 러닝',
    },
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          src={state.logo.src}
          className={state.logo.className}
          alt={state.logo.alt}
        />
        <p className={styles.description}>{state.description.trim()}</p>
        <a
          className={styles.link}
          href="https://yamoo9.github.io/EUID"
          rel={state.link.external ? 'noopener noreferrer' : null}
          target={state.link.external ? '_blank' : null}
        >
          {state.link.text}
        </a>
      </header>
      <Divider section />
      <ConnectStoreDemo />
      <Divider section />
      <CardsDemo />
    </div>
  );
};

export default AppDemo;
