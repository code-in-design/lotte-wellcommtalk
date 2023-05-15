import {userState} from './../atoms/user';
import userStorage from '@/storages/userStorage';
import {useEffect, useState} from 'react';
import {useSetRecoilState} from 'recoil';

const useInitialize = () => {
  const [isInitialize, setIsInitialize] = useState(false);
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const user = userStorage.get();

    setUser(user);
    setIsInitialize(true);
  }, [setUser]);

  return {isInitialize};
};

export default useInitialize;
