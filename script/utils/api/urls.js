const apiUrls = {
    baseUrl: "https://my-app-f7t32.ondigitalocean.app",
    loginUrl: "/api/auth/local?populate=role",
    signUpUserUrl: "/api/auth/local/register/",
    heroSectionUrl: "/api/hero-sections?fields=header,subHeader&populate=image",
    featuredUrl: "/api/category/1?populate[products][populate]=image",
    productsUrl: "/api/products?populate=image&fields=name,description,price",
    singleProductsUrl: "/api/products/",
    populateImgUrl: "?populate=image&fields=name,description,price"
}

export default apiUrls;



// export const baseUrl = "https://my-app-f7t32.ondigitalocean.app";
// export const loginUrl = "/api/auth/local?populate=role";
// export const signUpUserUrl = "/api/auth/local/register/"
// export const heroSectionUrl = "/api/hero-sections?fields=header,subHeader&populate=image";
// export const featuredUrl = "/api/category/1?populate[products][populate]=image";
// export const productsUrl = "/api/products?populate=image&fields=name,description,price";
// export const singleProductsUrl = "/api/products/";
// export const populateImgUrl = "?populate=image&fields=name,description,price";

