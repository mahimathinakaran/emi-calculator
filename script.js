function calculateEMI() {
    const principal = parseFloat(document.getElementById('loan-amount').value);
    const annualRate = parseFloat(document.getElementById('interest-rate').value);
    const tenureYears = parseFloat(document.getElementById('tenure').value);

    // Validate inputs
    if (isNaN(principal) || isNaN(annualRate) || isNaN(tenureYears) || principal <= 0 || annualRate <= 0 || tenureYears <= 0) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Convert annual rate to monthly rate and years to months
    const monthlyRate = (annualRate / 12) / 100;
    const tenureMonths = tenureYears * 12;

    // Calculate EMI using the formula
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);

    // Calculate total repayment and total interest
    const totalRepayment = emi * tenureMonths;
    const totalInterest = totalRepayment - principal;

    // Display the results with proper formatting
    document.getElementById('display-loan-amount').innerHTML = "₹" + principal.toLocaleString();
    document.getElementById('display-total-interest').innerHTML = "₹" + totalInterest.toFixed(2).toLocaleString();
    document.getElementById('display-emi').innerHTML = "₹" + emi.toFixed(2).toLocaleString();
    document.getElementById('display-total-repayment').innerHTML = "₹" + totalRepayment.toFixed(2).toLocaleString();
}