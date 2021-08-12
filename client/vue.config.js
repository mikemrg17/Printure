module.exports = {
    devServer: {
        proxy: {
            /*'^/foo': {
                target: 'http://localhost:5000',
                ws: true,
                changeOrigin: true
            }*/
            '^/foo': { 
                target: 'http://localhost:5000', 
                changeOrigin: true, 
                secure:false, 
                logLevel: 'debug'
            }
        }
    }
}
