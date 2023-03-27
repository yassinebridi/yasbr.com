import { strapiPublicToken, strapiToken } from '@utils';
import { DocumentNode, print } from 'graphql';

const endpointUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`;

export const queryClientGraphql = async <TData, TVariables>(
  variables?: TVariables,
  query?: DocumentNode
): Promise<TData> => {
  try {
    const res = await fetch(endpointUrl, {
      method: 'POST',
      // next: { revalidate: globalRevalidateTiming },
      body: JSON.stringify({ query: print(query!), variables }),
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${strapiToken}`,
      },
    });

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const rqClient = <TData, TVariables>(
  query: string,
  variables?: TVariables
): (() => Promise<TData>) => {
  return async () => {
    const res = await fetch(endpointUrl, {
      method: 'POST',
      body: JSON.stringify({ query, variables }),
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${strapiPublicToken}`,
      },
    });

    const data = await res.json();
    return data.data;
  };
};
