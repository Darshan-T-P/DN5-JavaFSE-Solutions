package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class App {
    public static void main(String[] args) {
        // Load the IoC Container setup from XML
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Request the bean
        BookService bookService = (BookService) context.getBean("bookService");

        // Run test method
        bookService.addBook();
    }
}
