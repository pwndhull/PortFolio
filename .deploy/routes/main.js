const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID});
const express = require('express')
const router = express.Router()


router.get('/', (req, res)=>{

    // const data = {}

    res.render('landing',data);

})



module.exports = router