import client from './client';
import qs from 'qs';

export const writePost = ({ title, content, token }) => {
  client.post(
    'v2/boards',
    { title, content },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  );
};

export const updatePost = ({ id, title, content, token }) => {
  client.put(
    `/v2/boards/${id}`,
    {
      title,
      content,
    },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  );
};

export const removePost = ({ id, token }) =>
  client.delete(`/v2/boards/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

export const writeComment = ({ board_id, comment, token }) =>
  client.post(
    `/v2/boards/${board_id}/comments`,
    {
      comment,
    },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  );

export const removeComment = ({ board_id, comment_id, token }) =>
  client.delete(`/v2/boards/${board_id}/comments/${comment_id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

export const readPost = (id) => client.get(`/v2/boards/${id}`);

export const listPosts = ({all, title, writer}) => {
  console.log(writer);
  return client.get(`/v2/boards`,
  {
    params: {
      all: all,
      title: title,
      writer: writer
    }
  });
};
