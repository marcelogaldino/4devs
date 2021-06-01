import { useState } from 'react';
import api from '../services/api';

interface IDataDevs {
  id: string;
  nome: string;
  idade: number;
  hobby: string;
  sexo: string;
}

export default function useDevs(pageLimit: number) {
  const [devs, setDevs] = useState<IDataDevs[]>([]);

  async function fetchDevs(page: number) {
    const virtualPage = ((page - 1) * pageLimit) <= 0
      ? 0
      : ((page - 1) * pageLimit);

    const response = await api.get('/devs', { params: { start: virtualPage, limit: pageLimit } });

    setDevs(response.data);
  }

  return {
    fetchDevs,
    devs,
  };
}
