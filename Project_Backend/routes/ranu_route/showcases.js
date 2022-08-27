const router = require("express").Router();
const res = require("express/lib/response");
let showcase = require("../../models/ranu_model/showcase");






router.route("/add").post((req,res)=>{
    
    const drugid = req.body.drugid;
    const drugname = req.body.drugname;
    const quantity =Number(req.body.quantity);
    const EXD = req.body.EXD;
   
    const newshowcase = new showcase({

        drugid,
        drugname,
        quantity,
        EXD
    })

    newshowcase.save().then(()=>{
        res.json("Drug Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.get("/view",(req,res)=>{
    showcase.find().exec((err,showcases)=>{
        if(err){
            return res.status(400).json({
              error:err  
            });
         }
         return res.status(200).json({
             success:true,
             existingshowcases:showcases
         });
    });
});



router.get("/view/:id",(req,res)=>{
    showcase.findById(req.params.id, function (err, user) {
        if(err){
                return res.status(400).json({
                  error:err
                });
        }
       return res.status(200).json({
           success:true,
           showcases:user
       });
    });
});



/*router.route("/view").get((req,res)=>{

    showcase.find().then((drug)=>{
        res.json(drug)
    }).catch((err)=>{
        console.log(err)
    })

})*/



router.route("/update/:id").put(async(req,res)=>{
    let drugId = req.params.id;
    const {drugname, quantity, EXD}= req.body;

    const updateshowcase ={
        drugname,
        quantity,
        EXD
    }

    const update = await showcase.findByIdAndUpdate(drugId, updateshowcase)
    .then(()=>{
        res.status(200).send({status: "Showcase Updates"})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with Updating Data"});
    })
})
   /* router.route("/delete/:id").delete(async(req,res)=>{
        let drugId = req.params.id;

        await showcase.findByIdAndDelete(drugId)
            .then(()=>{
                res.status(200).send({status:"Drug Deleted"})
            }).catch((err)=>{
                console.log(err.message);
                res.status(500).send({status:"Error with deleting user", error:err.message});
                
            })
    })*/

    //Delete from System

router.delete('/post/delete/:id', (req,res)=>{
    showcase.findByIdAndRemove(req.params.id).exec((err,deletedDrug)=>{

        if(err) return res.status(400).json({
            message: "Delete Unsuccessful", err
        });

        return res.json ({
            message: "Delete Successful", deletedDrug
        });
    });
});



module.exports = router;