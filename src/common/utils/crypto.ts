import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

export const encrypt = (value: string) => {
  if (!SECRET_KEY) {
    throw new Error('키가 존재하지 않습니다.');
  }

  return CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
};

export const decrypt = (encryptedValue: string) => {
  if (!SECRET_KEY) {
    throw new Error('키가 존재하지 않습니다.');
  }

  return CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY).toString(CryptoJS.enc.Utf8);
};
