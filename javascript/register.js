//Đăng ký
function dangky(event) {
  // Ngăn chặn load trang khi ấn button
  event.preventDefault();
  // Lấy dữ liệu input
  const accountelement= document.getElementById("account").value;
  const passwordelement= document.getElementById("password").value;
  const password2element= document.getElementById("password2").value;
if (!accountelement || !passwordelement || !password2element) {
  document.getElementById("error7").style.display="block";
    return;
}
if (passwordelement !==password2element) {
  document.getElementById("error7").style.display="block";  
  document.getElementById("error7").innerHTML="Mật khẩu không khớp";
  return;
}
// tạo đối tượng chứa thông tin người dùng
const data = {
    userid: Math.floor(Math.random()*1000),
    account: accountelement,
    password: passwordelement
};
// tạo mảng chứa dữ liệu trên localstorage
var superdata =JSON.parse(localStorage.getItem("dulieu")) || []
// Đẩy dữ liệu data vào mảng superdata
superdata.push(data);
// load dữ liệu vào localStorage
localStorage.setItem('dulieu', JSON.stringify(superdata));
  alert ('Đăng ký thành công rồi nhé !');
  window.location.href="dangnhap.html"
}
