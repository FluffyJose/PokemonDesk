import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string, query: object) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));

  const responce = await fetch(uri).then((res) => res.json());
  return responce;
}

export default req;
