# Curriculum Notes & Topics Covered

This document outlines all the major topics, frameworks, and exercises covered in this Java Full Stack Engineering workspace.

## 1. Data Structures & Algorithms (`DSA`)
- **Linear Search**: Sequential search implementation.
- **Binary Search**: Efficient search on sorted arrays.
- **Singly Linked List**: Insert, delete, search, and display operations.
- **Financial Forecasting**: Recursive and iterative future value calculations.

## 2. Design Patterns (`Design-Patterns`)
- **Singleton**: Logger class with private constructor and `getInstance()`.
- **Factory Method**: Document / DocumentFactory hierarchy (Word, PDF, Excel).
- **Builder**: Computer object with fluent builder API.
- **Strategy**: PaymentStrategy interface with CreditCard / PayPal implementations.
- **Observer**: Implementing publisher/subscriber notification mechanisms.
- *Also covered*: Abstract Factory, Adapter, Facade, Constructor Injection.

## 3. Core Java & Database
- **Logging**: Setting up logging utilities and best practices in Java applications.
- **PL/SQL**: 
  - Schema creation (Customers, Accounts, Loans, Transactions).
  - Control Structures (cursor `FOR` loop, `IF` for interest discounts).
  - Error Handling (`SafeTransferFunds`, `UpdateSalary` with `EXCEPTION`, `ROLLBACK`).
  - Stored Procedures (`ProcessMonthlyInterest`, `UpdateEmployeeBonus`, `TransferFunds`).

## 4. Testing & Quality Assurance
- **JUnit 5**: 
  - Calculator class testing (add, subtract, multiply, divide).
  - Test lifecycle hooks (`@BeforeEach`, `@AfterEach`, `@BeforeAll`, `@AfterAll`).
  - `@ParameterizedTest` with `@ValueSource`.
  - Exception and Timeout testing (`assertThrows`, `assertTimeout`).
  - Test suites (`@Suite`, `@SelectClasses`).
- **Mockito (Mocking & Stubbing)**: 
  - Mockito-based testing of services depending on external APIs.
  - Using `mock()`, `when().thenReturn()`, and `assertEquals()`.

## 5. Spring Framework Ecosystem
- **Spring Core**:
  - Configuring Basic Spring Applications.
  - Implementing Inversion of Control (IoC).
  - Dependency Injection (Constructor and Setter Injection).
  - Library Management exercises.
- **Spring Data JPA & ORM**:
  - Spring Boot application initialization.
  - JPA `@Entity` and Spring Data `JpaRepository`.
  - `@Service` layer with `@Autowired`, `@Transactional`, and repository queries.
- **Spring REST**:
  - Building RESTful APIs with Spring Boot.
  - JWT (JSON Web Tokens) Authentication and Security (`Spring-jwt`).
  - Loading configurations (e.g., from XML).

## 6. Advanced Architecture & Frontend
- **Microservices**:
  - Developing and orchestrating multiple microservices.
  - Examples including `account` and `loan` microservices.
- **React (`React`)**:
  - 10 distinct React applications exploring frontend concepts.
  - Apps include: `blogapp`, `bloggerapp`, `cohortdetailsapp`, `cricketapp`, `eventexamplesapp`, `myfirstreact`, `officespacerentalapp`, `scorecalculatorapp`, `studentapp`, `ticketbookingapp`.

## 7. Version Control (`GIT`)
- **GIT**: Exercises (`Git_1` through `Git_5`) covering version control best practices, branching, merging, and collaboration.
