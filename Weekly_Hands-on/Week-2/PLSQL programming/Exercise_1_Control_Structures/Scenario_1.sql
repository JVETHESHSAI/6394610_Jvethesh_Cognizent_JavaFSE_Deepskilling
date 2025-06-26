SET SERVEROUTPUT ON;

DECLARE
   CURSOR customer_cursor IS
      SELECT CustomerID, Name, Age, LoanInterestRate
      FROM Customers;

BEGIN
   FOR cust IN customer_cursor LOOP
      IF cust.Age > 60 THEN
         UPDATE Customers
         SET LoanInterestRate = LoanInterestRate - 1
         WHERE CustomerID = cust.CustomerID;

         DBMS_OUTPUT.PUT_LINE('1% discount applied for ' || cust.Name);
      END IF;
   END LOOP;
END;
/
