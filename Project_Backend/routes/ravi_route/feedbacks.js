const router = require("express").Router();
let Feedback = require("../../models/ravi_model/Feedback");


router.route("/add").post((req,res)=>{

    const feedbackid = req.body.feedbackid;
    const name = req.body.name;
    const email = req.body.email;
    const date = req.body.date;
    const contactno = req.body.contactno;
    const feedbacktype = req.body.feedbacktype;
    const feedbackorinquiry = req.body.feedbackorinquiry;
    


    const newFeedback = new Feedback({

        
        feedbackid,
        name,
        email,
        date,
        contactno,
        feedbacktype,
        feedbackorinquiry
        
    })

    newFeedback.save().then(()=>{
        res.json("Feedback Added")
    }).catch((err)=>{
         console.log(err);
    })

})


router.get('/view',(req,res)=>{
    Feedback.find().exec((err,feedbacks)=>{
        if(err){
            return res.status(400).json({
                error:err

            });
        }
        return res.status(200).json({
            success:true,
            feeds:feedbacks
        

        });


    });
});





/*router.route("/view").get((req,res)=>{

    Feedback.find().then((feedbacks)=>{
        res.json(feedbacks)        
    }).catch((err)=>{
        console.log(err)
    })

})*/

//http//localhost:8080/feedback/update/feed001

// router.route("/update/:id").put(async(req,res) =>{
//     let userId = req.params.id;
//     const {name,feedbackid,email,date,contactno,feedbacktype,feedbackorinquiry} = req.body;

//     const updateFeedback = {
//         name,
//         feedbackid,
//         email,
//         date,
//         contactno,
//         feedbacktype,
//         feedbackorinquiry
        
//     }

//     const update = await Feedback.findByIdAndUpdate(userId,updateFeedback)
//     .then(() => {
//         res.status(200).send({status: "Feedback updated"})
//     }).catch((err) => {
//        console.log(err);
//        res.status(500).send({status: "Error with updating data", error: err.message});

//     })
    
    
// })

//http//localhost:8080/feedback/delete/feed001

router.route("/delete/:id").delete(async(req,res) => {
    let userId = req.params.id;

    await Feedback.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({status: "Feedback deleted"});
        }).catch((err) =>{
           console.log(err.message);
           res.status(500).send({status: "Error with delete feedback", error: err.message});
        })

        
})
  /*  router.route("/get/:id").get(async(req,res) => {
        let userId = req.params.id;
        const user = await Feedback.findById(userId)
            .then((feedback) => {
                res.status(200).send({status: "Feedback fetched", feedback})
            }).catch(() => {
                console.log(err.message);
                res.status(500).send({status: "Error with get user", error: err.message});
            })

    
    })*/

    router.get("/view/:id",(req,res)=>{
        let feedId = req.params.id;



        Feedback.findById(feedId,(err,feedbacks)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            feedbacks

        });
    });

});







router.route('/:id').get((req,res)=>{

    let id= req.params.id;

    Feedback.findById(id,(err,feedbacks)=>{
        if(err){
            return res.status(400).json({success:false,err});

        }
        return res.status(200).json({
            success:true,
            feedbacks
        });
    });
});





//active update
router.route('/update/:id').put((req,res)=>{

    Feedback.findByIdAndUpdate(
     req.params.id,{
          $set:req.body
      },
      (err,feedbacks)=>{
          if(err){
          return res.status(400).json({error:err});
          }
          return res.status(200).json({
              success: "Updated Successfully"
          });
      });
  });






module.exports = router;






