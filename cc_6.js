//Task 1 - Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;  
    console.log(`Total Profit: $${profit}`);
    return profit;
}

calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);


// Task 2 - Function Expression
const calculateSalesTax = function(amount, taxRate) {
    let salesTax = amount * taxRate;
    console.log(`Sales Tax: $${salesTax}`);
    return salesTax;
};

calculateSalesTax(100, 0.07);
calculateSalesTax(500, 0.1);


//Task 3 - Arrow Function
const calculateBonus = (salary, performanceRating) => {
    let bonus;
    if (performanceRating === "Excellent") {
        bonus = salary * 0.20;
    } else if (performanceRating === "Good") {
        bonus = salary * 0.10;
    } else if (performanceRating === "Average") {
        bonus = salary * 0.05;
    } else {
        bonus = 0;
    }
    console.log(`Bonus: $${bonus}`);
    return bonus;
};

calculateBonus(5000, "Excellent");
calculateBonus(7000, "Good");


//Task 4 - Parameters and Arguments
function calculateSubscriptionCost(plan, months, discount = 0) {
    let pricePerMonth;
    switch (plan) {
        case "Basic":
            pricePerMonth = 10;
            break;
        case "Premium":
            pricePerMonth = 20;
            break;
        case "Enterprise":
            pricePerMonth = 50;
            break;
        default:
            pricePerMonth = 0;
    }

    let totalCost = pricePerMonth * months;
    let discountedCost = totalCost - (totalCost * (discount / 100));

    console.log(`Total Cost: $${discountedCost}`);
    return discountedCost;
}

calculateSubscriptionCost("Basic", 6, 10);
calculateSubscriptionCost("Premium", 12, 0);


//Task 5 - Returning Values
function convertCurrency(amount, exchangeRate) {
    let convertedAmount = amount * exchangeRate;
    console.log(`Converted Amount: $${convertedAmount.toFixed(2)}`);
    return convertedAmount;
}

convertCurrency(100, 1.1);
convertCurrency(250, 0.85);


//Task 6 - Higher-Order Functions
let orders = [200, 600, 1200, 450, 800];
function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
}
let discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);

console.log(discountedOrders);


//Task 7 - Closures
function createExpenseTracker() {
    let totalExpenses = 0;

    return function(expense) {
        totalExpenses += expense;
        return `Total Expenses: $${totalExpenses}`;
    };
}
let tracker = createExpenseTracker();
console.log(tracker(200));
console.log(tracker(150));


//Task 8 - Recursion in JavaScript
function calculateYearsToPromotion(employeeLevel) {
    if (employeeLevel >= 10) {
        return 0;
    }
    return 2 + calculateYearsToPromotion(employeeLevel + 1);
}
console.log("Years to Level 10:", calculateYearsToPromotion(7));
console.log("Years to Level 10:", calculateYearsToPromotion(5));
