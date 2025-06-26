SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE TransferFunds (
    from_account IN NUMBER,
    to_account IN NUMBER,
    amount IN NUMBER
) IS
    insufficient_funds EXCEPTION;
    from_balance NUMBER;
BEGIN
    SELECT Balance INTO from_balance FROM Accounts WHERE AccountID = from_account;

    IF from_balance < amount THEN
        RAISE insufficient_funds;
    END IF;

    -- Deduct from sender
    UPDATE Accounts
    SET Balance = Balance - amount
    WHERE AccountID = from_account;

    -- Add to receiver
    UPDATE Accounts
    SET Balance = Balance + amount
    WHERE AccountID = to_account;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('₹' || amount || ' transferred from account ' || from_account || ' to account ' || to_account || '.');

EXCEPTION
    WHEN insufficient_funds THEN
        DBMS_OUTPUT.PUT_LINE('Error: Insufficient balance in account ' || from_account);
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Unexpected error: ' || SQLERRM);
        ROLLBACK;
END;
/
EXEC TransferFunds(101, 102, 500);
