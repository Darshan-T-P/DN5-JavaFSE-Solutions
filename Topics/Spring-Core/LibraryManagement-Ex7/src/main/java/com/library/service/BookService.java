package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;
    private String serviceName;

    // Default Constructor
    public BookService() {}

    // 1. Constructor Injection Match
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("Constructor Injection: BookRepository assigned via Constructor.");
    }

    // 2. Setter Injection Match
    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
        System.out.println("Setter Injection: serviceName assigned value -> " + serviceName);
    }

    public void processLibraryData() {
        System.out.println("Running Business Profile: " + serviceName);
        bookRepository.executeTask();
    }
}
