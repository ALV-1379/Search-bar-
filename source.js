
/* baz o baste shodan input */

const searchBtn = document.querySelector(".icon");
const searchBox = document.querySelector(".search-box");
const sujestDiv = document.getElementById("sujestion-box");
const emptyInput = document.getElementById("empty-input");


let click = false
searchBtn.addEventListener("click", () => {
    if (!click) {
        searchBox.classList.toggle("active");
        sujestDiv.classList.toggle("show");

        emptyInput.innerHTML += `
        <button type="submit">del</button>
        <p>
        جسو جو قبلی
    </p>
    `

            ;
        click = true
    }
    else {
        searchBox.classList.remove("active");
        sujestDiv.classList.remove("show");
        emptyInput.innerHTML = ""
        click = false;
    }
});


/* baz o baste shodan search end */

let suggestions = [
    "میلگرد",
    "اجدار"
    , "میلگرد 2"
    , "میلگرد 3"
    , "میلگرد4"
    , "میلگرد ذوب"
    , "میلگر5"
    , "میلگر6"
    , "میلگر7"
    , "میلگر5"
    , "میلگر8"
    ,"میلگر9"
];




const data = document.getElementById("input");
const sugList = document.getElementById("sujest-list")

/* data.addEventListener("keyup", (e) => {
    const data_val = data.value;
    if (e.key == "Enter" && data_val) {
        console.log(data_val.trim());
        data.value = " ";
    }
}) */



data.onkeyup = (e) => {
    let userData = data.value;
    let emptyArray = [];

    if (userData) {
        emptyInput.innerHTML = "";
        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return `<div><a>${data}</a></div>`;
        });
        sugList.innerHTML = emptyArray.join('');
         let allList = sugList.querySelectorAll("a");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }    
    }
    else {
        sugList.innerHTML = "";
        emptyInput.innerHTML = `
            <button type="submit">del</button>
            <p>
            جسو جو قبلی
        </p>`;
    }
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = data.value;
        listData = `<div>${userValue}</div>`;
    } else {
        listData = list.join(p);
    }
    sugList.innerHTML = listData;
}





const selectedItems = []; // آرایه برای ذخیره محتوای تگ‌هایی که انتخاب شده‌اند

// تابع برای اضافه کردن محتوای تگ به آرایه انتخاب شده
function select(tag) {
    const selectedItem = tag.textContent; // محتوای تگ
    selectedItems.push(selectedItem); // اضافه کردن به آرایه انتخاب شده
   displaySelectedItems(); // نمایش محتوای آرایه انتخاب شده
}
/* console.log(selectedItems); */

// تابع برای نمایش محتوای آرایه انتخاب شده
function displaySelectedItems() {
    const selectedItemsContainer = document.getElementsByTagName('p');
    selectedItemsContainer.innerHTML = ''; // پاک کردن محتوای قبلی
    selectedItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        selectedItemsContainer.appendChild(li); // اضافه کردن تگ به ظاهر
    });
}
















