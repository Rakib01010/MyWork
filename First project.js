//This project has been made to find out the results of separate classes among 1 to 5
function Classes(ClassName){

  const Class1=[];

  const Class2=[];

  const Class3=[];

  const Class4=[];

  const Class5=[];

  const TotalClass=[Class1,Class2,Class3,Class4,Class5];

  //This is for class1

  if (ClassName==1){

    for(let c1=1;c1<5;c1++){

      if (c1==1){

        console.log(Class1.push(Number (prompt("give me bangla number:"))));

        continue;

      }else if (c1==2){

        console.log(Class1.push(Number(prompt("give me English number:"))));

        continue;

      }else if (c1==2){

        console.log(Class1.push(Number(prompt("give me math number:"))));

        continue;

      }else if (c1==3){

        console.log(Class1.push(Number(prompt("give me geography number:"))));

        continue;

      }else if (c1==4){

        console.log(Class1.push(Number(prompt("give me history number:"))));

        continue;

      }

      else{

        console.log("student not found ");

      }

      

    }

    console.log("The number of students in Bangla, English,math and geography are:",Class1);

  }

  //This is for class 2

  if (ClassName==2){

    for(let c2=1;c2<5;c2++){

      if (c2==1){

        console.log(Class2.push(Number (prompt("give me bangla num:"))));

        continue;

      }else if (c2==2){

        console.log(Class2.push(Number(prompt("give me English num:"))));

        continue;

      }else if (c2==3){

        console.log(Class2.push(Number(prompt("give me math num:"))));

        continue;

      }else if (c2==4){

        console.log(Class2.push(Number(prompt("give me geography num:"))));

        continue;

      }

      else{

        console.log("student not found ");

      }

     

    }

    console.log("The number of students in Bangla, English,math, geography, history are:",Class2);

      

  }

  //This is for class3

  if (ClassName==3){

    for(let c3=1;c3<5;c3++){

      if (c3==1){

        console.log(Class3.push(Number (prompt("give me bangla num:"))));

        continue;

      }else if (c3==2){

        console.log(Class3.push(Number(prompt("give me English num:"))));

        continue;

      }else if (c3==3){

        console.log(Class3.push(Number(prompt("give me math num:"))));

        continue;

      }else if (c3==4){

        console.log(Class3.push(Number(prompt("give me geography num:"))));

        continue;

      }

      else{

        console.log("student not found ");

      }

     

      

    }

    console.log("The number of students in Bangla, English,math, geography, history are:",Class3);

    

  }

  //  //This is for class4

  if (ClassName==4){

    for(let c4=1;c4<5;c4++){

      if (c4==1){

        console.log(Class4.push(Number (prompt("give me bangla num:"))));

        continue;

      }else if (c4==2){

        console.log(Class4.push(Number(prompt("give me English num:"))));

        continue;

      }else if (c4==2){

        console.log(Class4.push(Number(prompt("give me math num:"))));

        continue;

      }else if (c4==3){

        console.log(Class4.push(Number(prompt("give me geography num:"))));

        continue;

      }else if (c4==4){

        console.log(Class4.push(Number(prompt("give me history num:"))));

        continue;

      }

      else{

        console.log("student not found ");

      }

      

    }

    console.log("The number of students in Bangla, English,math, geography, history are:",Class4);

      

  }

    //This is for class5

  if (ClassName==5){

    for(let c5=1;c5<5;c5++){

      if (c5==1){

        console.log(Class5.push(Number (prompt("give me bangla num:"))));

        continue;

      }else if (c5==2){

        console.log(Class5.push(Number(prompt("give me English num:"))));

        continue;

      }else if (c5==2){

        console.log(Class5.push(Number(prompt("give me math num:"))));

        continue;

      }else if (c5==3){

        console.log(Class5.push(Number(prompt("give me geography num:"))));

        continue;

      }else if (c5==4){

        console.log(Class5.push(Number(prompt("give me history num:"))));

        continue;

      }

      else{

        console.log("student not found ");

      }

     

      

    }

    console.log("The number of students in Bangla, English,math, geography, history are:",Class5);

  }

  // this is the total of class 1

  let sum1=sum2=sum3=sum4=sum5=0;

  if(ClassName==1){

    for(let a=1;a<Class1.length;a++){

    sum1+=Class1[a];

     }

     console.log("The total number that is out of 500 is:",sum1);

  }

  // this is the total of class 2

  else if(ClassName==2){

     for(let a=0;a<Class2.length;a++){

    sum2+=Class2[a];

    }

   console.log("The total number that is out of 500 is:",sum2);

  }

// this is the total of class 3

  else if(ClassName==3){

     for(let a=0;a<Class3.length;a++){   

       sum2+=Class3[a];

     }

    console.log("The total number that is out of 500 is:",sum3);

    }

    // this is the total of class 4

    else if(ClassName==4){

   for(let a=0;a<Class4.length;a++){

    sum2+=Class4[a];

   }

   console.log("The total number that is out of 500 is:",sum4);

    }

  // this is the total of class 5

   else if(ClassName==5){

   for(let a=0;a<Class5.length;a++){

    sum2+=Class5[a];

   }

   console.log("The total number that is out of 500 is:",sum5);

  

   }else {

     console.log("error");

   }

   

   for (let i=0;i<TotalClass.length;i++){

     

     for (let j=0;j<TotalClass[i].length;j++){

       

       if (TotalClass[i][j] >= 90) {

         console.log('A');

      } else if (TotalClass[i][j] >= 80) {

          console.log('B');

      } else if (TotalClass[i][j] >= 70) {

         console.log('C');

      } else if (TotalClass[i][j] >= 60) {

          console.log('D');

      } else {

          console.log('F');

      }

     

     }

     

     

   }

  

}

//Here we called the first function 

var give=Number(prompt("please give the class serial number between 1 to 5 so that you can find out the results easily :"))

Classes(give);

