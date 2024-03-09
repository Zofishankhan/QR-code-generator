const URL="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const QRcode_box=document.querySelector(".QRcode_box");
const QR_img= document.querySelector("#QR_img");
const QR_txt= document.querySelector("#QR_txt");
const input_txt= document.querySelector("#input_txt");




function generateQRcode(){
    if(input_txt.value.length>0){
        QR_img.src = URL + input_txt.value;
        QRcode_box.classList.add("show-img");
    }else{
        input_txt.classList.add("error");
        setTimeout(()=>{
            input_txt.classList.remove("error");
        },1000);
    };

}
