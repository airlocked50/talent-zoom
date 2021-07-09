export const LINKEDIN_STATE = process.env.NEXT_PUBLIC_LINKEDIN_STATE;
const LINKEDIN_SCOPE = process.env.NEXT_PUBLIC_LINKEDIN_SCOPE;
const LINKEDIN_REDIRECT = process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT;
const LINKEDIN_REDIRECT_LOGIN = process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_LOGIN;
const LINKEDIN_CLIENT_ID = process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID;

export const getURLWithQueryParams = (base, params) => {
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

  return `${base}?${query}`;
};

export const LINKEDIN_URL = getURLWithQueryParams(
  'https://www.linkedin.com/oauth/v2/authorization',
  {
    response_type: 'code',
    client_id: LINKEDIN_CLIENT_ID,
    redirect_uri: LINKEDIN_REDIRECT,
    state: LINKEDIN_STATE,
    scope: LINKEDIN_SCOPE,
  }
);

export const LINKEDIN_URL_LOGIN = getURLWithQueryParams(
  'https://www.linkedin.com/oauth/v2/authorization',
  {
    response_type: 'code',
    client_id: LINKEDIN_CLIENT_ID,
    redirect_uri: LINKEDIN_REDIRECT_LOGIN,
    state: LINKEDIN_STATE,
    scope: LINKEDIN_SCOPE,
  }
);
