let token = null;
export const setToken = newToken => {
  token = newToken;
};

export const postStory = (story, description) => {
  return fetch(`${process.env.API_URL}/api/v1/stories`, {
    method: 'POST',
    body: JSON.stringify({ story, description }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => {
      if(!res.ok) throw 'Could not create a story';

      return res.json();
    });
};