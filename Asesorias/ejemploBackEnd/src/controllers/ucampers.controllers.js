const getDataUcamp = (req,res)=>{
    res.status(200).json({
        "msg":"Bienvenido a la API de Ucamp 1"
    })
}

const getDataUcamp2 = (req,res)=>{
    res.status(200).json({
        "msg":"Bienvenido a la API de Ucamp 2"
    })
}

const getDataUcamp3 = (req,res)=>{
    res.status(200).json({
        "msg":"Bienvenido a la API de Ucamp 3"
    })
}

module.exports = {
    getDataUcamp, 
    getDataUcamp2, 
    getDataUcamp3
}