function dangnhap(event) {
  // Ngăn chặn load trang khi ấn button
  event.preventDefault();

  // Lấy dữ liệu input
  const accountelement = document.getElementById("taikhoan").value;
  const passwordelement = document.getElementById("matkhau").value;

  // Kiểm tra nếu chưa nhập đủ thông tin
  if (!accountelement || !passwordelement) {
    document.getElementById("dangnhapne").style.display = "block";
    document.getElementById("dangnhapne").innerHTML = "Vui lòng nhập đầy đủ thông tin";
    return;
  }

  // Lấy dữ liệu từ localStorage
  const superdata = JSON.parse(localStorage.getItem("dulieu")) || [];

  // Tìm kiếm tài khoản trong localStorage
  const user = superdata.find(
    (item) => item.account === accountelement && item.password === passwordelement
  );

  // Nếu tìm thấy tài khoản
  if (user) {
    alert("Đăng nhập thành công!");
    window.location.href = "index.html";
    
  } else {
    document.getElementById("dangnhapne").style.display = "block";
    document.getElementById("dangnhapne").innerHTML = "Tài khoản hoặc mật khẩu không đúng";
  }
}
