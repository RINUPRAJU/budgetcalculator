function storeRecords() {
    userDetails = {
        Email : email.value,
        User_name : uname.value, 
        Password : pswd.value
    }

    if (userDetails.Email in localStorage) {
        alert('Email Id already exists')
    } else {
        localStorage.setItem(userDetails.Email,JSON.stringify(userDetails))
        alert('User registerd successfully')
         window.location = './index.html';
    }

    //clear the form
    document.getElementById('user_form').reset() 
}

function login() {
    Email_id = email_id.value;
    password = pass.value;
    console.log(email_id.value);

    if (Email_id in localStorage) {
        User_Data = JSON.parse(localStorage.getItem(Email_id));
        // console.log(User_Data);
        if (password == User_Data.Password) {
            alert('Login Successful');
            window.location = './home.html';
        } else {
            alert('Incorrect Password');
        }
    } else {
        alert('Invalid Email Id');
    }
}

function add_income() {
    
    total = parseFloat(document.getElementById("balance").innerHTML);
    Income = parseFloat(document.getElementById("income").value) ;
    Incomesource = inc_src.value;
    if (Incomesource =="" || !Income) {
        alert("Enter input values")
    } else {
        total += Income;
        document.getElementById("balance").innerHTML = total;
    //change color of balance
        document.getElementById("balance").style.color = total <0 ?"red":"green";
        
        total_income.innerHTML +=`
                <tr>
                <td class="border border-1 border-primary">${Incomesource}</td>
                <td class="border border-1 border-primary">${Income}</td>
                <tr>`
    }

    //clear the form
    document.getElementById('budget_form').reset() 
}

function add_expenses() {
    total = parseFloat(document.getElementById("balance").innerHTML);
    Expense = parseFloat(document.getElementById("expenses").value) ;
    Expensesource = exp_src.value;
    if (!Expense|| Expensesource =="") {
        alert("Please Enter the values")
    } else {
        total -= Expense;
        document.getElementById("balance").innerHTML = total;
        document.getElementById("balance").style.color = total <0 ?"red":"green";
        total_expenses.innerHTML +=` 
            <tr>
                <td class="border border-1 border-primary">${Expensesource}</td>
                <td class="border border-1 border-primary">${Expense}</td>
            <tr>`   
    }
    
    //clear the form
    document.getElementById('budget_form').reset() 
}

//Logout function

function logout() {
    // localStorage.removeItem('account_details');
    window.location = './index.html';
}