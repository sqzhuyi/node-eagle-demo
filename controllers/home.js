module.exports = {
    async index(scope){
        scope.content = 'home body';
    },
    async about(scope){
        var data = {
            'company': 'Google',
            'contact': '400-110-110'
        };
        scope.content = data[this.params.id];
        if(!scope.content){
            this.status = 404;
        }
    },
    async siteMap(scope){

    }
};