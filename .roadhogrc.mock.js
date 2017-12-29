//接口类似于http://expressjs.com/en/api.html
export default {
  'POST /api/login': (req,res)=>{
    return res.json({user_token:'ImUserToken'})
    // res.status(500).send('kkkkkk');
  },
};
