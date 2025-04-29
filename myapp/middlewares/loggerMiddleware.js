const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Melanjutkan ke middleware atau route berikutnya
  };
  
  export default logger;
  