// task 2

const username = document.getElementById("name");
const age = document.getElementById("age");
const email = document.getElementById("email");
const country = document.getElementById("country");

if (sessionStorage.getItem("name")) {
	username.value = sessionStorage.name;
}

if (sessionStorage.getItem("age")) {
	age.value = sessionStorage.age;
}

if (sessionStorage.getItem("email")) {
	email.value = sessionStorage.email;
}

if (sessionStorage.getItem("country")) {
	document.querySelector(`option[value='${sessionStorage.country}']`).selected =
		"select";
}

document
	.querySelectorAll("form input:not([type='submit'])")
	.forEach((input) => {
		input.addEventListener("input", function (e) {
			if (e.currentTarget.id === "name") {
				sessionStorage.setItem("name", e.currentTarget.value);
			} else if (e.currentTarget.id === "age") {
				sessionStorage.setItem("age", e.currentTarget.value);
			} else {
				sessionStorage.setItem("email", e.currentTarget.value);
			}
		});
	});

sessionStorage.setItem("country", country.value);

country.onchange = function () {
	sessionStorage.setItem("country", this.value);
};
