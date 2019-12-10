/* USER CONTROLLER FILE */
const crypto = require('crypto');
const fetch = require('node-fetch');


class ApiController {
  /* List all Users */
  async getId(req, res) {
    const preHash = process.env.API_TS+
    process.env.API_PRIVATE_KEY+
    process.env.API_PUBLIC_KEY;

    const hash = crypto.createHash('md5').update(preHash).digest("hex");

    const url_ID = process.env.API_BASE_URL +
                process.env.API_CHARACTER_URL +
                `?limit=100`+
                `&ts=${process.env.API_TS}`+
                `&apikey=${process.env.API_PUBLIC_KEY}` +
                `&hash=${hash}`               ;

    const character = await fetch(url_ID)
            .then(res => res.json());
    const {id} = character.data.results[0];

    const url_Comics = process.env.API_BASE_URL +
                       process.env.API_CHARACTER_URL+`/${id}/comics`+                                               
                        `?ts=${process.env.API_TS}`+
                        `&apikey=${process.env.API_PUBLIC_KEY}` +
                        `&hash=${hash}`                        ;
    
    const comic = await fetch(url_Comics)
            .then(res => res.json());        
  
    res.json(
      comic
    )
  }

  async getComics(req, res) {
    const {search} = req.body;

    const preHash = process.env.API_TS+
    process.env.API_PRIVATE_KEY+
    process.env.API_PUBLIC_KEY;

    const hash = crypto.createHash('md5').update(preHash).digest("hex");

    const url_ID = process.env.API_BASE_URL +
                process.env.API_CHARACTER_URL +
                `?name=${search}`+                
                `&ts=${process.env.API_TS}`+
                `&apikey=${process.env.API_PUBLIC_KEY}` +
                `&hash=${hash}`               ;

    const character = await fetch(url_ID)
            .then(res => res.json());
    const {id} = character.data.results[0];
    console.log(id);
    
    const url = process.env.API_BASE_URL +
                process.env.API_CHARACTER_URL+`/${id}/comics`+
                `?ts=${process.env.API_TS}`+
                `&limit=100`+
                `&apikey=${process.env.API_PUBLIC_KEY}` +
                `&hash=${hash}`;

    const comic = await fetch(url)
            .then(res => res.json());

    const{data}=comic
    res.json({
      data
    })
  }
}

export default new ApiController();
