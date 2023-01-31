/*module.exports={


      ordenar(arr){
        
        return arr
    }
}*/
export const prueba={


    
    ordenar(arr){
        let  arrtmpFolders={};
        let arrtmp2Nombres;
        let nombrTepFol;
        let nombrTepFil;


        for(let i=0;i<arr.length;i++){
            const regex = new RegExp('goto');
            const regex2 = new RegExp('create');
            if(regex.test(arr[i])){
                nombrTepFol=arr[i].replace("goto ","")        
                arrtmpFolders[nombrTepFol]=0;

                arrtmp2Nombres={};
            }else if(regex2.test(arr[i])){
                nombrTepFil=arr[i].replace("create ","")
                arrtmp2Nombres[nombrTepFil]=0;
                arrtmpFolders[nombrTepFol]=Object.keys(arrtmp2Nombres).length;
            }


        }
        let result =Object.keys(arrtmpFolders).reduce(function(a, b){ return arrtmpFolders[a] > arrtmpFolders[b] ? a : b });
        //console.log(result)
        return result
    },

    solution(inputString) {
        let liminteInicial=0;
        let limiteFinal=0;
        let encontro=0;        
         let i=0;
         let textVolteado="";
                while(inputString.search(/\(/)!=-1){
                    if(inputString[i]==="("){
                        liminteInicial=i;
                    }
                    if(inputString[i]===")"){
                        limiteFinal=i;
                        inputString=remplazaletras(liminteInicial,limiteFinal,inputString)
                        //console.log(inputString)
                        i=0;
                    }else{
                        i++;
                    }
                    
                }
                
           
            function remplazaletras(inicio,final,text){
                textVolteado= text.slice(inicio+1,final)
                textVolteado=textVolteado.split("").reverse().join("");
                //console.log(inicio,final,textVolteado)
                
                return text.slice(0,inicio) + textVolteado + text.slice(final+1)
            }
            
            return inputString
    },
     solution3(inputString) {
        while (inputString.includes('(')) {
            inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => 
            {
                console.log(_)
                console.log(str)
                return  [...str].reverse().join('')
            }
            )
            ;
        }
        return inputString;
    },
    solution4(ops){
        let result =null;
        let tempArray=[];
        for(let i=0;i<ops.length;i++){
            if(ops[i]==="C"){
                tempArray.pop()
            }else if(ops[i]==="D"){
                tempArray.push(tempArray[tempArray.length-1]*2)
            }else if(ops[i]==="+"){
                tempArray.push(parseInt(tempArray[tempArray.length-2])+parseInt(tempArray[tempArray.length-1]))
            }else{
                tempArray.push(ops[i])
            }    
        }
        result=tempArray.reduce((sum,a)=>parseInt(sum)+parseInt(a))
        return result;
    },
    solution5(ops){
        let regEx=/\{\}|\[\]|\(\)/
        let bandera=true
        while( ops.length>=0){
           // console.log(regEx.test(ops)) 
            if(regEx.test(ops)){
                ops=ops.replace(/\{\}|\[\]|\(\)/,"")
              //  console.log(ops)
                if(ops.length==0){
                    return true
                }
            }else{
                return false
            }
        }
        return true;

    },
    rotarMatriz(matriz,veces){ //con cruz
        let matrizFinal=[]
    for(let i=0;i<matriz.length;i++)
        {
            matrizFinal.push([])
            for(let j=0;j<matriz[0].length;j++){

                //rota centido horario
                if(i==j){//no se mueve la cruz
                    matrizFinal[i].push(matriz[i][j])
                }else if(i==(matriz.length-1)-j){
                    matrizFinal[i].push(matriz[i][j])
                } else {
                    matrizFinal[i].push(matriz[(matriz.length-j)-1][i])
                }
            
            }
        }
        return matrizFinal
    }

    
}