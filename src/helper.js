export const scrollToSection = (go) => {
    document.querySelector("#" + go).scrollIntoView({ behavior: "smooth" });
};