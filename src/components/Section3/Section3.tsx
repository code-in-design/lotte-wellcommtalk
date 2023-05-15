import {colors} from '@/styles/colors';
import {SectionBlock, SectionLabel} from '@/styles/section.styles';
import React from 'react';
import {
  HintText,
  Section3Container,
  Vision,
  VisionSubText,
  VisionText,
} from './Section3.styles';

const Section3 = ({isDesktop}: IsDesktop) => {
  return (
    <Section3Container>
      <SectionBlock isDesktop={isDesktop}>
        <SectionLabel backgroundColor={colors.YELLOW} isDesktop={isDesktop}>
          HINT 01
        </SectionLabel>
        <HintText isDesktop={isDesktop}>
          롯데웰푸드의 비전을 확인해보세요!
        </HintText>
        <Vision isDesktop={isDesktop}>
          <VisionText isDesktop={isDesktop}>
            {isDesktop
              ? '전 세계 소비자들에게 맛있고, 신선하고, 영양이 풍부한 제품을 통해\n행복과 건강, 그리고 웰니스로 인류의 삶에 기여하는 미래 존중 기업'
              : '전 세계 소비자들에게 맛있고, 신선하고,\n영양이 풍부한 제품을 통해\n행복과 건강, 그리고 웰니스로 인류의 삶에\n기여하는 미래 존중 기업'}
          </VisionText>
          <VisionSubText isDesktop={isDesktop}>
            {isDesktop
              ? 'Future respecting company that provides the world’s consumers\nwith delicious, fresh, and nutritious products to enrich people’s lives\nwith happiness, health and wellness'
              : 'Future respecting company that provides\nthe world’s consumers\nwith delicious, fresh, and nutritious products\nto enrich people’s lives\nwith happiness, health and wellness'}
          </VisionSubText>
        </Vision>
        <SectionLabel backgroundColor={colors.YELLOW} isDesktop={isDesktop}>
          HINT 02
        </SectionLabel>
        <HintText isDesktop={isDesktop}>
          비전 영상의 3:23초 부분을 확인해보세요!
        </HintText>
      </SectionBlock>
    </Section3Container>
  );
};

export default Section3;
