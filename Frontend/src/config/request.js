

async function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  try {
    return await response.json();
  } catch (err) {
    return null;
  }
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw response;
}

export default function request(url, options) {
  const parsedOptions = Object.assign(
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
         Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2MDc4NDk5MTIsImlhdCI6MTYwNzgzMTkxMn0.hGGM1_70hc1U6wJQEAIueBEpuf7zi0ua4G_-RW_JsUPXDCbYhtN8J1LFg15DwzZ8bn7aqjiw9rQVURFtW-njsQ`,
      },
    },
    options,
  );
  // `${REST_API}/${url}`
  return fetch(`http://localhost:6969/api/${url}`, parsedOptions)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => {
      throw err;
    });
}

