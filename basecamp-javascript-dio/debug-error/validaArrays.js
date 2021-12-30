function validaArrays(arr, num){
       try {

            if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

            if(!arr ==='object') throw new TypeError('Enivie um Elemento do tipo Object');

            if (!num === 'number') throw new TypeError('Envie um Elemento do tipo number');

            if(arr.length !== num) throw new RangeError ('Tamanho do Array inválido')

            return arr; 
       } catch (e) {
           if ( e instanceof RangeError){
               console.log('RangeError');
           }else if (e instanceof ReferenceError){
                console.log('ReferenceError!');
                console.log(e.stack);
           }else {

                console.log('Outro tipo de erro!');
			    console.log(e.stack);
           
       }
    }
}
console.log(validaArrays([1, 2, 3], 0));