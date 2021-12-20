import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { apiEndpoints, useApiOdo } from '../../api';
import { IPatient, IQuestion, IUser } from '../../common/types/types';

const useSendData = (params: IUseSendDataParams) => {
  const api = useApiOdo();

  return useMutation<void, AxiosError>(
    [`${apiEndpoints.answers}`, params],
    async () => {
      await api.post(`/${apiEndpoints.answers}`, params);
    },
    {
      onError: (err) => {
        console.log(err);
      },
    }
  );
};

export interface IUseSendDataParams {
  app: string;
  user: IUser;
  patient: IPatient;
  answers: IQuestion[];
}

export { useSendData };
