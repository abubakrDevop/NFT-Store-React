import { emailReg, passwordReg } from "./regex"

export const required = 'Field cannot be empty!'

export const allInputs = {
    required,
    pattern: {
        value: true
    }
}

export const name = {
    required,
    pattern: {
        value: passwordReg,
        message: 'Only Latin letters!'
    }
}

export const email = {
    required,
    pattern: {
        value: emailReg,
        message: 'Email is not valid!'
    }
}

export const password = {
    required,
    pattern: {
        value: passwordReg,
        message: 'Password must contain letters and numbers!'
    },
    minLength: {
        value: 6,
        message: 'Too short password!'
    }
}