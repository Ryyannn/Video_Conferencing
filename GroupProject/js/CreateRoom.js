function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    localStorage.setItem('roomName', document.getElementById("roomName").value); // Get the value of the input and save it in the global variable
    a = localStorage.getItem('roomName')// Get the value of the input and save it in the global variable

    console.log(a);
    // Redirect to another HTML file
    window.location.href = "presenter.html";
}

document.querySelector(".form").addEventListener("submit", handleFormSubmit);