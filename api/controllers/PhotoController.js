/**
 * PhotoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function(req, res) {
      console.log(req.file('image'));
      var newFilename = req.file('image')._files[0].stream.filename;
      var pro = req.body;
    var a=    req.file('image') // this is the name of the file in your multipart form
          .upload({
            
            // optional
          
           dirname: 'C:\\Sails\\Events\\src\\assets',
           saveAs: newFilename,
          }, async function(err, uploads) {
            console.log(uploads[0]);
            // try to always handle errors
            if (err) { return res.serverError(err) }
            // uploads is an array of files uploaded 
            // so remember to expect an array object
            if (uploads.length === 0) { return res.badRequest('No file was uploaded') }
            // if file was uploaded create a new registry
            // at this point the file is phisicaly available in the hard drive
            console.log('uploads[0].fd' || uploads[0].fd);
            console.log('pro.category : ' + pro.category);
      var newUserRecord  = await Photo.create(Object.assign({
        
        userid: req.token.id,
              path: './assets/'+newFilename,
              filename: uploads[0].filename,
             category: pro.category,
             }/* , sails.config.custom.verifyEmailAddresses? {
               emailProofToken: await sails.helpers.strings.random('url-friendly'),
               emailProofTokenExpiresAt: Date.now() + sails.config.custom.emailProofTokenTTL,
               emailStatus: 'unconfirmed'*/
             )).fetch()
              
              
            
              // if it was successful return the registry in the response
              return res.json(newUserRecord)
            
          })
      },
      findPhotos: async function (req, res) {
        //var profile = req.body;
        /* await Photo
        .find(profile)
          .exec((err, file) => {
            if (err) { return res.serverError(err) }
            if (!file) { return res.notFound() } */
            // we use the res.download function to download the file 
            /* // and send a ok response
              res.download(file.path, async function (err) {
              if (err) {
                return res.serverError(err)a
              } else {
                console.log('uploads[0].fd'||file.path);
                return res.json(file);
              }
          }) */
       

        var profile = req.body;
        Photo.find(profile).exec(function (err, record) {
                if (err) { return res.serverError(err); }
    
                  //sails.log('Finn\'s id is:', id,name);
                  return res.json(record);
                  });
                },


}
