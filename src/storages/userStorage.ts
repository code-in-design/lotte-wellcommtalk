import {User} from '@/api/user/user.types';

const key = 'user';

const userStorage = {
  get() {
    try {
      const rawData = sessionStorage.getItem(key);
      if (!rawData) return null;

      const data: User = JSON.parse(rawData);

      return data;
    } catch (err) {
      throw new Error('스토리지에서 정보를 가져오지 못했습니다.');
    }
  },

  set(user: User) {
    try {
      sessionStorage.setItem(key, JSON.stringify(user));
    } catch (err) {
      throw new Error('스토리지에 정보를 저장하지 못했습니다.');
    }
  },

  clear() {
    sessionStorage.removeItem(key);
  },
};

export default userStorage;
