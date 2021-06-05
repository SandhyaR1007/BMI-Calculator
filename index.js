const wt = document.getElementById("wt")
const ht = document.getElementById("ht")
const result = document.getElementById("result")



const systemChanger = ()=>{
    const system = document.getElementById("system").value
   
    if(system==="Imperial"){
        wt.innerText = "LBS"
        ht.innerText = "IN"
        console.log(system)
        
        
        return system
    }
    else{
        wt.innerText = "KG"
        ht.innerText = "CM"

    }

}



const BMI_Calculator = ()=>{

    const weight = document.getElementById("weight").value
    const height = document.getElementById("height").value
    

     const Convertor  = (weight,height)=>{
         if(systemChanger()==="Imperial"){
             console.log("worked")
             weight/=2.205
             height/=39.37
             
            
            return weight/(height**2)
         }
         else{
             height/=100
             return weight/(height**2)
         }

     }

    

    const BMI = Convertor(weight,height).toFixed(2)
    
    console.log(BMI)

    if(BMI<18.5){
    result.innerHTML = `<p>${BMI}-UNDERWEIGHT</p>`
    result.style.backgroundColor = "#fffa65"
    result.style.border = "1px solid #ffd32a"


}
else if(BMI>=18.5 && BMI<24.9){
    result.innerHTML = `<p>${BMI}-NORMAL</p>`
    result.style.backgroundColor = "#32ff7e"
    result.style.border = "1px solid #05c46b"
}
else if(BMI>=24.9 && BMI<29.9){
    result.innerHTML = `<p>${BMI}-OVERWEIGHT</p>`
    result.style.backgroundColor = "#ffaf40"
    result.style.border = "1px solid #fa8231"
}
else{
    result.innerHTML = `<p>${BMI}-OBESE</p>`
    result.style.backgroundColor = "#ff4d4d"
    result.style.border = "1px solid #eb3b5a"
}

    
}
