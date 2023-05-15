import {isErrorWithData} from '@/api/api.types';
import {join, login} from '@/api/user/user';
import {JoinParams} from '@/api/user/user.types';
import {userState} from '@/atoms/user';
import userStorage from '@/storages/userStorage';
import {useMutation} from '@tanstack/react-query';
import {UseFormReset} from 'react-hook-form';
import {useSetRecoilState} from 'recoil';

export const useJoin = (reset: UseFormReset<JoinParams>) => {
  return useMutation(join, {
    onSuccess: () => {
      alert('회원가입이 완료되었습니다.');
      reset();
    },
    onError: err => {
      if (isErrorWithData(err)) {
        alert(err.response.data.message);
      }
    },
  });
};

export const useLogin = () => {
  const setUser = useSetRecoilState(userState);

  return useMutation(login, {
    onSuccess: user => {
      userStorage.set(user);
      setUser(user);
    },
  });
};
