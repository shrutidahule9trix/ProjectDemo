/** @format */

import instance from './axios';

export const fetchAttributes = async (payload) => {
  const response = await instance.post('/get_attribute_names', payload);
  return response.data?.Column_Names || [];
};

export const fetchAttributeValues = async (payload) => {
  const response = await instance.post(
    '/api/v2.2/get_attribute_values',
    payload
  );
  return response.data;
};
