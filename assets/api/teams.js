export default async function handler(request, res) {

    const roster = [
        {
            "name": "JT Realmuto",
            "imageDescription": "NLCS Game 5: Phillies vs Padres",
            "stats": "Game Stats",
            "top": "ball go boom"
        },
        {
            "name": "Rhys Hoskins",
            "imageDescription": "NLCS Game 5: Phillies vs Padres",
            "stats": "Game Stats",
            "top": "ball go boom"
        },
        {
            "name": "Bryce Harper",
            "imageDescription": "NLCS Game 5: Phillies vs Padres",
            "stats": "Game Stats",
            "top": "ball go boom"
        }
        ,
        {
            "name": "Bryce Harper",
            "imageDescription": "NLCS Game 5: Phillies vs Padres",
            "stats": "Game Stats",
            "top": "ball go boom"
        }
        ,
        {
            "name": "Bryce Harper",
            "imageDescription": "NLCS Game 5: Phillies vs Padres",
            "stats": "Game Stats",
            "top": "ball go boom"
        }
        ,
        {
            "name": "Bryce Harper",
            "imageDescription": "NLCS Game 5: Phillies vs Padres",
            "stats": "Game Stats",
            "top": "ball go boom"
        }
        ,
        {
            "name": "Bryce Harper",
            "imageDescription": "NLCS Game 5: Phillies vs Padres",
            "stats": "Game Stats",
            "top": "ball go boom"
        }
        ,
        {
            "name": "Bryce Harper",
            "imageDescription": "NLCS Game 5: Phillies vs Padres",
            "stats": "Game Stats",
            "top": "ball go boom"
        }
        ,
        {
            "name": "Bryce Harper",
            "imageDescription": "NLCS Game 5: Phillies vs Padres",
            "stats": "Game Stats",
            "top": "ball go boom"
        }
        ,
        {
            "name": "Bryce Harper",
            "imageDescription": "NLCS Game 5: Phillies vs Padres",
            "stats": "Game Stats",
            "top": "ball go boom"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(roster);
  }