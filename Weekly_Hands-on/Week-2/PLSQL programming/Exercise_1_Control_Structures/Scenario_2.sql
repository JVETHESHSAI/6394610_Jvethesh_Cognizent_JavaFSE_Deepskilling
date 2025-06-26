-- Enable DBMS output
SET SERVEROUTPUT ON;

BEGIN
   -- Loop through all customers with balance > 10000
   FOR cust IN (
      SELECT CustomerID, Name 
      FROM Customers
      WHERE Balance > 10000
   ) LOOP

      -- Update the VIP flag
      UPDATE Customers
      SET IsVIP = 'TRUE'
      WHERE CustomerID = cust.CustomerID;

      -- Show output
      DBMS_OUTPUT.PUT_LINE(cust.Name || ' is promoted to VIP.');
   END LOOP;

   COMMIT;
END;
/
