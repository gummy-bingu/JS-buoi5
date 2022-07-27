function Score()
{
    // đầu vào 
    var mark = document.getElementById("mark").value * 1;
    var area= document.getElementById("input1").value;
    var subject=document.getElementById("input2").value;
    var score1 = document.getElementById("score1").value * 1;
    var score2 = document.getElementById("score2").value * 1;
    var score3 = document.getElementById("score3").value * 1;



    //Xu ly

    switch (area) 
    {
      case "Pick": {
        var area_Score = "0";
        break;
      }
      case "A": {
        var area_Score = "2";
        break;
      }
      case "B": {
        var area_Score = "1";
        break;
      }
      case "C": {
        var area_Score = "0.5";
        break;
      }
    }

  switch (subject) 
    {
      case "Pick": {
        var subject_Score = "0";
        break;
      }
      case "one": {
        var subject_Score = "2.5";
        break;
      }
      case "two": {
        var subject_Score = "1.5";
        break;
      }
      case "three": {
        var subject_Score = "1";
        break;
      }
      
    }

    var sum_Score = score1+score2+score3+area_Score*1+ subject_Score*1;
    if( score1 == 0 || score2 ==0 || score3 == 0)
    { 
        var result = "<p> Bạn đã rớt. Do bạn có điểm bằng 0" + "</p>"
    }
    else if( sum_Score >= mark)
    {
        var result = "<p> Bạn đã đậu. Tổng điểm: " + sum_Score + "</p>"
    }
    else if( sum_Score < mark)
    {
        var result = "<p> Bạn đã rớt. Tổng điểm: " + sum_Score + "</p>"
    }

    //đầu ra

    document.getElementById("Score").innerHTML = result;

}


function tinhTienDien(){
    // đầu vào
    var kw = document.getElementById("kw").value*1;
    var name = document.getElementById("name").value;

  // xử lý
   if (kw <= 50) 
   {
        price = kw * 500;
      } else if (kw <= 100) {
        price=   (500*50 +(( kw-50)*650))*1;
      } else if (kw<=200){
        price = (500*50+(50*650)+((kw-100)*850))*1;
      }
      else if(kw<=350){
        price = + (500*50 +(50*650)+(100*850)+((kw-150)*1100)) *1;
      }
      else {
        price = (500*50 +(50*650)+(100*850)+(150*1100)+((kw*1300)))*1;
      }
      var name_Price = "<p> Họ và tên: " + name + "; Tiền điện: " + price;

  // đầu ra
  //đầu ra

  document.getElementById("tinhTien").innerHTML = name_Price;

}