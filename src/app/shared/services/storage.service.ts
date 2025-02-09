import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Cine } from '../api/models/cine';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storageInstancia : Storage | null = null;

  constructor(private storage: Storage) { }

  async crearStorageInstancia (){
    await this.crearStorage();
    this.cargarCines();
    this.cargarPeliculas();
  }

  async crearStorage(){
    this.storageInstancia = await this.storage.create();
  }

  async guardarDato(key: string, objeto: any){
    if(this.storageInstancia == null)
      await this.crearStorageInstancia();

    let stringValue = JSON.stringify(objeto);
    this.storageInstancia?.set(key, stringValue);
  }

  async obtenerArray(key: string): Promise<string>{
    if(this.storageInstancia == null)
      await this.crearStorageInstancia();

    let valorEnString = await this.storageInstancia?.get(key);
    return valorEnString;
  }

  borrarDato(key: string){
    if(this.storageInstancia != null){ 
      this.storageInstancia?.remove(key);
    }
  }

  limpiar(){
    if(this.storageInstancia != null){ 
      this.storageInstancia?.clear();
    }  
  }
  
  private cargarCines(){
    let cines : Cine[] = [
      {id: 1, nombre: "cine Palafox", capacidad: 1000, calle: "av. de Juan Pablo Segundo, 43"},
      {id: 2, nombre: "cine Aragonia", capacidad: 1500, calle: "Av. de Juan Carlos I, 44"},
      {id: 3, nombre: "cine Grancasa", capacidad: 1000, calle: "Centro comercial Gran Casa, 35"},
    ];
    this.guardarDato("cines", cines);
  }

  private cargarPeliculas(){
    
  }
}
