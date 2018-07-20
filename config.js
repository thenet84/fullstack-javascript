const env = process.env;

export const logStart = function(message){
    console.info('*******');
    console.info(message);
    console.info('*******');
};

export const nodeEnv = env.nodeEnv || 'development';

export default {
    port: env.PORT || 8080
};