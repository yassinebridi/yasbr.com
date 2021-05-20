export interface PagesUpdateParameters
  extends PagesUpdatePathParameters,
    PagesUpdateQueryParameters,
    PagesUpdateBodyParameters {}

interface PagesUpdatePathParameters {
  page_id: string;
}

interface PagesUpdateQueryParameters {}
interface PagesUpdateBodyParameters {
  properties: {
    [propertyNameOrId: string]: PropertyValue;
  };
}

declare type WithAuth<P> = P & {
  auth?: string;
};
