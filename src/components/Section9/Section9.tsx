import {SectionBlock} from '@/styles/section.styles';
import Image from 'next/image';
import React from 'react';
import {Section10Container, Section10Text} from './Section9.styles';

const Section10 = ({isDesktop}: IsDesktop) => {
  return (
    <Section10Container>
      <SectionBlock isDesktop={isDesktop}>
        <Section10Text isDesktop={isDesktop}>
          {'새롭게 시작하는\n롯데웰푸드 임직원 여러분 모두를\n'}{' '}
          <b>
            진심으로 응원합니다!
            <Image src="/assets/images/section7/emoticon1.png" width={isDesktop ? 48 : 24} height={isDesktop ? 48 : 24} alt="" />
          </b>
        </Section10Text>
      </SectionBlock>
    </Section10Container>
  );
};

export default Section10;
