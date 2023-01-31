//const ardenar= require("../src/app")
import {prueba} from "../src/app/app"

test("test prueba", async()=>{

    const tarea=["goto BucketA",
                "create FileA",
                "create FileB",
                "create FileA",
                "create FileC",
                "create FileD",
                "goto BucketB",
                "goto BucketC",
                "create FileA",
                "create FileB",
                "create FileC",
                "goto BucketD",
                "create FileA",
                "create FileB",
                "create FileA",
                "create FileB",
                "create FileB",
                "goto BucketE",
                "create FileA",
                "create FileB",]
    const result1= prueba.ordenar(tarea);
    const result2="BucketA"


    expect(result1).toEqual(result2)
})