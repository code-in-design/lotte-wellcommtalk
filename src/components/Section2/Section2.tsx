import {colors} from '@/styles/colors';
import {SectionBlock, SectionLabel} from '@/styles/section.styles';
import React from 'react';
import QuizForm from './QuizForm/QuizForm';
import {
  ConsonantBlock,
  ConsonantContainer,
  QuizBlock,
  Section2Container,
  Section2Text,
  Section2Title,
} from './Section2.styles';

const Section2 = ({isDesktop}: IsDesktop) => {
  return (
    <Section2Container isDesktop={isDesktop}>
      <SectionBlock isDesktop={isDesktop}>
        <SectionLabel
          backgroundColor={colors.BLACK}
          color={colors.WHITE}
          isDesktop={isDesktop}>
          EVENT 01
        </SectionLabel>

        <Section2Title isDesktop={isDesktop}>
          {'영상을 시청하고,\n빈칸을 채워주세요!'}
        </Section2Title>

        <Section2Text isDesktop={isDesktop}>
          {
            '유아부터 실버세대까지 전 연령층의 식문화 동반자,\n롯데웰푸드와 함께 해볼까요?'
          }
        </Section2Text>

        <iframe
          width="100%"
          height={isDesktop ? 594 : 192}
          src="https://www.youtube.com/embed/fxgElZMAgWQ"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            marginBottom: isDesktop ? 64 : 32,
            borderRadius: isDesktop ? 20 : 12,
          }}
        />

        <QuizBlock isDesktop={isDesktop}>
          {isDesktop ? (
            <>
              <ConsonantContainer>
                <p>행복, 건강, 그리고</p>
                <ConsonantBlock>ㅇ</ConsonantBlock>
                <ConsonantBlock>ㄴ</ConsonantBlock>
                <ConsonantBlock>ㅅ</ConsonantBlock>
                <p>로</p>
              </ConsonantContainer>
              <p>
                인류의 <b>WELL LIFE</b>에 기여하는 글로벌 종합 식품 기업
              </p>
            </>
          ) : (
            <>
              <p>행복, 건강, 그리고</p>
              <ConsonantContainer>
                <ConsonantBlock>ㅇ</ConsonantBlock>
                <ConsonantBlock>ㄴ</ConsonantBlock>
                <ConsonantBlock>ㅅ</ConsonantBlock>
                <p>로</p>
              </ConsonantContainer>
              <p>
                인류의 <b>WELL LIFE</b>에 기여하는
              </p>
              <p>글로벌 종합 식품 기업</p>
            </>
          )}
        </QuizBlock>

        <QuizForm isDesktop={isDesktop} />
      </SectionBlock>
    </Section2Container>
  );
};

export default Section2;
