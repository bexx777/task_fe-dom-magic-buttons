// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "second-btn ";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  clonedBtn.textContent = "Тык";
  document.body.appendChild(clonedBtn);
  clonedBtn.setAttribute("class","second-btn");
});
clonedBtn.addEventListener('click',()=>{
  if(document.body.appendChild){
    btn.style.color = "pink";
    btn.style.backgroundColor ="green";
    btn.style.borderRadius = "10px";
    btn.style.padding = "15px";
      }else {clonedBtn.style.color = "pink";}
});

// const netxMagicBtn = document.getElementById("magic-btn");
// netxMagicBtn.addEventListener('click',()=>{
//   document.body.innerHTML += "<button> Тык...</button>";
//   if( document.body === "<button> Тык...</button>"){
//     netxMagicBtn.style.color = "pink";
//     netxMagicBtn.style.backgroundColor ="green";
//     netxMagicBtn.style.borderRadius = "10px";
//     netxMagicBtn.style.padding = "20px";
//   }else {netxMagicBtn.style.color = "pink";}


// })
// здесь можете создать EventListener для второй кнопки