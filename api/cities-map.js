export default async function handler(request, res) {

    const cities = [
        {
            "image": "https://whyy.org/wp-content/uploads/2020/01/2018-03-15-e-lee-philadelphia-germantown-developer-emanuel-freeman-garbage.jpg",
            "title": "Philadelphia",
            "topLabel": "Worst City",
            "detail": "City Statistics",
            "opened": "false"
        },
        {
            "image": "https://whyy.org/wp-content/uploads/2020/01/2018-03-15-e-lee-philadelphia-germantown-developer-emanuel-freeman-garbage.jpg",
            "title": "Philadelphia",
            "topLabel": "Worst City",
            "detail": "City Statistics",
            "opened": "false"
        },
        {
            "image": "https://whyy.org/wp-content/uploads/2020/01/2018-03-15-e-lee-philadelphia-germantown-developer-emanuel-freeman-garbage.jpg",
            "title": "Philadelphia",
            "topLabel": "Worst City",
            "detail": "City Statistics",
            "opened": "false"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(cities);
  }