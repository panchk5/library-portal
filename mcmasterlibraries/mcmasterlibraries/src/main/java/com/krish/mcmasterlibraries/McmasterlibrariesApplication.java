package com.krish.mcmasterlibraries;

import java.util.HashMap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.krish.mcmasterlibraries.scraper;

@SpringBootApplication
@RestController
public class McmasterlibrariesApplication {
	private scraper scraperClient = new scraper();
	public static void main(String[] args) {
		SpringApplication.run(McmasterlibrariesApplication.class, args);
	}

	@GetMapping("/")
	public HashMap<String, Integer> librarycaps() {
		scraperClient.scrapelibrarycapacity();
		HashMap<String, Integer> capacity = scraperClient.getLibraryCapacity();
		return capacity;
	}
	@GetMapping("/hours")
	public HashMap<String, String> getMethodName() {
		HashMap<String, String> hours = scraperClient.getLibraryHours();
		return hours;
	}
	

}
