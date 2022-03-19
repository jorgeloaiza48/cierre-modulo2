let autos = require("./autos")

let concesionaria = {
   autos: autos,
 
buscarAuto: function(patente){
      for(let i=0;i<this.autos.length;i++){
         if (this.autos[i].patente===patente){
            return this.autos[i]}
            }
      return null
   },

venderAuto:function(patente){
 for(let i=0;i<this.autos.length;i++){
         this.buscarAuto(patente)!= null ? this.autos[i].vendido = true : "" //esto es un if ternario        
      }

   },

autosParaLaVenta:function(){
let autosVenta = []
for (let i=0; i<this.autos.length; i++){
    this.autos[i].vendido === false ? autosVenta.push(this.autos     [i]) : "" 
      }
return autosVenta
},
   
autosNuevos:function(){
   let ceroKm = []
   let x = []
   x = this.autosParaLaVenta()
    for(let i=0;i<x.length;i++){
       x[i].km < 100 ? ceroKm.push(x[i]) : ""}
    return ceroKm
   },
   //let y = x.filter(function(z){return z.km < 100})//no   quiere dar con filter

listaDeVentas:function(){
 let listadoVendidos = this.autos.filter((auto) => auto.vendido === true);
  let soloPrecios = listadoVendidos.map((auto) => auto.precio);

  return soloPrecios;
 }

}

console.log(concesionaria.autos)
console.log(concesionaria.listaDeVentas())
concesionaria.venderAuto("JJK116")
console.log(concesionaria.autos)

console.log(concesionaria.listaDeVentas())