const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

const userData = {
  username: "john_doe",
  email: "",
  password: "secure123",
};

const { error, value } = userSchema.validate(userData);

if (error) {
  console.error("Error de validación:", error.details);
} else {
  console.log("Datos válidos:", value);
}
