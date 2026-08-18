const form = document.getElementById("quote-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const project = document.getElementById("project")

    let valid = true;

    if (!name.validity.valid) {
        document.getElementById("name-error").classList.remove("hidden");
        valid = false;
    } else {
        document.getElementById("name-error").classList.add("hidden");
    }

    if (!email.validity.valid) {
        document.getElementById("email-error").classList.remove("hidden");
        valid = false;
    } else {
        document.getElementById("email-error").classList.add("hidden");
    }

   if (!phone.validity.valid) {
        document.getElementById("phone-error").classList.remove("hidden");
        valid = false;
    } else {
    document.getElementById("phone-error").classList.add("hidden");
    }

    
    if (!project.validity.valid) {
        document.getElementById("project-error").classList.remove("hidden");
        valid = false;
    } else {
        document.getElementById("project-error").classList.add("hidden");
    }

    if (valid) {
        form.classList.add("hidden");
        document.getElementById("form-success").classList.remove("hidden");
    }
});