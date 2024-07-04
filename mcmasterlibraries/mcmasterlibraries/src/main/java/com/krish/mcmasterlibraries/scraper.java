package com.krish.mcmasterlibraries;


import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.logging.Logger;

import javax.swing.text.html.parser.Element;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;





public class scraper {
    private HashMap<String,Integer> libraryCapacity;
    private HashMap<String,String> libraryHours;
    private ArrayList<String> closedLibrary;
    private static final Logger logger = Logger.getLogger(scraper.class.getName());
    private Document document;
    
    private WebDriver driver;
    
    public scraper(){
        ChromeOptions opt = new ChromeOptions();
        opt.addArguments("--headless=new");
        driver = new ChromeDriver(opt);
        libraryCapacity = new HashMap<>();
        libraryHours = new HashMap<>();
        scrapelibrarycapacity();
        scrapeHealthLibraryHours();
        driver.close();
        driver.quit();
    }
    public void scrapelibrarycapacity(){
        // Log a message
        logger.info("Scraping data...");
        
        try {
            document = Jsoup.connect("https://library.mcmaster.ca/php/occupancy-spaces.php").get();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        logger.info(document.title());

        Elements info = document.getElementsByClass("card card-shadow p-3");

        for (org.jsoup.nodes.Element library : info){
                String libraryTitle = library.select("h4").text();
                if (libraryTitle.equals("")){
                    libraryTitle = library.select("h3").text();
                }
                Integer capacity = Integer.valueOf(library.select("strong").text().split("%")[0]);
                libraryCapacity.put(libraryTitle, capacity);
        }       
    }

    public void scrapeHealthLibraryHours(){
        try {
            
            driver.get("https://hsl.mcmaster.ca/about-us/contact/hours/");
            String page = driver.getPageSource();
    
            Document healthLibrary = Jsoup.parse(page);

            Elements hours = healthLibrary.getElementsByClass("s-lc-whw-today");
            for (org.jsoup.nodes.Element hour : hours){
                String time = hour.select("span").text();
                libraryHours.put("Health Science", time);
            }
           
        } catch (Exception e) {
   
            e.printStackTrace();
        }
        
    }

    public void scrapeLibraryHours(){
        try {
            
            driver.get("https://hsl.mcmaster.ca/about-us/contact/hours/");
            String page = driver.getPageSource();
    
            Document healthLibrary = Jsoup.parse(page);

            Elements hours = healthLibrary.getElementsByClass("s-lc-whw-today");
            for (org.jsoup.nodes.Element hour : hours){
                String time = hour.select("span").text();
                libraryHours.put("Health Science", time);
            }
    
        } catch (Exception e) {
   
            e.printStackTrace();
        }
    }

    public HashMap<String, Integer> getLibraryCapacity(){
        return libraryCapacity;
    }

    public HashMap<String, String> getLibraryHours(){
        return libraryHours;
    }

}
