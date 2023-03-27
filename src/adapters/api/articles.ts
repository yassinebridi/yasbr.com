import {
  GetArticlesQueryVariables,
  GetArticlesQuery,
  GetArticles,
  GetAuthors,
  GetAuthorsQuery,
  GetAuthorsQueryVariables,
  GetTagsQueryVariables,
  GetTagsQuery,
  GetTags,
} from '../generated';
import { queryClientGraphql } from '../gql-client';

export const getArticles = (variables?: GetArticlesQueryVariables) => {
  return queryClientGraphql<GetArticlesQuery, GetArticlesQueryVariables>(
    variables,
    GetArticles
  );
};
export const getTags = (variables?: GetTagsQueryVariables) => {
  return queryClientGraphql<GetTagsQuery, GetTagsQueryVariables>(
    variables,
    GetTags
  );
};
export const getAuthors = (variables?: GetAuthorsQueryVariables) => {
  return queryClientGraphql<GetAuthorsQuery, GetAuthorsQueryVariables>(
    variables,
    GetAuthors
  );
};
