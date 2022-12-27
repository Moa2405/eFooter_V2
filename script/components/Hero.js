import DisplayMessage from "../components/DisplayMessage.js";
import apiUrls from "../utils/api/urls.js";

const Hero = (heroData) => {
    const heroContainer = document.querySelector(".hero__container");

    if (heroData.attributes) {
        heroContainer.innerHTML =
            `<section class="hero container-lg d-flex flex-column flex-md-row align-items-center py-5 px-lg-5 text-white">
                    <figure class="hero__image_container container  order-md-2 px-0">
                        <img class="img-fluid" src="${heroData.attributes.image.data.attributes.url}" alt="${heroData.attributes.image.data.attributes.alternativeText}">
                    </figure>
                    <figcaption class="hero__content_container container order-md-1 px-0 px-sm-2">
                        <h1 class="">${heroData.attributes.title}</h1>
                        <p class="lh-sm">${heroData.attributes.description}</p>
                        <a href="/product-detail.html?id=${heroData.id}"class="btn btn-secondary">BUY NOW</a>
                    </figcaption>
                </section>`

    } else {
        DisplayMessage("danger",
            "Sorry, but something went wrong while trying to display the hero section",
            ".hero-container")
    }

};

export default Hero;