module.exports = {
    async index(scope){
        scope.content = 'home body';
    },
    async about(scope){
        let ctx = this;
        var data = {
            'company': 'Google',
            'contact': '400-110-110'
        };
        scope.content = data[ctx.get('id')];
        if(!scope.content){
            ctx.status = 404;
        }
    },
    async siteMap(scope){
        await this.render('map');
    }
};