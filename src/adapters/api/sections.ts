import {
  GetProjectsQueryVariables,
  GetProjectsQuery,
  GetProjects,
  GetSections,
  GetSectionsQuery,
  GetSectionsQueryVariables,
  GetServices,
  GetServicesQuery,
  GetServicesQueryVariables,
  GetSkills,
  GetSkillsQuery,
  GetSkillsQueryVariables,
  GetTestimonials,
  GetTestimonialsQuery,
  GetTestimonialsQueryVariables,
} from '../generated';
import { queryClientGraphql } from '../gql-client';

export const getProjects = (variables?: GetProjectsQueryVariables) => {
  return queryClientGraphql<GetProjectsQuery, GetProjectsQueryVariables>(
    variables,
    GetProjects
  );
};

export const getSections = (variables?: GetSectionsQueryVariables) => {
  return queryClientGraphql<GetSectionsQuery, GetSectionsQueryVariables>(
    variables,
    GetSections
  );
};

export const getServices = (variables?: GetServicesQueryVariables) => {
  return queryClientGraphql<GetServicesQuery, GetServicesQueryVariables>(
    variables,
    GetServices
  );
};

export const getSkills = (variables?: GetSkillsQueryVariables) => {
  return queryClientGraphql<GetSkillsQuery, GetSkillsQueryVariables>(
    variables,
    GetSkills
  );
};

export const getTestimonials = (variables?: GetTestimonialsQueryVariables) => {
  return queryClientGraphql<
    GetTestimonialsQuery,
    GetTestimonialsQueryVariables
  >(variables, GetTestimonials);
};
