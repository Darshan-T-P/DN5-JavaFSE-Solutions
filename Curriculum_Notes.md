# Curriculum Notes

## Week 1 — SOLID Principles, Design Patterns & Data Structures

### SOLID Principles & Dependency Injection
- Single Responsibility Principle (SRP)
- Interface Segregation Principle (ISP)
- Open/Closed Principle (OCP)
- Liskov Substitution Principle (LSP)
- Dependency Inversion Principle (DIP)
- Dependency Injection (DI)

### Design Patterns
| Pattern | Exercise |
|---|---|
| **Singleton** | Logger class with private constructor and `getInstance()` |
| **Factory Method** | Document / DocumentFactory hierarchy (Word, PDF, Excel) |
| **Builder** | Computer object with fluent builder API |
| **Strategy** | PaymentStrategy interface with CreditCard / PayPal implementations |

Also covered in notes: Abstract Factory, Adapter, Facade, Observer, Constructor Injection.

### Data Structures & Algorithms (`DSA/`)
- **Linear Search** — sequential search implementation
- **Binary Search** — efficient search on sorted arrays
- **Singly Linked List** — insert, delete, search, display operations
- **Financial Forecasting** — recursive and iterative future value calculation

---

## Week 2 — JUnit, Mockito, Spring Data JPA & PL/SQL

### JUnit 5 (`JUnit/JUnitExercises/`)
- Calculator class (add, subtract, multiply, divide, square, isEven)
- Test lifecycle hooks: `@BeforeEach`, `@AfterEach`, `@BeforeAll`, `@AfterAll`
- `@ParameterizedTest` with `@ValueSource`
- Exception testing with `assertThrows`
- Timeout testing with `assertTimeout`
- Test suites with `@Suite` / `@SelectClasses`

### Mocking & Stubbing (`Mocking and Stubbing/mocking/`)
- Mockito-based testing of `MyService` depending on `ExternalApi`
- `mock()`, `when().thenReturn()`, `assertEquals`

### Spring Data JPA / ORM (`Spring Data JPA - ORM Example/`)
- Spring Boot application (`OrmLearnApplication`)
- JPA `@Entity` (`Country`), Spring Data `JpaRepository` (`CountryRepository`)
- `@Service` layer with `@Autowired`, `@Transactional`, `findAll()`

### PL/SQL (`PL/SQL/`)
- Schema creation (Customers, Accounts, Loans, Transactions, Employees)
- **Control Structures** — cursor `FOR` loop with `IF` for loan interest discounts
- **Error Handling** — `SafeTransferFunds`, `UpdateSalary` with `EXCEPTION`, `ROLLBACK`
- **Stored Procedures** — `ProcessMonthlyInterest`, `UpdateEmployeeBonus`, `TransferFunds`
