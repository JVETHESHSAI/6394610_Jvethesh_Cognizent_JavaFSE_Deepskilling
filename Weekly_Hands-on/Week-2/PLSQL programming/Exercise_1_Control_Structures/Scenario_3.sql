SET SERVEROUTPUT ON;

DECLARE
   CURSOR due_loans_cursor IS
      SELECT LoanID, CustomerID, DueDate
      FROM Loans
      WHERE DueDate <= SYSDATE + 30;

   customer_name Customers.Name%TYPE;

BEGIN
   FOR loan IN due_loans_cursor LOOP
      SELECT Name INTO customer_name
      FROM Customers
      WHERE CustomerID = loan.CustomerID;

      DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan.LoanID || 
                           ' is due for ' || customer_name || 
                           ' on ' || TO_CHAR(loan.DueDate, 'DD-MON-YYYY'));
   END LOOP;
END;
/
