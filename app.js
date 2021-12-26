let url = 'https://jsonplaceholder.typicode.com/todos';

const todoList = document.querySelector(".todo__list");
let checkboxText;

document.addEventListener("DOMContentLoaded", function() {
    fetch(url)
        .then(res => res.json())
        .then((out) => {
            createHTML(out)
        })
        .catch(err => { throw err });
});


function createHTML(json_obj) {
    for (let key in json_obj) {
        if (json_obj[key].userId === 1) {

            let itm = `<div class="todo__item"><label class="checkbox"><input type="checkbox" ${isCheck(json_obj[key].completed)} class="checkbox__input"><div class="checkbox__text ${isClose(json_obj[key].completed)}"><h2 class="item__title">${json_obj[key].title}</h2><div class="item__description">${isDescriotion(json_obj[key].title)}</div></div></label></div>`;
            todoList.insertAdjacentHTML('beforeend', itm);
        }
    }

    checkboxText = document.querySelectorAll(".checkbox__text")
    checkboxText.forEach(element => {
        element.addEventListener('click', () => {
            if (element.classList.contains("close")) {
                element.classList.remove("close")
            } else {
                element.classList.add("close")
            }
        })
    });
    let height = $('.todo__box').height();
    $("body").height(height + 330)
    $(".todo__container").height(height + 60)
    console.log(height)
}

function isDescriotion(descriotion) {
    if (Math.ceil(Math.random() * 100) > 25) {
        return ""
    } else return descriotion
}

function isClose(close) {
    if (close) {
        return 'close'
    } else return ""

}

function isCheck(check) {
    if (check) {
        return 'checked="uncheck"'
    } else return ""
}