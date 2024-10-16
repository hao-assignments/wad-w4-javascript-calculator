// Validate if input is a valid decimal number
function isValidNumber(value) {
    return !isNaN(value) && value.trim() !== '';
}

// Calculate function
function calculate() {
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    const operation = document.querySelector('input[name="operation"]:checked');
    const resultField = document.getElementById('result');
    const notification = document.getElementById('notification');

    // Clear notification and result field
    notification.innerText = '';
    resultField.value = '';

    // Validate number inputs
    if (!isValidNumber(firstNumber)) {
        notification.innerText = 'Thông báo: Số thứ nhất không phải là số hợp lệ.';
        return;
    }

    if (!isValidNumber(secondNumber)) {
        notification.innerText = 'Thông báo: Số thứ hai không phải là số hợp lệ.';
        return;
    }

    // Validate if an operation is selected
    if (!operation) {
        notification.innerText = 'Thông báo: Vui lòng chọn một phép tính.';
        return;
    }

    // Convert inputs to numbers
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let result;

    // Perform the calculation
    switch (operation.value) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                notification.innerText = 'Thông báo: Không được phép chia cho số 0.';
                return;
            }
            result = num1 / num2;
            break;
    }

    // Display the result
    resultField.value = result;
}

// Add validation on input blur events
document.getElementById('firstNumber').addEventListener('blur', function () {
    const notification = document.getElementById('notification');
    if (!isValidNumber(this.value)) {
        notification.innerText = 'Thông báo: Số thứ nhất không phải là số hợp lệ.';
    } else {
        notification.innerText = '';  // Clear notification
    }
});

document.getElementById('secondNumber').addEventListener('blur', function () {
    const notification = document.getElementById('notification');
    if (!isValidNumber(this.value)) {
        notification.innerText = 'Thông báo: Số thứ hai không phải là số hợp lệ.';
    } else {
        notification.innerText = '';  // Clear notification
    }
});