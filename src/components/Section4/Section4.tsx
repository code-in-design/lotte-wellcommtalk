import {colors} from '@/styles/colors';
import {SectionBlock, SectionLabel} from '@/styles/section.styles';
import Image from 'next/image';
import React from 'react';
import {RewardBlock, Section4Container, Section4Text} from './Section4.styles';

export const Section4 = ({isDesktop}: IsDesktop) => {
  return (
    <Section4Container isDesktop={isDesktop}>
      <SectionBlock isDesktop={isDesktop}>
        <SectionLabel backgroundColor={colors.PINK} isDesktop={isDesktop}>
          참여 혜택
        </SectionLabel>

        <Section4Text isDesktop={isDesktop}>
          {'정답을 맞추신 분 중 추첨을 통해 200분께\n'}
          <b>모바일 상품권 선물</b>을 드립니다.
        </Section4Text>

        <RewardBlock isDesktop={isDesktop}>
          <Image src="/assets/images/section4/reward.png" width={isDesktop ? 193 : 158} height={isDesktop ? 122 : 98} alt="" />
          <span>롯데 모바일 상품권 3만원 (200명)</span>
        </RewardBlock>
      </SectionBlock>
    </Section4Container>
  );
};
