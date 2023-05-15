import React from 'react';
import {colors} from '@/styles/colors';
import {SectionBlock, SectionLabel} from '@/styles/section.styles';
import Image from 'next/image';

import CommentForm from '../Section2/CommentForm/CommentForm';
import {
  Section5Container,
  Section5SpeechBlock,
  Section5SpeechBubble,
  Section5SpeechContainer,
  Section5Title,
} from './Section5.styles';
import CheeringMessagePagination from '../Section2/CommentPagination/CommentPagination';

const Section5 = ({isDesktop}: IsDesktop) => {
  return (
    <Section5Container>
      <SectionBlock isDesktop={isDesktop}>
        <SectionLabel
          backgroundColor={colors.BLACK}
          color={colors.WHITE}
          isDesktop={isDesktop}>
          EVENT 02
        </SectionLabel>

        <Section5Title isDesktop={isDesktop}>
          {isDesktop
            ? '새롭게 도약하는 롯데웰푸드에\n축하/응원의 메시지를 남겨주세요!'
            : '새롭게 도약하는 롯데웰푸드에\n축하/응원의 메시지를\n남겨주세요!'}
        </Section5Title>

        <Section5SpeechContainer isDesktop={isDesktop}>
          <Section5SpeechBlock isDesktop={isDesktop}>
            <Image
              src="/assets/images/section5/farmer.png"
              width={isDesktop ? 144 : 74.45}
              height={isDesktop ? 144 : 74.45}
              alt=""
            />
            <Section5SpeechBubble
              backgroundColor={colors.YELLOW}
              isDesktop={isDesktop}>
              {
                '롯데제과의 새로운 이름, 롯데웰푸드!\n많은 사람들에게 사랑받으며\n발전해나가기를 응원합니다.'
              }
            </Section5SpeechBubble>
          </Section5SpeechBlock>

          <Section5SpeechBlock
            isDesktop={isDesktop}
            style={{alignSelf: 'flex-end'}}>
            <Section5SpeechBubble
              backgroundColor={colors.PINK}
              isDesktop={isDesktop}
              isRight>
              {
                '모두 함께 만들어갈 더 멋진 성장과\n더 밝은 미래를 기대하겠습니다.\n롯데웰푸드 화이팅!'
              }
            </Section5SpeechBubble>
            <Image
              src="/assets/images/section5/cook.png"
              width={isDesktop ? 144 : 74.32}
              height={isDesktop ? 144 : 74.32}
              alt=""
            />
          </Section5SpeechBlock>
        </Section5SpeechContainer>

        <CommentForm isDesktop={isDesktop} />

        <CheeringMessagePagination isDesktop={isDesktop} />
      </SectionBlock>
    </Section5Container>
  );
};

export default Section5;
