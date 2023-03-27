import {
  CreateContactMutationVariables,
  CreateContactMutation,
  CreateContact,
} from "../generated";
import { queryClientGraphql } from "../gql-client";

export const createContact = (variables?: CreateContactMutationVariables) => {
  return queryClientGraphql<
    CreateContactMutation,
    CreateContactMutationVariables
  >(variables, CreateContact);
};
