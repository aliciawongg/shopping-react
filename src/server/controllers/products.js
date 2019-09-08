module.exports = (db) => {
  let getAll = (request, response) => {

    db.products.getAll((error, products) => {
      // queryResult contains pokemon data returned from the pokemon model
      if (error) {
        console.error('error getting pokemon', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({products: products});
      }
    });
  };

  let getByName = (request, response) => {

    db.products.getByName(request.params.name,(error, products) => {
      // queryResult contains pokemon data returned from the pokemon model
      if (error) {
        console.error('error getting pokemon', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({products: products});
      }
    });
  };

  return {
    getAll: getAll,
    getByName: getByName
  };
};