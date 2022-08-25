const imageSearch = require('image-search-google');
const client = new imageSearch('03eee2029b5034fec', 'AIzaSyCY6JvrZabYSC-JtD_dEhIMXH_XdFAnwWs');
exports.search = (query) => {
    client.search(query, options)
        .then(images => {
            return images;
            /*
            [{
                'url': item.link,
                'thumbnail':item.image.thumbnailLink,
                'snippet':item.title,
                'context': item.image.contextLink
            }]
             */
            // var urls = images.map((e) => e.url).toString().replace(/,/g, '\n');
            // txtcreator(query, urls);
        })
        .catch(error => console.log(error));
}