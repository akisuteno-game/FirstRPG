console.log("debug ok");




document.body.insertAdjacentHTML(

  "beforeend",

  `

    <div

      style="

        position:fixed;
        top:10px;
        right:10px;
        background:black;
        color:lime;
        padding:10px;
        z-index:99999;

      "

    >

      DEBUG OK

    </div>

  `

);
