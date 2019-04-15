import { firestore } from 'firebase';

export interface Article {
  id: string;
  url: string;
  title?: string;
  description?: string;
  author?: string;
  image?: string;
  views?: number;
  date?: firestore.Timestamp;
}
