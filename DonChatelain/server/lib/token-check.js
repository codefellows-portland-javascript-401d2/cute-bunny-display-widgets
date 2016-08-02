const jwt = require( 'jsonwebtoken' );
const secret = process.env.APP_SECRET || 'hailcaesar';

module.exports = {
  sign ( user ) {
    return new Promise( ( resolve, reject ) => {
      
      jwt.sign({ 
        id: user.id,
        roles: user.roles  
      }, secret, null, ( err, token ) => {
        if ( err ) return reject( err );
        resolve( token );
      });
    
    });
  },

  verify ( token ) {
    return new Promise( ( resolve, reject ) => {
      
      jwt.verify( token, secret, ( err, payload ) => {
        if ( err ) return reject( err );
        resolve( payload );
      });
      
    });
  }
};