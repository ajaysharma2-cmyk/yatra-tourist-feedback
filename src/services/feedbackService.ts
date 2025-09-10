
import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/feedback`;

export const getFeedback = async (userId: string, destinationType: string, destinationName: string) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        userId,
        destinationType,
        destinationName,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postFeedback = async (data: any) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
};
