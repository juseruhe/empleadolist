import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listEmpleados: Empleado[]= [
{legajo: 1, nombre: "Juan", apellido: "Perez", sexo: "Masculino", salario: 25000},
{legajo: 2, nombre: "Andrea", apellido: "Silva", sexo: "Femenino", salario: 30000},
{legajo: 3, nombre: "Leidy", apellido: "Rojas", sexo: "Femenino", salario: 20000},
{legajo: 4, nombre: "Alejandra", apellido: "Mendivelso", sexo: "Femenino", salario: 23000},
{legajo: 5, nombre: "Dalia", apellido: "Perea", sexo: "Femenino", salario: 22000},
{legajo: 6, nombre: "Federico", apellido: "Triana", sexo: "Masculino", salario: 26000}

  ];

  radioButtonSeleccionado = "Todos";


  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number{
return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number{
    return this.listEmpleados.filter(list => list.sexo == "Femenino").length;
      }

      obtenerTotalMasculinos(): number{
        return this.listEmpleados.filter(list => list.sexo == "Masculino").length;
          }

          empleadoCountRadioButtonChange(radioButtonSelec: string) : void{
this.radioButtonSeleccionado = radioButtonSelec;

          }

}
