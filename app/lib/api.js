import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/articles`);
    console.log('response', response.data);
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};


export const fetchPostBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/articles`, {
      params: {
        filters: {
          slug: {
            $eq: slug
          }
        }
      }
    });

    const post = response.data.data[0];

    return post || null; 
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};

