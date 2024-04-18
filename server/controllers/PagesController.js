// Creates a controller action called "home"
export const home = (_, res) => {
    // Renders our home page view
    res.render("pages/home");
};

// Creates a controller action called "about"
export const about = (_, res) => {
    // Renders our about page view
    res.render("pages/about");
};

export const contact = (_, res) => {
    // Renders our about page view
    res.render("pages/contact");
};
