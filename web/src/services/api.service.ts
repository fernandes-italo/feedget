import axios from 'axios';

const api = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
});

interface saveFeedbackData {
   type: string;
   comment: string;
   screenshot?: string | null;
}

const saveFeedback = async ({ type, comment, screenshot }: saveFeedbackData) => {
   await api.post('feedbacks', {
      type,
      comment,
      screenshot,
   });
};

export const apiService = { saveFeedback };
