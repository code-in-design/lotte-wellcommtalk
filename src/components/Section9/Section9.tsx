import Image from 'next/image';
import React from 'react';
import {
  LastSectionBlock,
  Section10Container,
  Section10Text,
} from './Section9.styles';

const Section10 = ({isDesktop}: IsDesktop) => {
  return (
    <Section10Container>
      <LastSectionBlock isDesktop={isDesktop}>
        <Section10Text isDesktop={isDesktop}>
          {
            '웰푸드 구성원 모두가 함께 참여하고\n공감할 수 있는 소통의 場이\n될 수 있도록 많은 관심 부탁드리며,\n2회 웰컴톡에서 다시 만나요~\n'
          }
          <b>
            Coming SOON !
            <Image
              src="/assets/images/section7/emoticon1.png"
              width={isDesktop ? 48 : 24}
              height={isDesktop ? 48 : 24}
              alt=""
            />
          </b>
        </Section10Text>
      </LastSectionBlock>
    </Section10Container>
  );
};

export default Section10;
