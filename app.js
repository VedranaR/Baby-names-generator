let clear = true;

window.addEventListener("DOMContentLoaded", () => {
  let girl = document.getElementById("girl");
  let boy = document.getElementById("boy");
  let textbox = document.getElementById("textbox");

  girl.addEventListener("click", () => {
    let num = getRandomNum();
    textbox.classList.add("text-danger");
    textbox.classList.remove("text-primary");

    fetch("girls.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        let girlName = data[num];
        if (clear) {
          textbox.value = girlName;
          textbox.innerText = textbox.value;
        } else {
          textbox.innerText = "";
          textbox.value = girlName;
          textbox.innerText = textbox.value;
        }
      });
  });

  boy.addEventListener("click", () => {
    let num = getRandomNum();
    textbox.classList.add("text-primary");
    textbox.classList.remove("text-danger");

    fetch("boys.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        let boyName = data[num];
        if (clear) {
          textbox.value = boyName;
          textbox.innerText = textbox.value;
        } else {
          textbox.innerText = "";
          textbox.value = boyName;
          textbox.innerText = textbox.value;
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  document.getElementById("new-round").addEventListener("mousedown", e => {
    window.location.reload();
  });

  function getRandomNum() {
    return Math.floor(Math.random() * 55 + 1);
  }
});
