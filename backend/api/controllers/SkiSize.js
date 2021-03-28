export function Test(req,res,next) {
    res.json({msg: 'helu'})
}

export function CalculateSize(req, res, next) {
    const { age, height, type} = req.body;
    const heightToNr = parseInt(height)
    if(type === 'C'){
        if(age === 0){
            res.status(200).send({length: heightToNr});
        }else if(age === 1 || age === 2 ){
            res.status(200).send({length: `${heightToNr+20}`})
        }else if( heightToNr > 187){
            res.status(200).send({length: 'max length for classical skis are 207'})
        }
    }else{
        if(age === 0){
            res.status(200).send({length: heightToNr});
        }else if(age === 1 || age === 2 ){
            res.status(200).send({length: `${heightToNr +10}-${heightToNr+20}`})
        }
    }
   
} 