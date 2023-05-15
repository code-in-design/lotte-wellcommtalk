import Sign from '@/components/Sign/Sign';
import {useEffect, useState} from 'react';

export default function Join({isDesktop}: IsDesktop) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const password = prompt('비밀번호를 입력해주세요.');

    if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      return alert('비밀번호가 일치하지 않습니다.');
    }
    setIsAdmin(true);
  }, []);

  if (!isAdmin) {
    return null;
  }

  return <Sign isDesktop={isDesktop} />;
}
