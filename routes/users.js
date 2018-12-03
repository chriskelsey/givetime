const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const volunteerController = require('../controllers/volunteerController');
const authController = require('../controllers/authController');
const auth = require('./auth');
//const Users = mongoose.model('Users');


router.get('/users/auth',authController.auth,(req,res)=>{
  res.status(200).json({
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    history: req.user.history
  })

});


router.post('/users/register',(req,res)=>{
  const user = new User(req.body);

  user.save((err,doc)=>{
    if(err) return res.json({success:false,err});
    res.status(200).json({
      success: true
     
    })

  })
});

/*app.post('/api/users/login', (req,res)=>{

  User.findOne({'email': req.body.email},(err,user) =>{
    if(!user) return res.json({loginSuccess:false,message:'Auth failed, email not found'});

    user.comparePassword(req.body.password,(err,isMatch)=>{
      if(!isMatch) return res.json({loginSuccess:false, message:'Wrong password'});

      user.generateToken((err,user)=>{
        if(err) return res.status(400).send(err);
        res.cookie('w_auth',user.token).status(200).json({
          loginSuccess: true
        })

      })

    })


  })

})


app.get('/api/users/logout',auth,(req,res)=>{
  User.findOneAndUpdate(
    { _id:req.user._id },
    { token: '' },
    (err,doc)=>{
      if(err) return res.json({success:false,err});
      return res.status(200).send({
        success: true
      })

      }
   
  )

});

/* OLD ROUTES - SAVING IN CASE I NEED THEM */
// router.post('/register', auth.optional, (req, res, next) => {
//   console.log(res)
// });
//POST new user route (optional, everyone has access)
// router.post('/register',
//   passport.authenticate('local', 
//   { successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true })
// );

// router.post('/signin',
//   passport.authenticate('local', { successRedirect: '/',
//   failureRedirect: '/signin',
//   failureFlash: true })
// );

// router.post('/signin', passport.authenticate('local', { 
//   // comment out line 27 to see the response object from the validation. 
//   successRedirect: 'http://localhost:3000/eventfeed',
//   failureRedirect: '/?error=LoginError', failureFlash: true }), (req, res, next) => {
//   // console.log('/login handler', req.session);
//   // req.session.save((err) => {
//   //     if (err) {
//   //         return next(err);
//   //     }

//   //     res.status(200).send('OK');
//   // });
//   console.log("Hey this is your request ", req);
//   localStorage.setItem('userData', req.user);
//   console.log(localStorage.getItem('userData'));
//   res.send(req.user);
  

// });

/*router.post('/signin', 
  passport.authenticate('local', { failureRedirect: '/signin'}),
  function(req, res) {
  
    localStorage.setItem('userData', req.user);
    console.log(localStorage.getItem('userData'));

    res.json(req.user);

  }
);

router.post('/signin', function(req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) { 
      return res.send(400);
    }
    else {
      localStorage.setItem('userData', req.user);
      console.log(localStorage.getItem('userData'));
      res.send(200);
    };
  })
})

router.get('/userdata', function(req, res) {
  var data = localStorage.getItem('userData');
  var clean1 = data.replace(/\r?\n|\r/g, "");
  var clean2 = clean1.replace("\\", "");
  var clean3 = clean2.substring(1, clean2.length - 1);
  var clean4 = clean3.replace(/\s/g, "").split(",");
  newObj = clean4.reduce((obj, str) => {
    var keyPair = str.split(":");
    console.log(keyPair[1]);
    Object.assign(obj, { [keyPair[0]]: keyPair[1].replace(/'/g, "") });
    return obj;
  }, {});
  console.log(newObj);
  res.send(newObj);
  console.log(newObj);
  console.log(typeof newObj);
});

router.post('/api/signin', function(req, res, next) {
  console.log("hi george");
});


// router.post('/signup', function(req, res, next) {
//   console.log(req.body.username);
// })


router
  .route("/signup")
  .post(volunteerController.create);

// router
//   .route("/users")
//   .get(volunteerController.findAll);

router.post('/', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  const finalUser = new Users(user);

  finalUser.setPassword(user.password);

  return finalUser.save()
    .then(() => res.json({ user: finalUser.toAuthJSON() }));
});

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
  const { body: { user }, session } = req;
  console.log(session);

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if(err) {
      return next(err);
    }

    if(passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ user: user.toAuthJSON() });
    }

    return status(400).info;
  })(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
  const { payload: { id } } = req;

  return Users.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
      }

      return res.json({ user: user.toAuthJSON() });
    });
});*/

module.exports = router;