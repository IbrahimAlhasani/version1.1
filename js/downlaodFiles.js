let HTML = `
<<div class="file-item">

          <a href="files/Ali Hider/محاضرات/pic05.jpg" download><button class="download-button"> <img src="icons/download.png" class="download-icon">تنزيل</button> </a>
          <p class="lecture-name">المحاضرة الأولى</p>
        </div>

        <div class="file-item"></div>

          <a href="files/Ali Hider/محاضرات/pic04.jpg" download><button class="download-button"> <img
                src="icons/download.png" class="download-icon"> تنزيل </button> </a>
          <p class="lecture-name">المحاضرة الأولى</p>
        </div>

`;


document.querySelector('.js-Ali-Lecture').addEventListener('click', () => {
  document.querySelector('.fileList').innerHTML = HTML;
});