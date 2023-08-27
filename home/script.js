function calculate_age()  {
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();
    if (isNaN(dob.getTime())){
        document.getElementById("age").innerHTML
 = "Masukkan data yang benar";
return    
}
let age = today.getFullYear() - dob.getFullYear();
const monthDifference = today.getDate() - dob.getMonth();

if (
    monthDifference < 0 || 
    (monthDifference === 0 && today.getDate() < dob.getDate())
){
    age --;
}

document.getElementById("age").innerHTML = +age + "Tahun.";

}