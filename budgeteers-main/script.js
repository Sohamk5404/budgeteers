function toggleSettingsMenu() {
    const menu = document.getElementById('settings-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    updateBalance();
}

function switchAccount() {
    alert("Switching accounts...");
}

document.getElementById('transaction-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (description && !isNaN(amount)) {
        addTransaction(description, amount);
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    }
});

function addTransaction(description, amount) {
    const transactionList = document.getElementById('transaction-list');
    const li = document.createElement('li');
    li.classList.add(amount > 0 ? 'plus' : 'minus');
    li.innerHTML = `
        ${description} <span>${amount > 0 ? '+' : ''}${amount.toFixed(2)}</span>
        <button class="delete-btn" onclick="removeTransaction(this)">x</button>
    `;
    transactionList.appendChild(li);
    updateBalance();
}

function removeTransaction(button) {
    button.parentElement.remove();
    updateBalance();
}

function updateBalance() {
    const transactions = Array.from(document.getElementById('transaction-list').children);
    let balance = 0;
    let income = 0;
    let expense = 0;

    transactions.forEach(transaction => {
        const amount = parseFloat(transaction.querySelector('span').textContent);
        if (amount > 0) {
            income += amount;
        } else {
            expense += amount;
        }
        balance += amount;
    });

    document.getElementById('balance').textContent = `$${balance.toFixed(2)}`;
    document.getElementById('income-amount').textContent = `$${income.toFixed(2)}`;
    document.getElementById('expense-amount').textContent = `$${Math.abs(expense).toFixed(2)}`;
}
