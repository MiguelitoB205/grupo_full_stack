const mongoose= require('mongoose')

const Schema=mongoose.Schema;
const userSchema=new Schema({
nombre: String,
apellido:String,
correo: String,
contraseña: String,
celular:String,
numeroCuenta:String
});


const Usuario = mongoose.model('Usuario',userSchema);

module.exports = Usuario;
