const path= require('path');
const htmlWeb=require('html-webpack-plugin')


module.exports ={
    mode:'development',
    entry:{
        app:"./src/index.js"
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'app.bundle.js'
    },
    plugins:[
        new htmlWeb({
            template:'./src/index.html'
        })
    ]
}