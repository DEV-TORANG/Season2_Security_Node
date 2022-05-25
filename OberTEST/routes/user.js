var express = require('express');
var router = express.Router();

// 최초 로그인 시 토큰 발급
exports.userLogin = (req, res) =>{
  const userData = req.authData;
  
  if(userData.status === 200){
    res.json(userData.jwt)
  }
  else{
    res.send('ERROR')
  }
}

module.exports = router;
