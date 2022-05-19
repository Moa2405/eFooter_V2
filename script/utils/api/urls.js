const apiUrls = {
    baseUrl: "https://my-app-f7t32.ondigitalocean.app",

    loginUrl: "/api/auth/local?populate=role",

    signUpUserUrl: "/api/auth/local/register/",

    heroSectionUrl: "/api/hero-sections?fields=header,subHeader&populate=image",

    featuredUrl: "/api/category/1?populate[products][populate]=image",

    productsUrl: "/api/products?populate=image&fields=name,description,price,createdAt",

    singleProductsUrl: "/api/products/",

    populateImgUrl: "?populate=image&fields=name,description,price",

    uploadedMedia: "https://my-app-f7t32.ondigitalocean.app/api/upload/files"
};

export default apiUrls;