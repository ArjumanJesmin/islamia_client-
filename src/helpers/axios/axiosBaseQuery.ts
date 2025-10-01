import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig, AxiosError } from 'axios';
import axios from 'axios';
import { toast } from 'sonner';

export const axiosBaseQuery = (
  { baseUrl }: { baseUrl: string } = { baseUrl: '' }
): BaseQueryFn<
  {
    url: string;
    method?: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
    headers?: AxiosRequestConfig['headers'];
  },
  unknown,
  unknown
> => {
  return async ({ url, method = 'GET', data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      });
      
      return { data: result.data };
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      
      // Show error toast for better UX
      if (error.response?.status === 500) {
        toast.error('সার্ভার সমস্যা হয়েছে! দয়া করে পরে চেষ্টা করুন।');
      } else if (error.response?.status === 404) {
        toast.error('ডেটা পাওয়া যায়নি!');
      } else if (error.message === 'Network Error') {
        toast.error('নেটওয়ার্ক সমস্যা! ইন্টারনেট সংযোগ চেক করুন।');
      }
      
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };
};