const int buttonPin = 2;    // Define the pin for the push button
const int redPin = 9;       // Define the pin for the red anode of the RGB LED
const int greenPin = 10;    // Define the pin for the green anode of the RGB LED
const int bluePin = 11;     // Define the pin for the blue anode of the RGB LED

int buttonState = 0;        // Variable to store the button state
int currentColor = 0;       // Variable to track the current color (0: Red, 1: Green, 2: Blue)

void setup() {
    pinMode(buttonPin, INPUT); // Set the button pin as an input
    pinMode(redPin, OUTPUT);   // Set the red LED pin as an output
    pinMode(greenPin, OUTPUT); // Set the green LED pin as an output
    pinMode(bluePin, OUTPUT);  // Set the blue LED pin as an output
}

void loop() {
    buttonState = digitalRead(buttonPin); // Read the state of the button

    if (buttonState == HIGH) {
        // If the button is pressed, switch to the next color
        switchColor();
        delay(500); // Debounce delay to avoid rapid switching
    }
}

void switchColor() {
    // Turn off all colors
    digitalWrite(redPin, LOW);
    digitalWrite(greenPin, LOW);
    digitalWrite(bluePin, LOW);

    // Switch to the next color
    currentColor = (currentColor + 1) % 3;

    // Turn on the corresponding color
    if (currentColor == 0) {
        digitalWrite(redPin, HIGH);
    } else if (currentColor == 1) {
        digitalWrite(greenPin, HIGH);
    } else {
        digitalWrite(bluePin, HIGH);
    }
}
