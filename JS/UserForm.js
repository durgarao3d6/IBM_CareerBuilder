let loginData = {
    username: "",
    password: "",
};

let usernameEl = document.getElementById("username");
let usernameErrMsgEl = document.getElementById("usernameErrMsg");

usernameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        usernameErrMsgEl.textContent = "Required*"
    } else {
        usernameErrMsgEl.textContent = ""
    }
    loginData.username = event.target.value;
})

let passwordEl = document.getElementById("password");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");

passwordEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        passwordErrMsgEl.textContent = "Required*"
    } else {
        passwordErrMsgEl.textContent = ""
    }
    loginData.password = event.target.value;
})

function validateLoginData(loginData) {
    let {
        username,
        password
    } = loginData;
    if (username === "") {
        usernameErrMsgEl.textContent = "Required*";
    }
    if (password === "") {
        passwordErrMsgEl.textContent = "Required*";
    }
}

let userLoginEl = document.getElementById("userLogin");
userLoginEl.addEventListener("submit", function(event) {
    window.location.reload();
    validateLoginData(loginData);
});


let userData = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    gender: "Male",
    category: "Student",
    background: "",
    country: "",
    state: ""
};

let categoryEl = document.getElementById("category");
categoryEl.addEventListener("change", function(event) {
    userData.category = event.target.value;
});

let genderMaleEl = document.getElementById("genderMale");
genderMaleEl.addEventListener("change", function(event) {
    userData.gender = event.target.value;
});

let genderFemaleEl = document.getElementById("genderFemale");
genderFemaleEl.addEventListener("change", function(event) {
    userData.gender = event.target.value;
});

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*"
    } else {
        nameErrMsgEl.textContent = ""
    }
    userData.name = event.target.value;
})

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*"
    } else {
        emailErrMsgEl.textContent = ""
    }
    userData.email = event.target.value;
})

let mobileEl = document.getElementById("mobile");
let mobileErrMsgEl = document.getElementById("mobileErrMsg");

mobileEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        mobileErrMsgEl.textContent = "Required*"
    } else if (mobileEl.value.length !== 10) {
        mobileErrMsgEl.textContent = "Enter 10 Digit Mobile Number"
    } else {
        mobileErrMsgEl.textContent = ""
    }
    userData.mobile = event.target.value;
})

let pswdEl = document.getElementById("pswd");
let pswdErrMsgEl = document.getElementById("pswdErrMsg");

pswdEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        pswdErrMsgEl.textContent = "Required*"
    } else {
        pswdErrMsgEl.textContent = ""
    }
    userData.password = event.target.value;
})

function validateUserData(userData) {
    let {
        name,
        email,
        mobile,
        password
    } = userData;
    if (name === "") {
        nameErrMsgEl.textContent = "Required*";
    }
    if (email === "") {
        emailErrMsgEl.textContent = "Required*";
    }
    if (mobile === "") {
        mobileErrMsgEl.textContent = "Required*";
    }
    if (password === "") {
        pswdErrMsgEl.textContent = "Required*";
    }
}

/*function submitUserData(userData) {
    let options = {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            Accept: "application/json",
            Authorization: "Bearer 3ecd0c5e775e17204cfbbebfd765fccbd2a253bd0e6ea3ef2dfe8b0c95aa66dc"
        },
        body: JSON.stringify(userData)
    };

    let url = "https://gorest.co.in/public-api/users";

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            if (jsonData.data[0].message === "has already been taken") {
                emailErrMsgEl.textContent = "Email Already Exists!!"
            }
        })
}*/

let userFormEl = document.getElementById("userForm");
userFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateUserData(userData);
    //submitUserData(userData);//
})
