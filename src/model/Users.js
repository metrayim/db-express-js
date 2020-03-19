const db = require('../config/connection');
const Pool = require("pg").Pool;
exports.getListUser = (req, callbackFn) =>
{
    db.query('SELECT * FROM Uesrs ', (err, res) => {
        console.log(err, res)
        pool.end()
      });
};