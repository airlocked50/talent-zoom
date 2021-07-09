export const GLOBAL = {
  BASE_URL: process.env.REACT_APP_ENV === "development" ? "https://staging.talentzoom.click/" : "https://click.talentzoom.click/",
  //BASE_URL: "http://talentzoom.us-east-2.elasticbeanstalk.com/",
  REDIRECT_URL: 'https://www.talentzoom.io/talentProfile?id=',
  REDIRECT_URL_COMPANY: 'https://www.talentzoom.io/companyProfile?id=',
};
