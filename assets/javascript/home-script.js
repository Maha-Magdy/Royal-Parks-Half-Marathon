function seeMore() {
  const sec_can_hide = document.querySelectorAll(".section-can-hide");
  sec_can_hide.forEach((item, index) => {
    item.classList.toggle("hide-to-see-less");
  });

  document.getElementById("see-more").style.display = "none";
  document.getElementById("see-less").style.display = "block";
}

function seeLess() {
  const sec_can_hide = document.querySelectorAll(".section-can-hide");
  sec_can_hide.forEach((item, index) => {
    item.classList.toggle("hide-to-see-less");
  });

  document.getElementById("see-less").style.display = "none";
  document.getElementById("see-more").style.display = "block";
}

document.getElementById("see-more").addEventListener("click", function (e) {
  e.stopPropagation();
  seeMore();
});

document.getElementById("see-less").addEventListener("click", function (e) {
  e.stopPropagation();
  seeLess();
});
