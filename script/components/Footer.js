const Footer = () => {

    const footer = document.querySelector("footer");
    footer.innerHTML =
        `<div class="container-lg p-5 mt-5 d-flex flex-column flex-md-row justify-content-md-between">
            <div class="logo">
                <p>eFooter</p>
            </div>
            <div class="reserve">
                <p>© 2022 All Rights reserve</p>
            </div>
            <div class="social">
                <i class="bi bi-instagram"></i>
                <i class="bi bi-facebook"></i>
            </div>
        </div>`

}

export default Footer;