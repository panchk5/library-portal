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
// import io.github.bonigarcia.wdm.WebDriverManager;


public class scraper {
    private HashMap<String,Integer> libraryCapacity;
    private HashMap<String,String> libraryHours;
    private ArrayList<String> closedLibrary;
    private static final Logger logger = Logger.getLogger(scraper.class.getName());
    private Document document;
    private ChromeOptions options;
    private WebDriver driver;
    
    public scraper(){
        // WebDriverManager.chromedriver().setup();
        options = new ChromeOptions();
        options.addArguments("--headless=new");
        options.addArguments("--no-sandbox");
        options.addArguments("--ignore-ssl-errors=yes");
        options.addArguments("--ignore-certificate-errors");
        options.addArguments("--disable-dev-shm-usage");
        options.addArguments("--disable-gpu");
        options.addArguments("--remote-allow-origins=*");

        driver = new ChromeDriver(options);
        libraryCapacity = new HashMap<>();
        libraryHours = new HashMap<>();
        scrapelibrarycapacity();
        scrapeHealthLibraryHours();
        logger.info("adding library hours");
        scrapeLibraryHours();
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
            
            driver.get("https://library.mcmaster.ca/hours");
            String page = driver.getPageSource();
            
            Document library = Jsoup.parse(page);

            org.jsoup.nodes.Element[] hours = new org.jsoup.nodes.Element[5];

            org.jsoup.nodes.Element mills = library.getElementsByClass("s-lc-w-times s-lc-w-lid-6398 s-lc-w-location").first();
            hours[0] = mills;
            org.jsoup.nodes.Element lyons = library.getElementsByClass("s-lc-w-times s-lc-w-lid-6404 s-lc-w-department").first();
            hours[1] = lyons;
            org.jsoup.nodes.Element commons = library.getElementsByClass("s-lc-w-times s-lc-w-lid-6400 s-lc-w-department").first();
            hours[2] = commons;
            org.jsoup.nodes.Element thode = library.getElementsByClass("s-lc-w-times s-lc-w-lid-6395 s-lc-w-location").first();
            hours[3] = thode;
            org.jsoup.nodes.Element makerspace = library.getElementsByClass("s-lc-w-times s-lc-w-lid-6396 s-lc-w-department").first();
            hours[4] = makerspace;

            for (org.jsoup.nodes.Element hour : hours){
                libraryHours.put(hour.select("a").text(), hour.select("span").text());
            }
            
            
            
    
        } catch (Exception e) {
   
            e.printStackTrace();
        }
    }

    public HashMap<String, Integer> getLibraryCapacity(){
        return libraryCapacity;
    }

    public Integer[] getThodeCapacity(){
        return new Integer[]{libraryCapacity.get("Thode Library"), libraryCapacity.get("Thode 2nd Floor Study Space")};
    }

    
    public HashMap<String, String> getLibraryHours(){
        return libraryHours;
    }

}
