
export default {
  'POST /api/login': (req,res)=>{
    res.status="success";
    return res.end(JSON.stringify({user_token:'ImUserToken'}))
  },
};
