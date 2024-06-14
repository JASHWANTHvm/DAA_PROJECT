// JavaScript for factorial calculation

function factorialRecursive(n, operationCount) {
    operationCount.count++;
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorialRecursive(n - 1, operationCount);
    }
}

function factorialNonRecursive(n, operationCount) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
        operationCount.count++;
    }
    return result;
}

function calculateFactorials(event) {
    event.preventDefault();

    let numberInput = document.getElementById("numberInput").value;
    let number = parseInt(numberInput);

    if (isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }

    // Calculate factorial recursively
    let recursiveOperationCount = { count: 0 };
    let recursiveFactorial = factorialRecursive(number, recursiveOperationCount);

    // Calculate factorial non-recursively
    let nonRecursiveOperationCount = { count: 0 };
    let nonRecursiveFactorial = factorialNonRecursive(number, nonRecursiveOperationCount);

    // Open a new window to display the results
    let resultWindow = window.open("", "_blank");
    let resultHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Factorial Calculation Result</title>
            <!-- Bootstrap CSS -->
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    padding: 20px;
                    background-image: url('ima.jpg');
                }

                .result-container {
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                .result-container p {
                    margin: 10px 0;
                }

                .header {
                    text-align: center;
                    margin-bottom: 20px;
                }

                .header-image {
                    max-width: 100%;
                    height: 80px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header text-center mt-5">
                    <img src="calculator.jpg" alt="Calculator" class="header-image">
                </div>

                <div class="result-container">
                    <h2>Factorial Calculation Result</h2>
                    <p>Factorial of ${number} (Recursive): ${recursiveFactorial}</p>
                    <p>Time Complexity (Recursive): O(n)</p>
                    <p>Operation Count (Recursive): ${recursiveOperationCount.count}</p>
                    <hr>
                    <p>Factorial of ${number} (Non-Recursive): ${nonRecursiveFactorial}</p>
                    <p>Time Complexity (Non-Recursive): O(n)</p>
                    <p>Operation Count (Non-Recursive): ${nonRecursiveOperationCount.count}</p>
                </div>
            </div>

            <!-- Bootstrap JS and dependencies -->
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@1.16.1/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </body>
        </html>
    `;

    resultWindow.document.open();
    resultWindow.document.write(resultHTML);
    resultWindow.document.close();
}

// Event listener for form submission
document.getElementById("factorialForm").addEventListener("submit", calculateFactorials);
