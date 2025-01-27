import winston from 'winston';

export const Logger = winston.createLogger({
    level: 'info',
    format: winston.format.cli(),
    transports: [new winston.transports.Stream({ stream: process.stderr })],
});
