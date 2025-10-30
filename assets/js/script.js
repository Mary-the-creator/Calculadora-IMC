const form = document.getElementById('form'); 

form.addEventListener('submit', function(event) {

    event.preventDefault(); //previne o carregamento da página quando envia os dados do formulário

    const weight = document.getElementById('weight').value.replace(',', '.');
    const height = document.getElementById('height').value.replace(',', '.');


    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention', 'normal');


    document.getElementById('infos').classList.remove('hidden');

    

    if (bmi < 18.5) {
        description = 'Abaixo do peso';
       
    } else if (bmi >= 18.5 && bmi < 25) {
        description = 'Peso normal';

         value.classList.remove('attention');
        value.classList.add('normal');

    } else if (bmi >= 25 && bmi < 30) {
        
        description = 'Sobrepeso';
    } else if (bmi >= 30 && bmi < 35) {
        description = 'Obesidade grau I';
    } else if (bmi >= 35 && bmi < 40) {
        description = 'Obesidade grau II';
    } else {
        description = 'Obesidade grau III';
    }
    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
    
});