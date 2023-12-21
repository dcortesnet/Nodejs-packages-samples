const { createLogger, transports, format } = require("winston");

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [new transports.File({ filename: "file.log" })],
});

logger.info("Este es un mensaje de información.");
logger.warn("¡Cuidado! Esto es una advertencia.");
logger.error("Este es un error.");
