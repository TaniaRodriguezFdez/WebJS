const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menu-navegacion');

// console.log(menu)
// console.log(hamburguesa)

hamburguesa.addEventListener('click' , ()=>{
    menu.classList.toggle("spread")
});
/*cada vez que toques el menu hamburguesa, vas a quitarle o ponerle la clase dependiendo de si la tiene, o no la tiene*/

window.addEventListener('click' , e=>{
    console.log(e.target);

    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguesa){
         
        menu.classList.toggle("spread")
    }
})
/* e.target me dice a que elemento estoy dando click*/