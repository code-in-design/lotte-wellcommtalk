import Image from 'next/image';
import React from 'react';
import {
  ExampleImageWrapper,
  IntroductionExample,
  IntroductionExampleText,
  TipLabel,
  TipText,
} from './Tip.styles';

const Section8 = ({isDesktop}: IsDesktop) => {
  return (
    <div>
      <TipLabel isDesktop={isDesktop}>TIP</TipLabel>

      <TipText isDesktop={isDesktop}>
        {'어떻게 올려야 하는지 감이 안 잡힌다면\nCA팀의 소개를 참고해 보세요!'}
      </TipText>

      <IntroductionExample isDesktop={isDesktop}>
        <ExampleImageWrapper isDesktop={isDesktop}>
          <Image src="/assets/images/section7/sample.jpeg" fill alt="example" />
        </ExampleImageWrapper>

        <IntroductionExampleText isDesktop={isDesktop}>
          {
            '우리 팀은요!\nCA팀은 Change Agent Team의 약자로,\n교육 및 조직문화 업무를 통해 조직의 변화와\n성장을 지원하는 팀입니다.\n앞으로도 웰푸드를 일하기 좋은 회사로 함께 만들어가면 좋겠습니다!'
          }
        </IntroductionExampleText>
      </IntroductionExample>
    </div>
  );
};

export default Section8;
