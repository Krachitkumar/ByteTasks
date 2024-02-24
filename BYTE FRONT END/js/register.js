// Assuming register.js is in the js folder
async function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const requestBody = {
    name: name,
    email: email,
    password: password,
  };

  try {
    const response = await fetch(
      "http://panel.mait.ac.in:8001/auth/register/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (response.ok) {
      alert("User registered successfully");
      window.location.href = "login.html"; // Redirect to login after successful registration
    } else {
      console.error("Registration failed");
    }
  } catch (error) {
    console.error("Error during registration:", error);
  }
}
