import {useGetVideo} from '@/hooks/useVideo';
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
import VimeoPlayer from './VimeoPlayer';

const Section2 = ({isDesktop}: IsDesktop) => {
  const {data: video} = useGetVideo();

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

        {video && <VimeoPlayer isDesktop={isDesktop} url={video.url} />}

        <CommentForm isDesktop={isDesktop} />
        <CheeringMessagePagination isDesktop={isDesktop} />

        <Section2Button
          isDesktop={isDesktop}
          href="https://www.lottewellfood.com/invest/ir ">
          IR 자료 보러가기 (Cilck)
        </Section2Button>
      </SectionBlock>
    </Section2Container>
  );
};

export default Section2;
