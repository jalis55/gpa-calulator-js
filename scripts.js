function calculate_garade(marks){
    console.log(marks);
    if (marks>=80){
        return 5;
    }
    else if(marks>=70 && marks<80){
        return 4;
    }
    else if(marks>=60 && marks<70){
        return 3.5;
    }
    else if(marks>=50 && marks<60){
        return 3;
    }
    else if(marks>=40 && marks<50){
        return 2;
    }
    else if (marks>=33 && marks<40){
        return 1;
    }
    else{
        return 0;
    }
};

//Final cgpa
function final_cgpa(cgpa){
    if (cgpa >=5){
        return "A+";
    }
    if (cgpa>=4 && cgpa <5 ){
        return "A";
    }
    if (cgpa >=3.5 && cgpa <4){
        return "A-";
    }
    if (cgpa >=3 && cgpa<3.5){
        return "B";
    }
    if (cgpa =>2 && cgpa<3){
        return "C"
    }
    if (cgpa =>1 && cgpa<2){
        return "D"
    }
    if (cgpa <1){
        return "F"
    }
}
// console.log(calculate_garade(44));
//show result
function show_result(grade){
    var output_result=document.getElementById(grade);
    output_result.style.color="red";
    output_result.style.background="blue"
}
function calculate_result(){
    //type conversion
    var english=parseInt(document.getElementById("en").value);
    var bangla=parseInt(document.getElementById("bn").value);
    var math=parseInt(document.getElementById("ma").value);
    var physics=parseInt(document.getElementById("ph").value);
    var chemistry=parseInt(document.getElementById("ch").value);
    var biology=parseInt(document.getElementById("bi").value);

    //declaring empty array
    var final_result=[];

    final_result.push(calculate_garade(english));
    final_result.push(calculate_garade(bangla));
    
    final_result.push(calculate_garade(physics));
    final_result.push(calculate_garade(chemistry));
    final_result.push(calculate_garade(biology));

    var fourh_subject=calculate_garade(math);
    if (fourh_subject >=3){
        final_result.push(fourh_subject-2);
    }

    //use  typeof to check data type.  
    //console.log(typeof bangla);
    // console.log(final_result);

    //use loop
    var sum=0;
    for(var i=0;i<final_result.length;i++){
        sum +=final_result[i];
    }
    var cgpa=sum/5;
    console.log(cgpa);
    var final_garde=final_cgpa(cgpa);
    show_result(final_garde);

};