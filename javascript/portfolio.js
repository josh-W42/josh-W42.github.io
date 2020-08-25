(function () {
  // Remove document event listeners
  let nav_group_items = document.querySelectorAll("nav .list-group .nav-link");
  
  nav_group_items.forEach(item => {    
      item.addEventListener("click", function (e) {
        setTimeout(function () {
          e.target.classList.remove('active')
        }, 10)
  
        document.querySelector("nav .navbar-toggler").click()
      })
  });
    
})();
