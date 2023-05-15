import {colors} from '@/styles/colors';
import {SectionBlock, SectionLabel} from '@/styles/section.styles';
import Image from 'next/image';
import React from 'react';
import {Section4Container, Section9Block, Section9ImageContainer, Section9Text} from './Section8.styles';

const Section9 = ({isDesktop}: IsDesktop) => {
  return (
    <Section4Container isDesktop={isDesktop}>
      <SectionBlock isDesktop={isDesktop}>
        <SectionLabel isDesktop={isDesktop} backgroundColor={colors.PINK}>
          참여 혜택
        </SectionLabel>

        <Section9Text isDesktop={isDesktop}>
          {'참여해주신 분 중 추첨을 통해 총 100개 담당의\n'}
          {'  '}
          <b>봄 나들이</b>를 지원 해 드립니다. (4월 중)
        </Section9Text>

        <Section9Block isDesktop={isDesktop}>
          <Section9ImageContainer isDesktop={isDesktop}>
            <Image src="/assets/images/section9/person.png" width={isDesktop ? 72 : 40} height={isDesktop ? 72 : 40} alt="" />
            <Image src="/assets/images/section9/icon_x.png" width={36} height={36} alt="" />
            <div>
              <Image src="/assets/images/section9/money.png" width={isDesktop ? 116 : 77} height={isDesktop ? 65 : 36} alt="" />
              <Image src="/assets/images/section9/money.png" width={isDesktop ? 116 : 77} height={isDesktop ? 65 : 36} alt="" />
            </div>
          </Section9ImageContainer>
          <span>인당 2만원 지원</span>
        </Section9Block>
      </SectionBlock>
    </Section4Container>
  );
};

export default Section9;
