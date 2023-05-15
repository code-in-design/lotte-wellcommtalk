import {useWriteDesktopModal, useWriteMobileModal} from '@/hooks/useModal';
import {colors} from '@/styles/colors';
import {SectionBlock, SectionLabel} from '@/styles/section.styles';
import Image from 'next/image';
import React, {useCallback} from 'react';
import Section8 from './Tip/Tip';
import IntroductionPagination from './IntroductionPagination/IntroductionPagination';
import {
  Section7Container,
  Section7ImageWrapper1,
  Section7ImageWrapper2,
  Section7SpeechBubble,
  Section7Title,
  SpeechBubbleContainer,
  SpeechInnerContainer,
  IntroductionContainer,
  StepContainer,
  StepBlock,
  StepInnerBlock,
  StepLabel,
} from './Section7.styles';

const Section7 = ({isDesktop}: IsDesktop) => {
  const {openWriteDesktopModal} = useWriteDesktopModal();
  const {openWriteMobileModal} = useWriteMobileModal();

  const onWriteIntroduction = useCallback(() => {
    if (isDesktop) {
      openWriteDesktopModal();
    } else {
      openWriteMobileModal();
    }
  }, [isDesktop, openWriteDesktopModal, openWriteMobileModal]);

  return (
    <Section7Container>
      <SectionBlock isDesktop={isDesktop}>
        <SectionLabel
          isDesktop={isDesktop}
          backgroundColor={colors.BLACK}
          color={colors.WHITE}>
          EVENT 03
        </SectionLabel>

        <Section7Title isDesktop={isDesktop}>
          {'롯데웰푸드의 주인공,\n우리 부서를 소개해주세요!'}
        </Section7Title>

        <SpeechBubbleContainer isDesktop={isDesktop}>
          <Section7ImageWrapper1 isDesktop={isDesktop}>
            <Image
              src="/assets/images/section7/emoticon1.png"
              fill
              alt="emoticon"
            />
          </Section7ImageWrapper1>

          <Section7ImageWrapper2 isDesktop={isDesktop}>
            <Image
              src="/assets/images/section7/emoticon2.png"
              fill
              alt="emoticon"
            />
          </Section7ImageWrapper2>

          <SpeechInnerContainer isDesktop={isDesktop}>
            <Section7SpeechBubble
              isDesktop={isDesktop}
              backgroundColor={colors.SUB_COLOR_01}>
              {'이제 한 식구가 된 \n우리 회사 직원분들 궁금해요!'}
            </Section7SpeechBubble>

            <Section7SpeechBubble
              isDesktop={isDesktop}
              backgroundColor={colors.BLUE}
              color={colors.WHITE}
              isRight>
              {'아직 어떤 팀에서 무슨일을 하는지\n잘 모르겠어요'}
            </Section7SpeechBubble>

            <Section7SpeechBubble
              isDesktop={isDesktop}
              backgroundColor={colors.YELLOW}>
              {'서로 얼굴도 모르는 것 같아서\n아쉬워요.'}
            </Section7SpeechBubble>
          </SpeechInnerContainer>
        </SpeechBubbleContainer>

        <IntroductionContainer isDesktop={isDesktop}>
          <StepContainer isDesktop={isDesktop}>
            <StepBlock isDesktop={isDesktop}>
              <StepLabel isDesktop={isDesktop}>STEP 1.</StepLabel>
              <StepInnerBlock isDesktop={isDesktop}>
                <Image
                  src="/assets/images/section7/camera.png"
                  width={isDesktop ? 72 : 56}
                  height={isDesktop ? 72 : 56}
                  alt="camera"
                />
                <b>
                  {'소소한 일상 속,\n우리 부서 동료들과 함께 사진을 찍는다!'}
                  <p>*동료들의 얼굴이 나온 사진으로 등록해주세요!</p>
                </b>
              </StepInnerBlock>
            </StepBlock>

            <StepBlock isDesktop={isDesktop}>
              <StepLabel isDesktop={isDesktop}>STEP 2.</StepLabel>

              <StepInnerBlock isDesktop={isDesktop}>
                <Image
                  src="/assets/images/section7/person.png"
                  width={isDesktop ? 72 : 56}
                  height={isDesktop ? 72 : 56}
                  alt="camera"
                />
                <div>
                  <b>{'우리 부서의 업무를 소개한다.'}</b>
                  <p>*부서 기준 : 담당, 팀조직의 경우 팀</p>
                </div>
              </StepInnerBlock>
            </StepBlock>
          </StepContainer>

          <button onClick={onWriteIntroduction}>소개하러 가기</button>

          <Section8 isDesktop={isDesktop} />

          <IntroductionPagination isDesktop={isDesktop} />
        </IntroductionContainer>
      </SectionBlock>
    </Section7Container>
  );
};

export default Section7;
