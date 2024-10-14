# programacion_orientada_a_objetos


Un loop/bucle sirve para repetir el código muchas veces en una fracción de segundo
     se da 3 declaraciones distintas separadas por;
     condicion: determina hasta cuando se va a repetir, debe comenzar siendo true pero debe cambiar para que sea falsa
     variable += 1: se va a ejecutar cada vez que se repita el bucle
   
    ejm: for(let variable= Numero asignado; variable < numero; variable += 1  ){
      console.log(variable) 
    }

    comparacion de igual:==

    console.log(variable de let[variable de for])
    varible.lenght: siempre es numero mayor que el numero de los objetos del array
    indice del array siempre empieza por 0 
   
   Para que se comience desde el numero mayor para que llegue a 0
    ejm: for(let variable= variable.lenght-1; variable >= 0; variable -= 1  ){
      console.log(variable) 
    }

    Una clase(class) es un manual/plano de instrucciones para crear el objeto
    class variable {
        constructor()[
            variables de let que se debe escribir con this, ejm= this.posX= random()
            declaracion de variables
        ]
        update(){ 
            actualizar los datos del objeto como posicion, colision, etc, ejm= this.posX= +=this.velX
        }
        display(){
            se dibuja o visualiza el objeto como fill, stroke, circle, ejm= circle(this,posX,this.posY.)
        }

    }


    como se crea una nueva pelota
    se genera una nueva varible= let.nuevapelota
    despues de fuction.setup
    variable ejm: nuevapelota= new Pelota()

    en fuction draw 
    variables.update(), ejm: nuevapelota.update()
    variable.display(), ejm: nuevapelota.display()

    para crear muchas pelotas
    variable=array; let.pelotas=[]
    
    en fuction setup
    for(varible i=0;i < 100, i++)
    pelotas push(Nueva Pelota)

    en fuction draw
    variable[i].update()
    