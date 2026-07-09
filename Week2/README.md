# Week 2 — JUnit, Mockito, Spring Data JPA & PL/SQL

## JUnit 5 (`JUnit/JUnitExercises/`)
- Calculator class (add, subtract, multiply, divide, square, isEven)
- Test lifecycle hooks: `@BeforeEach`, `@AfterEach`, `@BeforeAll`, `@AfterAll`
- `@ParameterizedTest` with `@ValueSource`
- Exception testing with `assertThrows`
- Timeout testing with `assertTimeout`
- Test suites with `@Suite` / `@SelectClasses`

## Mocking & Stubbing (`Mocking and Stubbing/mocking/`)
- Mockito-based testing of `MyService` depending on `ExternalApi`
- `mock()`, `when().thenReturn()`, `assertEquals`

## Spring Data JPA / ORM (`Spring Data JPA - ORM Example/`)
- Spring Boot application (`OrmLearnApplication`)
- JPA `@Entity` (`Country`), Spring Data `JpaRepository` (`CountryRepository`)
- `@Service` layer with `@Autowired`, `@Transactional`, `findAll()`

## PL/SQL (`PL/SQL/`)
- Schema creation (Customers, Accounts, Loans, Transactions, Employees)
- **Control Structures** — cursor `FOR` loop with `IF` for loan interest discounts
- **Error Handling** — `SafeTransferFunds`, `UpdateSalary` with `EXCEPTION`, `ROLLBACK`
- **Stored Procedures** — `ProcessMonthlyInterest`, `UpdateEmployeeBonus`, `TransferFunds`
