const apiUrls = {
    baseUrl: "https://rocky-plateau-53779.herokuapp.com",

    loginUrl: "/api/auth/local?populate=role",

    signUpUserUrl: "/api/auth/local/register/",

    // heroSectionUrl: "/api/hero-sections?fields=header,subHeader&populate=image",
    heroSectionUrl: "/api/hero?populate=image",

    featuredUrl: "/api/category/1?populate[products][populate]=image",

    productsUrl: "/api/products?populate=image",

    singleProductsUrl: "/api/products/",

    populateImgUrl: "?populate=image",

    uploadedMedia: "https://rocky-plateau-53779.herokuapp.com/api/upload/files",

    orderByCreated: "&sort[0]=createdAt%3Aasc",

    orderById: "&sort[0]=id%3Aasc",

    orderByName: "&sort[0]=name%3Aasc"
};

export default apiUrls;