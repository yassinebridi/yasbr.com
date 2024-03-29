export const hostname = 'https://yasbr.com';
export const environment = process.env.ENVIRONMENT;
export const strapiHostname = process.env.NEXT_PUBLIC_STRAPI_URL;
export const strapiToken = process.env.AUTH_TOKEN;
export const strapiPublicToken = process.env.NEXT_PUBLIC_AUTH_TOKEN;
// export const globalRevalidateTiming = environment === "prod" ? 86400 : 1;
export const globalRevalidateTiming = environment === 'prod' ? 1 : 1;
export const nextEnvironment = process.env.NEXT_PUBLIC_ENVIRONMENT;
// export const globalRevalidateTiming = 60;
