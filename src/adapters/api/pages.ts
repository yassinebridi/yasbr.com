import {
  GetPagesQueryVariables,
  GetPagesQuery,
  GetPages,
  GetPortfolioPage,
  GetPortfolioPageQuery,
  GetPortfolioPageQueryVariables,
} from '../generated';
import { queryClientGraphql } from '../gql-client';

export const getPages = (variables?: GetPagesQueryVariables) => {
  return queryClientGraphql<GetPagesQuery, GetPagesQueryVariables>(
    variables,
    GetPages
  );
};

export const getPortfolioPage = (
  variables?: GetPortfolioPageQueryVariables
) => {
  return queryClientGraphql<
    GetPortfolioPageQuery,
    GetPortfolioPageQueryVariables
  >(variables, GetPortfolioPage);
};
