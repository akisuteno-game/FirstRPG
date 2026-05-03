let gauge = 0;

let gaugeLoop = null;

const chargeTime = 2000;




function startGauge(){


  gauge = 0;


  const start =
    Date.now();


  clearInterval(
    gaugeLoop
  );


  document
    .getElementById(
      "attackBtn"
    )
    .disabled = true;


  gaugeLoop =
    setInterval(


      function(){


        const elapsed =

          Date.now()
          -
          start;


        gauge =

          (
            elapsed
            /
            chargeTime
          ) * 100;


        if(
          gauge > 100
        ){

          gauge = 100;

        }


        document
          .getElementById(
            "gaugeFill"
          )
          .style.width =

            gauge + "%";


        if(
          gauge >= 100
        ){

          clearInterval(
            gaugeLoop
          );


          document
            .getElementById(
              "attackBtn"
            )
            .disabled = false;

        }


      },


      16


    );


}
