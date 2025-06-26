-- Customers table (accounts)
CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    Balance NUMBER(10,2),
    AccountType VARCHAR2(20)
);

-- Employees table
CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Department VARCHAR2(50),
    Salary NUMBER(10,2)
);
-- Clear any existing data
DELETE FROM Accounts;

-- Insert accounts
INSERT INTO Accounts (AccountID, CustomerID, Balance, AccountType) VALUES (101, 1, 10000, 'Savings');
INSERT INTO Accounts (AccountID, CustomerID, Balance, AccountType) VALUES (102, 2, 5000, 'Savings');
INSERT INTO Accounts (AccountID, CustomerID, Balance, AccountType) VALUES (103, 3, 3000, 'Current');
INSERT INTO Accounts (AccountID, CustomerID, Balance, AccountType) VALUES (104, 4, 8000, 'Savings');

-- Clear any existing data
DELETE FROM Employees;

-- Insert employees
INSERT INTO Employees (EmployeeID, Name, Department, Salary) VALUES (201, 'Arun', 'Sales', 30000);
INSERT INTO Employees (EmployeeID, Name, Department, Salary) VALUES (202, 'Divya', 'IT', 40000);
INSERT INTO Employees (EmployeeID, Name, Department, Salary) VALUES (203, 'Ravi', 'Sales', 35000);
INSERT INTO Employees (EmployeeID, Name, Department, Salary) VALUES (204, 'Jvethesh', 'HR', 25000);
COMMIT;

SELECT * FROM Accounts;
SELECT * FROM Employees;
