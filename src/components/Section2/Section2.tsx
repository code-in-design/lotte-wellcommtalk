import {colors} from '@/styles/colors';
import {SectionBlock, SectionLabel} from '@/styles/section.styles';
import React from 'react';
import CommentForm from './CommentForm/CommentForm';
import CheeringMessagePagination from './CommentPagination/CommentPagination';
import {
  Section2Button,
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
          웰컴 톡 1회
        </SectionLabel>

        <Section2Title isDesktop={isDesktop}>
          제 1회 웰컴 톡을 공유합니다!
        </Section2Title>

        <Section2Text isDesktop={isDesktop}>
          {
            '웰컴톡에서 나누고 싶은 주제/소식과 더불어\n개선/제안 의견은 댓글을 통해 남겨주시기 바랍니다!'
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

        <CommentForm isDesktop={isDesktop} />
        <CheeringMessagePagination isDesktop={isDesktop} />

        <Section2Button isDesktop={isDesktop}>
          IR 자료 보러가기 (Cilck)
        </Section2Button>
      </SectionBlock>
    </Section2Container>
  );
};

export default Section2;
