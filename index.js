import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import bodyParser from "body-parser";

const app = express();
const port = 3000;

// app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => { 
  const today= new Date();
  const day=today.getDay();
 

  //console.log(day);

  let type= "a weekday";
  let adv="it's time to work hard";

  if (day===0 || day===6){
    type="the weekend";
    adv="it's time to rest"
  }
  res.render("index.ejs",{
    dayType: type,
    advice: adv
  });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
