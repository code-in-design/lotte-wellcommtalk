import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);
dayjs.locale('ko');

export const formatDate = (seconds: number) => {
  const milliseconds = seconds * 1000;

  return dayjs(milliseconds).format('YYYY. MM. DD A h:mm');
};
