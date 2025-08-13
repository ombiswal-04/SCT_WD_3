const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || ["+", "-", "*", "/", "%", "."].includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key.toLowerCase() === "c") {
        clearDisplay();
    }
});
