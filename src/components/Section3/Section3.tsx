import Image from 'next/image';
import React from 'react';
import {
  Section3Block,
  Section3Container,
  Section3Text,
} from './Section3.styles';

const Section3 = ({isDesktop}: IsDesktop) => {
  return (
    <Section3Container>
      <Section3Block isDesktop={isDesktop}>
        <Section3Text isDesktop={isDesktop}>
          {isDesktop ? (
            <>
              {' '}
              웰푸드 구성원 모두가 함께 참여하고 공감할 수 있는 소통의 장이 될
              수 있도록{'\n'}많은 관심 부탁드리며, 2회 웰컴톡에서 다시 만나요~
              {'\n'}
            </>
          ) : (
            <>
              웰푸드 구성원 모두가 함께 참여하고{'\n'}공감할 수 있는 소통의 장이
              될 수 있도록{'\n'}많은 관심 부탁드리며,{'\n'}2회 웰컴톡에서 다시
              만나요~
              {'\n'}
            </>
          )}
          <b>
            Coming SOON !
            <Image
              src="/assets/images/section7/emoticon1.png"
              width={isDesktop ? 48 : 24}
              height={isDesktop ? 48 : 24}
              alt=""
            />
          </b>
        </Section3Text>
      </Section3Block>
    </Section3Container>
  );
};

export default Section3;
