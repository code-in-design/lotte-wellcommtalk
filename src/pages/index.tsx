import {userState} from '@/atoms/user';
import Sign from '@/components/Sign/Sign';
import Section1 from '@/components/Section1/Section1';
import Section10 from '@/components/Section9/Section9';
import Section2 from '@/components/Section2/Section2';
import Section3 from '@/components/Section3/Section3';
import {Section4} from '@/components/Section4/Section4';
import Section5 from '@/components/Section5/Section5';
import Section6 from '@/components/Section6/Section6';
import Section7 from '@/components/Section7/Section7';
import Section9 from '@/components/Section8/Section8';

import {useRecoilValue} from 'recoil';

export default function Home({isDesktop}: IsDesktop) {
  const user = useRecoilValue(userState);

  return (
    <>
      {user ? (
        <>
          <Section1 isDesktop={isDesktop} />
          <Section2 isDesktop={isDesktop} />
          <Section3 isDesktop={isDesktop} />
          <Section4 isDesktop={isDesktop} />
          <Section5 isDesktop={isDesktop} />
          <Section6 isDesktop={isDesktop} />
          <Section7 isDesktop={isDesktop} />
          <Section9 isDesktop={isDesktop} />
          <Section10 isDesktop={isDesktop} />
        </>
      ) : (
        <Sign isLogin isDesktop={isDesktop} />
      )}
    </>
  );
}
