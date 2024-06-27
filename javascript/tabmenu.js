// Lắng nghe sự kiện click trên nút menu
document.querySelector('.menu-btn button').addEventListener('click', function() {
    // Thêm/Bỏ class 'active' để hiện/ẩn dropdown menu
    this.parentElement.classList.toggle('active');
  });

  // Lắng nghe sự kiện click bên ngoài dropdown menu
  document.addEventListener('click', function(event) {
    // Nếu click bên ngoài dropdown menu và nút menu
    if (!event.target.closest('.menu-btn')) {
      // Loại bỏ class 'active' để ẩn dropdown menu
      document.querySelector('.menu-btn.active').classList.remove('active');
    }
  });