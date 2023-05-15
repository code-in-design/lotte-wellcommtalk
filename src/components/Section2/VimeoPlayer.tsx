import React, {useEffect, useRef} from 'react';
import Vimeo from '@vimeo/player';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

interface VimeoPlayerProps extends IsDesktop {
  url: string;
}

const VimeoPlayer = ({isDesktop, url}: VimeoPlayerProps) => {
  const playerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!playerRef.current) return;

    const player = new Vimeo(playerRef.current, {
      url,
      width: isDesktop ? 1056 : 343,
      title: false, // 제목
      byline: false, // 업로더 이름
      portrait: false, // 업로더 프로필 이미지(초상화)
    });

    return () => {
      player.destroy();
    };
  }, [isDesktop, url]);

  return <VimeoWrapper ref={playerRef} isDesktop={isDesktop} />;
};

const VimeoWrapper = styled.div<IsDesktop>`
  margin-bottom: 32px;
  border-radius: 12px;
  overflow: hidden;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      margin-bottom: 64px;
      border-radius: 20px;
    `}
`;

export default VimeoPlayer;
