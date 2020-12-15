

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
         Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjA3OTE5MjQ3LCJleHAiOjE2MDg1MjQwNDd9.iynweGJaBNADugp29DIh__iE8HL2bXwQJQUbYSlOfj4qiADn-brVnIIwd7jDsKrG3OP10FeGpfhL7WElX9xKVg`,
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

