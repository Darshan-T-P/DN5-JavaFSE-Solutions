package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        // Load the configured system schema 
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Request core target bean engine
        BookService bookService = (BookService) context.getBean("bookService");

        // Run application processing tasks
        bookService.processLibraryData();
    }
}
