let Username = document.querySelector("#Username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");
let Form = document.querySelector("#Form");

function ShowError(input, message){
    const FormControl = input.parentElement
    FormControl.className = "form-control error";
    const small = FormControl.querySelector("small");
    small.innerText = message;
}

function ShowSucces(input){
    const FormControl = input.parentElement
    FormControl.className = "form-control success";
}

function checkEmail (input){
    const RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(RegEx.test(input.value)){
        ShowSucces(input);
    }else{
        ShowError(input,"Email is invalid");
    }
}

function CheckInputLength(input,min,max){
    if(input.value.lenght < min){
        ShowError(input, `${GetFieldName(input)} You Must Be At Least ${min} Characters`);
    }else if(input.value.lenght > max){
        ShowError(input, `${GetFieldName(input)} You Must Be less then ${max} Characters`);
    }
    else{
        ShowSucces(input);
    }
        
}

function GetFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function ChackPassWordMatch(input1, input2){
    if(input1.value !== input2.value){
        ShowError(input2, "Password Not Match");
    }
}

Form.addEventListener("submit", (e)=> {
    e.preventDefault();

    CheckInputLength(Username, 3, 20)
    CheckInputLength(password, 6, 30)
    checkEmail(email);
    ChackPassWordMatch(password,password2);
});