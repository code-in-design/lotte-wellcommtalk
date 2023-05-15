import Image from 'next/image';
import React, {useEffect} from 'react';
import {
  Section1Block,
  Section1Container,
  Section1SubTitle,
  Section1TextBox,
  Section1TitleBox,
} from './Section1.styles';

const Section1 = ({isDesktop}: IsDesktop) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section1Container isDesktop={isDesktop}>
      <Section1Block isDesktop={isDesktop}>
        <div>
          <Section1TitleBox isDesktop={isDesktop}>
            <span>Welcome,</span>
            <b>{'LOTTE\nWELLFOOD'}</b>
          </Section1TitleBox>

          <Section1SubTitle isDesktop={isDesktop}>
            롯데제과의 새로운 이름, <b>롯데웰푸드</b>
          </Section1SubTitle>

          <Section1TextBox isDesktop={isDesktop}>
            <p>푸드로 만드는 더 행복하고, 더 건강한 웰니스 라이프</p>
            <p>
              롯데제과가 <b>롯데웰푸드</b>
              {'라는 새로운 사명으로\n새롭게 출발합니다.'}
            </p>
            <p>롯데웰푸드의 새로운 시작을 함께 축하해주세요!</p>
          </Section1TextBox>
        </div>

        <Image
          src="/assets/images/section1/graphic.png"
          width={isDesktop ? 520 : 343}
          height={isDesktop ? 687 : 453}
          alt="wellfood"
          priority
        />
      </Section1Block>
    </Section1Container>
  );
};

export default Section1;
