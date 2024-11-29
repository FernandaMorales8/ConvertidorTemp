function calcular(){
    opcion = (document.querySelector('#opc')).value;

    temp = parseFloat(document.querySelector('#valor').value);

    celsius =0;
    fahrenheit=0;
    kelvin=0;
    rankine=0;

    switch(opcion){
        case '1':

            celsius = temp;
 
            fahrenheit = (temp*1.8+32);

            kelvin = (temp+273.15);

            rankine=(temp*1.8+491.67);

        break;

        case '2':
            celsius = (temp-32)/1.8;

            fahrenheit = temp;

            kelvin = ((temp-32)/1.8) + 273.15;

            rankine = temp + 459.67;
        break;

        case '3':
            celsius = temp - 273.15;

            fahrenheit = ((temp - 273.15)*1.8) + 32;

            kelvin = temp;

            rankine = ((temp - 273.15)*1.8) + 491.67;
        break;

        case '4':
            celsius = (temp-491.67)/1.8;

            fahrenheit = temp - 459.67;

            kelvin = ((temp - 491.67)/1.8) + 273.15;

            rankine = temp;
        break;
    }
    document.querySelector("#celsius").value = celsius.toFixed(2);

    document.querySelector('#fahrenheit').value = fahrenheit.toFixed(2);

    document.querySelector('#kelvin').value = kelvin.toFixed(2);

    document.querySelector('#rankine').value = rankine.toFixed(2);
}


