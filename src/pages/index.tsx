import {userState} from '@/atoms/user';
import Sign from '@/components/Sign/Sign';
import Section1 from '@/components/Section1/Section1';
import Section2 from '@/components/Section2/Section2';
import Section3 from '@/components/Section3/Section3';

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
        </>
      ) : (
        <Sign isLogin isDesktop={isDesktop} />
      )}
    </>
  );
}
