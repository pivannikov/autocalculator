
var cars = {
    model: {
        'Polo': {'price':15000, 'desc': 'Polo - is good econom sedan for people'},
        'Passat': {'price':23000, 'desc': 'Passat - great family car for life and travel'},
        'Touareg': {'price':35000, 'desc': 'Touareg - business class car for serious people'}
    },
    color: {
        'White': {'price':0, 'desc': 'Basic color. Additional payment is:'},
        'Red': {'price':1300, 'desc': 'Additional payment for this color:'},
        'Gray': {'price':500, 'desc': 'Additional payment for this color:'},
        'Brown': {'price':1000, 'desc': 'Additional payment for this color:'},
        'Silver': {'price':700, 'desc': 'Additional payment for this color:'},
    },
    complectation: {
        'Econom': 0,
        'Standart': 500,
        'Business': 2900,
        'Luxury': 5700
    },
    engine: {
        '83': 0,        
        '150': 350,
        '210': 1100,
    },
    wheels: {
        '16': 0,
        '17': 100,
        '18': 130,
        '19': 210
    }
}


function totalSum() {
    var model = document.getElementById('model_show').innerHTML;
    var complectation = document.getElementById('complectation_show').innerHTML;
    var engine = document.getElementById('engine_show').innerHTML;
    var color = document.getElementById('color_show').innerHTML;
    var wheels = document.getElementById('wheels_show').innerHTML;
    
    document.getElementById('total_price').innerHTML = cars.model[model].price + cars.complectation[complectation] + cars.engine[engine] + cars.color[color].price + cars.wheels[wheels];

    console.log(cars.model[model].price, cars.complectation[complectation], cars.engine[engine], cars.color[color].price, cars.wheels[wheels]);
    
}

document.getElementById('model').addEventListener('change', function() {
    document.getElementById('model_show').innerHTML = this.value;
    document.getElementById('model_desc').innerHTML = cars.model[this.value].desc;
    changeColor(this.value, '.model_select');
    var color = document.getElementById('color_show').innerHTML;
    document.getElementById('pic').src = "images/vw_" + this.value + "_" + color + ".png";
    totalSum();
  })
document.getElementById('color').addEventListener('change', function() {
    document.getElementById('color_show').innerHTML = this.value;
    var model = document.getElementById('model_show').innerHTML;
    changeColor(this.value, '.color_select');
    document.getElementById('color_desc').innerHTML = cars.color[this.value].desc;
    document.getElementById('color_price').innerHTML = cars.color[this.value].price;
    document.getElementById('pic').src = "images/vw_" + model + "_" + this.value + ".png";
    totalSum();
  })


function radioListen(radioName) {
    document.getElementsByName(radioName).forEach(function(e) {
        e.addEventListener("click", function() {
            document.getElementById(radioName + '_show').innerHTML = e.value;
            totalSum();
        });
    });
}

radioListen('complectation');
radioListen('engine');
radioListen('wheels');

document.getElementById('clear_form').addEventListener('click', function() {
    document.getElementById('pic').src = 'images/vw_Polo_White.png';
    var forms = document.querySelectorAll('form');
    for (var i = 0; i < forms.length; i++) {
        forms[i].reset();
    }
    document.getElementById('total_price').innerHTML = 15000;

    model = document.getElementById('model_show').innerHTML = 'Polo';
    complectation = document.getElementById('complectation_show').innerHTML = 'Econom';
    engine = document.getElementById('engine_show').innerHTML = '83';
    color = document.getElementById('color_show').innerHTML = 'white';
    wheels = document.getElementById('wheels_show').innerHTML = '16';
    removeClass('.model_select', 'has-background-primary');
    removeClass('.color_select', 'has-background-primary');
    totalSum();
    localStorage.clear();
})


document.getElementById('place_order').addEventListener('click', function() {
    var shows = document.getElementsByTagName('td');

    for (let j = 0; j < shows.length; j++) {
        localStorage.setItem(shows[j].getAttribute('id'), shows[j].textContent);
        
    }
    var email = prompt('Enter your email for ordering:');
    if (email) {
        alert('Thanks, your order has been placed');
    } else {
        alert('You have not entered your email');
    }

})
 function removeClass(nameElement, nameClass) {
    var elements = document.querySelectorAll(nameElement);
    for (let i = 0; i < elements.length; i++) {
      
        elements.item(i).classList.remove(nameClass);
    }
 }

function changeColor(model, selector) {

    var elements = document.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i++) {
        if (model == elements.item(i).textContent) {
            elements.item(i).classList.add('has-background-primary');
        }
        else {
            elements.item(i).classList.remove('has-background-primary');
        }
    }
}

// console.log(elements);



// // localStorage.setItem("lastname", "Smith");
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");