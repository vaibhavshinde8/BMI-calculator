const form=document.querySelector("form");

form.addEventListener("submit",function(e){
    let bmi=0;
    e.preventDefault();
    const height= parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    let result=document.querySelector(".result");

    if(height===''||height < 0 || isNaN(height)){
        result.innerText="please give a valid height";
    } else if(weight===''||weight < 0 || isNaN(weight)){
        result.innerText="please give a valid weight";
    }else{
         bmi=((weight/ (height*height))*703).toFixed(2);
        result.innerText=bmi;
    }
    //console.log(height);

    const final_result=document.querySelector(".final-result");
if(bmi <= 18.6){
final_result.innerText="Under weight";
}
else if(bmi > 18.6 && bmi <=24.9){
    final_result.innerText="Normal Weight";
}
else{
    final_result.innerText="Overweight";
}

console.log(bmi);
})

