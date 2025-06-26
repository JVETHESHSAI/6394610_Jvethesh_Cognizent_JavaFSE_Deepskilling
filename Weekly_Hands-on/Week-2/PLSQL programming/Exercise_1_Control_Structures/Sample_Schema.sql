-- Drop the table if it already exists
BEGIN
   EXECUTE IMMEDIATE 'DROP TABLE Customers';
EXCEPTION
   WHEN OTHERS THEN
      IF SQLCODE != -942 THEN
         RAISE;
      END IF;
END;
/

-- Create a new Customers table
CREATE TABLE Customers (
   CustomerID   NUMBER PRIMARY KEY,
   Name         VARCHAR2(50),
   Age          NUMBER,
   Balance      NUMBER,
   IsVIP        VARCHAR2(5) DEFAULT 'FALSE'
);

-- Insert sample data
INSERT INTO Customers VALUES (1, 'Jvethesh', 25, 12000, 'FALSE');
INSERT INTO Customers VALUES (2, 'Anusha', 33, 9800, 'FALSE');
INSERT INTO Customers VALUES (3, 'Kiran', 45, 10500, 'FALSE');
INSERT INTO Customers VALUES (4, 'Nisha', 60, 8700, 'FALSE');
INSERT INTO Customers VALUES (5, 'Ravi', 40, 15000, 'FALSE');

-- Save the changes
COMMIT;
