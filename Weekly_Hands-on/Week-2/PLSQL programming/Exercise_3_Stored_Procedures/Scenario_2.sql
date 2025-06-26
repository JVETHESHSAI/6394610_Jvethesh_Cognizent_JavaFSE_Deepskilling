SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    dept_name IN VARCHAR2,
    bonus_percent IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * bonus_percent / 100)
    WHERE Department = dept_name;

    DBMS_OUTPUT.PUT_LINE('Bonus applied to employees in ' || dept_name || ' department.');
    COMMIT;
END;
/
EXEC UpdateEmployeeBonus('Sales', 10);
