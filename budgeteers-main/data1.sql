-- Create the database
CREATE DATABASE MoneyManagement;

-- Switch to the MoneyManagement database
USE MoneyManagement;

-- Create the accounts table for user data
CREATE TABLE accounts (
    account_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL, -- Store hashed passwords
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the finance_records table for financial transactions
CREATE TABLE finance_records (
    record_id INT AUTO_INCREMENT PRIMARY KEY,
    account_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL, -- Supports up to 2 decimal places for money
    record_type ENUM('income', 'expense') NOT NULL,
    description VARCHAR(255),
    record_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (account_id) REFERENCES accounts(account_id) ON DELETE CASCADE
);
