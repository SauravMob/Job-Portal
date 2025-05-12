import userModels from "../models/userModels.js"

export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name) {
            return res.status(400).send({
                message: "Please provide name",
                success: false
            })
        }
        if (!email) {
            return res.status(400).send({
                message: "Please provide name",
                success: false
            })
        }
        if (!password) {
            return res.status(400).send({
                message: "Please provide name",
                success: false
            })
        }

        const existingUser = await userModels.findOne({ email })

        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'User already registered'
            })
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
        console.error(error)
        res.status(400).send({
            message: "Error in registration",
            success: false,
            error
        })
    }
}