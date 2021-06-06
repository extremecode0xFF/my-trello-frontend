export default {
  baseURL: process.env.REACT_APP_API_URL || '',
  boards: '/board',
  list: '/list',
  card: '/card',
  user: '/user',
};

export interface IDataList {
  title: string;
  position?: number;
}

export interface IDataCard {
  title: string;
  list_id?: number;
  position?: number;
}
