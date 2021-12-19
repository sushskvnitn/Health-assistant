window.onload = () => {
  let button = document.querySelector("#btn");
  button.addEventListener("click", calculateBMI);
};


function calculateBMI() {
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);

  let result = document.querySelector("#result");
  if (height === "" || isNaN(height))
    result.innerHTML = `<div class="alert alert-primary" role="alert">provide proper <b> height</b></div>`;
  else if (weight === "" || isNaN(weight))
    result.innerHTML = `<div class="alert alert-primary" role="alert">provide proper <b> weight</b></div>`;
  else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6)
      result.innerHTML = `<div class="alert alert-success" role="alert">Under Weight : ${bmi}.if you will become overweighted then I will give you some workout schedule to weight loss</div>
      `;
    else if (bmi >= 18.6 && bmi < 24.9)
      result.innerHTML = ` <div class="alert alert-primary" role="alert">Normal :${bmi}.if you will become overweighted then I will give you some workout schedule to weight loss</div>`;
    else if (bmi >= 25 && bmi < 29.9)
      result.innerHTML = `<div class="center"> <div class="alert alert-warning" role="alert">overweight :${bmi}</div>
                <div class="card text-center" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">workout treatment</h5>
                  <p class="card-text">Hey you are overweighted <br/>  </p>
                  <a href="https://sushskvnitn.github.io/health-assistant/workout.html" class="btn btn-warning">start weight loss</a>
                </div></div>
              </div>`;
    else if (bmi >= 30 && bmi < 39.9)
      result.innerHTML = `<div class="center"> <div class="alert alert-danger" role="alert">obese : ${bmi}</div>
               
                <div class="card text-center" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">workout treatment</h5>
    <p class="card-text">Hey you are overweighted <br/>  </p>
    <a href="https://sushskvnitn.github.io/health-assistant/workout.html" class="btn btn-warning">start weight loss</a>
  </div> 
  </div>
</div>`;
    else
      result.innerHTML = `<div class="center">
            <div class="alert alert-danger" role="alert">morbidly : ${bmi}</div>
            <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">workout treatment</h5>
              <p class="card-text">Hey you are overweighted <br/>  </p>
              <a href="https://sushskvnitn.github.io/health-assistant/workout.html" class="btn btn-warning">start weight loss</a>
            </div> 
          </div></div>`;
  }
}

