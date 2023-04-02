import {
  GetArticles,
  GetArticlesQuery,
  GetArticlesQueryVariables,
  GetAuthors,
  GetAuthorsQuery,
  GetAuthorsQueryVariables,
  UpdateArticle,
  UpdateArticleMutation,
  UpdateArticleMutationVariables,
} from '../generated';
import { queryClientGraphql } from '../gql-client';

export const getArticles = (variables?: GetArticlesQueryVariables) => {
  return queryClientGraphql<GetArticlesQuery, GetArticlesQueryVariables>(
    variables,
    GetArticles
  );
};
export const getAuthors = (variables?: GetAuthorsQueryVariables) => {
  return queryClientGraphql<GetAuthorsQuery, GetAuthorsQueryVariables>(
    variables,
    GetAuthors
  );
};

export const updateArticle = (variables?: UpdateArticleMutationVariables) => {
  return queryClientGraphql<
    UpdateArticleMutation,
    UpdateArticleMutationVariables
  >(variables, UpdateArticle);
};
