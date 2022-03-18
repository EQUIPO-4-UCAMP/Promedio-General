var form = document.getElementById('cali')

form.addEventListener('submit', function(event){
    event.preventDefault()
    let as1 = document.getElementById('cali1').value;
    let as2 = document.getElementById('cali2').value;
    let as3 = document.getElementById('cali3').value;
    let as4 = document.getElementById('cali4').value;
    let as5 = document.getElementById('cali5').value;
    let as6 = document.getElementById('cali6').value;
    let ans;
        suma = + as1 + + as2 + +  as3 + + as4 + + as5 + + as6;
            ans = suma /6;
            document.getElementById('promedio').innerHTML= ans.toFixed(2);
             if(ans >= 7.0){
                document.getElementById('resultado').innerHTML= 'Aprobado';
            } else{
                document.getElementById('resultado').innerHTML= 'Reprobado';
            } 
        })