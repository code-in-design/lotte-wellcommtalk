/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React, {useEffect} from 'react';
import {
  Section1Block,
  Section1Container,
  Section1TextBox,
  Section1TitleBox,
  WellCommBlock,
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
            <b>{'Well Comm\nTalk'}</b>
          </Section1TitleBox>

          <Section1TextBox isDesktop={isDesktop}>
            {isDesktop ? (
              <>
                <p>
                  {
                    '2023년 회사는, 그리고 구성원 개개인은 어떤 목표를 향해\n달려가야 할까요?'
                  }
                </p>
                <p>
                  {'우리 회사의 경영현안과 방향성 등에 대해 공유하는 채널인\n'}
                  <b>{"'웰컴 톡'"}</b>을 시작합니다!
                </p>
                <p>
                  {
                    '회사에 대한 이해도를 높이고 모두가 함께 이야기 하는\n웰푸드만의 소통 채널이 될 수 있도록'
                  }
                </p>
                <p>임직원 여러분의 많은 관심 부탁드립니다.</p>
              </>
            ) : (
              <>
                <p>
                  2023년 회사는, 그리고 구성원 개개인은 어떤 목표를 향해
                  달려가야 할까요?
                </p>
                <p>
                  우리 회사의 경영현안과 방향성 등에 대해 공유하는 채널인
                  <b>{" '웰컴 톡'"}</b>을 시작합니다!
                </p>
                <p>
                  회사에 대한 이해도를 높이고 모두가 함께 이야기 하는 웰푸드만의
                  소통 채널이 될 수 있도록
                </p>
                <p>임직원 여러분의 많은 관심 부탁드립니다.</p>
              </>
            )}
          </Section1TextBox>

          <WellCommBlock isDesktop={isDesktop}>
            <Image
              src="/assets/images/section1/chats-heart.png"
              width={isDesktop ? 64 : 48}
              height={isDesktop ? 64 : 48}
              alt="wellfood"
              priority
            />

            <p>
              '웰컴 톡'은 웰푸드의 <b>Well</b>과 <b>Comm</b>unication 의
              전파/공유의 뜻을 담아 다양한 이야기를 함께 나누는 소통 채널의
              의미를 담고 있습니다 {':)'}
            </p>
          </WellCommBlock>
        </div>

        <Image
          src="/assets/images/section1/graphic.png"
          width={isDesktop ? 520 : 343}
          height={isDesktop ? 687 : 453}
          alt="wellfood"
          priority
          style={isDesktop ? {} : {margin: '0 auto'}}
        />
      </Section1Block>
    </Section1Container>
  );
};

export default Section1;