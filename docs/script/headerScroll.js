$(function() {
  const mainHeader = document.querySelector('.h_wrap');
  const copyHeader = document.querySelector('.h_wrap_copy');
  copyHeader.style.display = 'none';

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      mainHeader.style.display = 'none';
      copyHeader.style.display = 'block';
    } else {
      mainHeader.style.display = 'block';
      copyHeader.style.display = 'none';
    }
  });
});


$(function() {
  let banners = ['#banner04', '#banner05', '#banner01', '#banner02', '#banner03'];
  let idx = 0;
  setInterval(function() {
    let current = banners[idx];
    let next = banners[(idx + 1) % banners.length];
    $(current).fadeOut(2000, function() {
      $(next).fadeIn(2000);
    });
    idx = (idx + 1) % banners.length;
  }, 3000);
});


document.querySelectorAll('.banner04, .banner05, .banner01, .banner02, .banner03').forEach(function(el) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', function() {
        window.location.href = '#';
    });
});




