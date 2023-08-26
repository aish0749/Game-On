const express = require("express");
const puppeteer = require('puppeteer');
const dotenv=require('dotenv');
dotenv.config();

const router = express.Router();

router.get("/:gameName", async (req, res) => {

    const gameName = req.params.gameName;
    console.log(gameName);

    const gameDetails = await scrapeGameDetails(gameName);
    console.log(gameDetails);
    res.json({gameDetails,message:"Game detail fetched"});

  });
  async function scrapeGameDetails(gameName) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    // Construct the Steam URL based on the game name
    const searchUrl = `https://store.steampowered.com/search/?term=${encodeURIComponent(gameName)}`;
    await page.goto(searchUrl);
    
    // Wait for the game details to load
    await page.waitForSelector('.responsive_search_name_combined');
  
    // Get the first game result
    const gameDetails = await page.evaluate(() => {
      const titleElement = document.querySelector('.responsive_search_name_combined .title');
      const releaseDateElement = document.querySelector('.responsive_search_name_combined .search_released');
      const priceElement1 = document.querySelector('.responsive_search_name_combined .search_price');
      const priceElement2 = document.querySelector('.responsive_search_name_combined .discount_final_price');
      let price='';
      if(priceElement1)
      {
         price=priceElement1.innerText.trim();
      }
      if(priceElement2)
      {
        price=priceElement2.innerText.trim();
      }
    //   console.log(priceElement2.innerText.trim());
    //   console.log(priceElement1.innerText.trim());
        // const test="HI";
      const title = titleElement ? titleElement.innerText.trim() : '';
      const releaseDate = releaseDateElement ? releaseDateElement.innerText.trim() : '';
    //   const price = priceElement1 ? priceElement1.innerText.trim() : '';
    //  console.log(price); 
    
      return { title,releaseDate,price  };

    });
  
    
    await browser.close();
  
    return gameDetails;
  }
  

module.exports = router;