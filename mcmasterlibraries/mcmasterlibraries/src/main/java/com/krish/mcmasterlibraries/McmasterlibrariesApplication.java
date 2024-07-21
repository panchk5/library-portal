package com.krish.mcmasterlibraries;

import java.util.HashMap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.krish.mcmasterlibraries.scraper;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class McmasterlibrariesApplication {
	private scraper scraperClient = new scraper();
	public static void main(String[] args) {
		SpringApplication.run(McmasterlibrariesApplication.class, args);
	}

	@GetMapping("/capacity")
	public HashMap<String, Integer> librarycaps() {
		scraperClient.scrapelibrarycapacity();
		HashMap<String, Integer> capacity = scraperClient.getLibraryCapacity();
		return capacity;
	}
	@GetMapping("/hours")
	public HashMap<String, String> libraryhours() {
		HashMap<String, String> hours = scraperClient.getLibraryHours();
		return hours;
	}
	

}
