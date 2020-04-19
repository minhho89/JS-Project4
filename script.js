$(document).ready(() => {
/***************************
//Hiệu ứng xổ/ giấu cho menu//
***************************/
// Khi di chuột vào menu sẽ xổ div nav-menu ra
// Khi chuột rời khỏi nav-menu sẽ hide nav-menu

 $("#menu").on("mouseenter", () => {
     $(".nav-menu").show();
 })

 $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide();
})


/***************************
//Hiệu ứng hover cho nút //
***************************/
// khi di chuột vào nút + (method "mousenter") thì chèn class btn-likes-hover
// khi di chuột ra khỏi nút + (method "mouseleave") thì remove class btn-likes-hover

  $(".btn-likes").on("mouseenter",(event) => {
      $(event.currentTarget)
        .addClass("btn-likes-hover")
        .on("mouseleave", (event) => {
            $(event.currentTarget)
                .removeClass("btn-likes-hover")
        })
  })
/***************************
//  Đếm từ trong status   //
***************************/

// Kích hoạt bằng method keyup ở ô nhập status
  $(".myPost").on("keyup", (event) => {
        //tạo biến lấy giá trị status đã nhập
    var myStatus = $(event.currentTarget).val();
        //tạo biến tính số từ còn lại
        // lấy 140 - chiều dài string số từ đã nhập
    var remaining = 140 - myStatus.length;
    if(remaining <= 0) {
        //nếu remaining <= 0 chữ chuyển sang đỏ
        $(".text-remaining").addClass("red");
    }
    else {
        //nếu remaining > 0 không thay đổi
        $(".text-remaining").removeClass("red");
    }
    $(".wordCount").html(remaining);
  })
  /********************************************
    //  Hiệu ứng Click nút Đếm từ và Đăng Bài //
    *******************************************/
$(".btn-myPost").click(()=> {
    // console.log("da click");
    //Trả status về trạng thái ban đầu
    $(".myPost").val("");
    
    //Trả text-remaning về giá trị ban đầu
    $(".wordCount").html(140);
    $(".text-remaining").removeClass("red");
})
});

/*****************************************
//               KHỞI TẠO              //
 *****************************************/
  /**Khi khởi tạo con trỏ typing xuất hiện ở khung status */
  $(".myPost").focus();