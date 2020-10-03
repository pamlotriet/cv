//const fetch = require('node-fetch');

fetch('https://api.currentsapi.services/v1/search?keywords=programming&language=en&apiKey=SQn03--gxRLHAcnMZmhhKWO4TTM4cDZt8nDPLw0s3Li9IZnJ')
.then((res)=> res.json())
.then((data)=> {
    console.log(data);
    console.log(data.news[0].title);

    let news = ''

    for(let i =0; i<10;i++)
    {
        news+=
        `
            <div class = 'spacing'>
                <a href"${data.news[i].url}" target = "blank">${data.news[i].title} </a>
            </div>
        `;
    }

    document.getElementById('interests-page').innerHTML = news;
});
