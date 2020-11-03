const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID});
const express = require('express')
const router = express.Router()


router.get('/', (req, res)=>{



    const data = {

    site_name       : "My Portfolio",
    hero: {
        greeting:  "Welcome",
        introduction: "My name is Pawan Dhull. I am going to be a full stack developer",
        imgBackground: "https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-blue-gradient-ink-watercolor-background-colorbluelight-bluedark-blueblue-image_85975.jpg"
    },
    img_logo_nav: "https://lh3.googleusercontent.com/zkT61J6tqoftn8dPWtOXAyZ6_sfAic_4w9OUx29VmXxqtYaC4obD_rdcpGH1AHkusY_GcQSXL7Zqb6qiYnWpLeDi7Q",

    header_nav: {
        nav1: {
            text: "Project",
            show_or_hide: true
        },
        nav2: {
            text: "Service",
            show_or_hide: true
        },
        nav3: {
            text: "Blog",
            show_or_hide: true
        },
        nav4: {
            text: "Contact",
            show_or_hide: true
        }
    },
    imageProfile    : 'https://blogs.forbes.com/olliebarder/files/2019/03/one_punch_man_s2_new.jpg',
    languages       : [
                        {name:"javascrip" , years:5},
                        {name:"Swift"     , years:5},
                        {name:"Python"    , years:5},
                        {name:"Node JS"   , years:5},
                    ]
    
}

    res.render('landing',data);

})



module.exports = router