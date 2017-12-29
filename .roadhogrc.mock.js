//接口类似于http://expressjs.com/en/api.html
export default {
  'POST /api/login': (req,res)=>{
    console.log(res)
    // return res.end(JSON.stringify({user_token:'ImUserToken'}))
    res.status(500).send('kkkkkk');
  },
};
