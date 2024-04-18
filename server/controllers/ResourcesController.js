import Car from "../models/Resource.js";

export const index = async (req, res, next) => {
    try {
        const cars = await Car.find();

        res.format({
            "text/html": () => {
                res.render("resources/index", { cars, title: "Car List" });
            },
            "application/json": () => {
                res.json({ cars });
            },
            default: () => {
                res.status(406).send("NOT ACCEPTABLE");
            }
        });
    } catch(error) {
        next(error);
    }
};

export const show = async (req, res, next) => {
    try {
        const car = await Car.findById(req.params.id);

        res.format({
            "text/html": () => {
                res.render("resources/show", { car, title: "Car Details" });
            },
            "application/json": () => {
                res.json({ car });
            },
            default: () => {
                res.status(406).send("NOT ACCEPTABLE");
            }
        });
    } catch(error) {
        next(error);
    }
};

export const add = async (req, res, next) => {
    try {
        res.render("resources/add", { formType: "create", title: "Add New Car" });
    } catch(error) {
        next(error);
    }
};

export const edit = async (req, res, next) => {
    try {
        const car = await Car.findById(req.params.id);

        res.render("resources/edit", { formType: "update", title: "Edit Car", car: car });

    } catch(error) {
        next(error);
    }
};

export const create = async (req, res, next) => {
    try {
        const { name, year, color, model } = req.body;
        const photo = req.file.path; // Assuming you're using multer for file upload

        const newCar = new Car({ name, year, color, model, photo });

        await newCar.save();

        res.format({
            "text/html": () => {
                res.redirect("/resources");
            },
            "application/json": () => {
                res.status(201).json({ status: 201, message: "SUCCESS" });
            },
            default: () => {
                res.status(406).send("NOT ACCEPTABLE");
            }
        });
    } catch(error) {
        next(error);
    }
};

export const update = async (req, res, next) => {
    try {
        const { name, year, color, model } = req.body;
        const photo = req.file.path; // Assuming you're using multer for file upload

        const updatedCar = await Car.findByIdAndUpdate(req.params.id, { name, year, color, model, photo }, { new: true });

        res.format({
            "text/html": () => {
                res.redirect("/resources");
            },
            "application/json": () => {
                res.status(200).json({ status: 200, message: "SUCCESS" });
            },
            default: () => {
                res.status(406).send("NOT ACCEPTABLE");
            }
        });
    } catch(error) {
        next(error);
    }
};

export const remove = async (req, res, next) => {
    try {
        await Car.findByIdAndDelete(req.params.id);

        res.format({
            "text/html": () => {
                res.redirect("/resources");
            },
            "application/json": () => {
                res.status(200).json({ status: 200, message: "SUCCESS" });
            },
            default: () => {
                res.status(406).send("NOT ACCEPTABLE");
            }
        });
    } catch(error) {
        next(error);
    }
};
