const connection = require('../config');

module.exports = {
  create: function(req, res, next){
    let response;
    const name = req.body.name;
    const token = req.body.token;
    const email = req.body.email;
    let status = 'online';
    if(typeof name !== 'undefined' && typeof token !== 'undefined' && email !== 'undefined'){
      connection.query('INSERT INTO users (name, email, token, status) VALUES (?, ?, ?, ?)',[name, email, token, status],
        (err, result) => {
            handleSuccessOrErrorMessage(err, result, res);
        });
    }else{
      response = {
        'result' : 'error',
        'msg' : 'Access denied'
      };
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(JSON.stringify(response));
    }
  },

  getAll: function(req, res){
    connection.query('SELECT * from users', (err, rows) => {
      if (!err) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(
            {
                'result' : 'success',
                'data': rows
            })
        );
      } else {
          res.status(400).send(err);
      }
    });
  }
};

function handleSuccessOrErrorMessage(err, result, res) {
  if (!err){
      let response;
      if (result.affectedRows != 0) {
          response = {'result' : 'success', 'row': result};
      } else {
          response = {'msg' : 'No Result Found'};
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(JSON.stringify(response));
  } else {
      res.status(400).send(err);
  }
}