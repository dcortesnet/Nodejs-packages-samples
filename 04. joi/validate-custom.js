const Joi = require("joi");

const customPasswordValidator = (value, helpers) => {
  if (!/[a-z]/.test(value) || !/[A-Z]/.test(value) || !/[0-9]/.test(value)) {
    return helpers.error("password.invalidFormat", { v: value });
  }
  return value;
};

const schema = Joi.object({
  password: Joi.string().custom(customPasswordValidator).required(),
});

const data = {
  password: "Secure123",
};

const { error, value } = schema.validate(data, { abortEarly: false });

if (error) {
  const errorDetails = error.details.map((err) => {
    if (err.type === "password.invalidFormat") {
      return {
        message:
          "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número.",
      };
    }
    return { message: err.message };
  });
  console.error("Errores de validación:", errorDetails);
} else {
  console.log("Datos válidos:", value);
}
