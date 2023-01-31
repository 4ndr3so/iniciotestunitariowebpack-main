//npm run test
// npx webpack-dev-server



import {prueba} from "./app/app"


const tarea=["goto BucketA",
                "create FileA",
                "create FileB",
                "create FileA",
                "goto BucketB",
                "goto BucketC",
                "create FileA",
                "create FileB",
                "create FileC",]
const matriz=
            [[1, 2, 3, 4, 5],
             [6, 7, 8, 9, 10],
             [11,12,13,14,15],
             [16,17,18,19,20],
             [21,22,23,24,25]  ]
prueba.ordenar(tarea)
//console.log(prueba.solution4(["5","2","C","D","+","5","C","+"]))
console.log(prueba.rotarMatriz(matriz))
