import { GetPagesQueryVariables, GetPagesQuery, GetPages } from "../generated";
import { queryClientGraphql } from "../gql-client";

export const getPages = (variables?: GetPagesQueryVariables) => {
  return queryClientGraphql<GetPagesQuery, GetPagesQueryVariables>(
    variables,
    GetPages
  );
};
