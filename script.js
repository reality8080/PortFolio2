// const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// window.addEventListener("scroll", () => {
//   if (document.body.scroll > 200 || document.documentElement.scrollTo > 200) {
//     scrollToTopBtn.style.display = "block";
//   } else {
//     scrollToTopBtn.style.display = "none";
//   }
// });

// scrollToTopBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });
// try {
//   if (document.getElementById("typing-element")) {
//     var typed = new Typed("#typing-element", {
//       strings: [
//         "Lập trình viên Web.",
//         "Người đam mê xây dựng ứng dụng.",
//         "Nhà phát triển Frontend.",
//       ],
//       typeSpeed: 50,
//       backSpeed: 30,
//       loop: true,
//     });
//   }
// } catch (error) {
//   console.error("Typed.js bị lỗi không thể chạy được", error);
//   document.getElementById("typing-element").textContent = "Lập trình viên Web.";
// }

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const name = document.getElementById("nameInput").value.trim();
//   const email = document.getElementById("emailInput").value.trim();
//   const message = document.getElementById("messageInput").value.trim();
//   const formMess = document.getElementById("formMessage");
//   if (!name || !email || !message) {
//     formMess.innerHTML =
//       '<div class = "alert alert-danger">Vui lòng điền đầy đủ thông tin.</div>';
//     return;
//   }
//   if (!/^\S+@\S+\.\S+$/.test(email)) {
//     formMess.innerHTML =
//       '<div class = "alert alert-danger">Vui lòng nhập địa chỉ email hợp lệ.</div>';
//     return;
//   }
//   formMess.innerHTML =
//     '<div class = "alert alert-danger">Gửi tin nhắn thành công!</div>';
//   e.target.reset();
// });
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  if (document.body.scroll > 200 || document.documentElement.scrollTo > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
scrollToTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
try {
  if (document.getElementById("typing-element")) {
    var typed = new Typed("#typing-element", {
      strings: [
        "Lập trình viên Web.",
        "Người đam mê xây dựng ứng dụng.",
        "Nhà phát triển Frontend.",
      ],
      typeSpeed: 30,
      backSpeed: 25,
      loop: true,
    });
  }
} catch (error) {
  console.error("Typed.js bị lỗi không thể chạy được", error);
  document.getElementById("typing-element").textContent = "Lập trình viên Web.";
}
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("nameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const message = document.getElementById("messageInput").value.trim();
  const formMess = document.getElementById("formMessage");
  if (!name || !email || !message) {
    formMess.innerHTML =
      '<div class = "alert alert-danger">Vui lòng điền đầy đủ thông tin.</div>';
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    formMess.innerHTML =
      '<div class = "alert alert-danger">Vui lòng nhập địa chỉ email hợp lệ.</div>';
    return;
  }
  formMess.innerHTML =
    '<div class = "alert alert-danger">Gửi tin nhắn thành công!</div>';
  e.target.reset();
});
