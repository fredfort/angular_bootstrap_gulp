exports.config = {
    dev: {
        getConf: function(proxy, proxyOptions){
            return {
                ui: {
                    port: 3003
                },
                port: 3000,
                server: {
                    baseDir: 'app',
                    middleware: [proxy(proxyOptions)]
                },
                open: false
            }
        },
        stubConf: {
            ui: false,
            port: 3005,
            server: {
                baseDir: 'resources/api',
                middleware: function (req, res, next) {
                    console.log(req,res)
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    next();
                }
            },
            open: false,
            directory: true
        }
    }
};
