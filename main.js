alert("main OK");

function showTab(tabId){


  document
    .querySelectorAll(
      ".tabPage"
    )
    .forEach(tab=>{

      tab.classList.remove(
        "activePage"
      );

    });


  document
    .getElementById(
      tabId
    )
    .classList.add(
      "activePage"
    );


}
