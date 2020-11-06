export default function changeModal(){

    let btn = document.querySelectorAll('.dinBtn');
    console.log(btn);
    btn.forEach(element => {
      element.addEventListener('click',function(){
          console.log("click");
      }) 
    });
    
};
