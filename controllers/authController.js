import userModels from "../models/userModels.js"

export const registerController = async (req, res, next) => {
    try {
        const { name, email, password } = req.body

        if (!name) {
            next("name is required")
        }
        if (!email) {
            next("email is required")
        }
        if (!password) {
            next("password is required and greater than 6 characters")
        }

        const existingUser = await userModels.findOne({ email })

        if (existingUser) {
            next("User already exists")
        }

        const user = await userModels.create({
            name, email, password
        })
        res.status(201).send({
            success: true,
            message: 'User created succesfully',
            user
        })

    } catch (error) {
        next(error)
    }
}