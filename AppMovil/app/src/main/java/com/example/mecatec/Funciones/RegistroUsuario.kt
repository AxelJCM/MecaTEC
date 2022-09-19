package com.example.mecatec.Funciones

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity

//import RestAPIService
import android.util.Log
import android.widget.*
import com.example.mecatec.R
//import com.example.mecatec.API.Usuarios
import kotlinx.android.synthetic.main.registrousuario.*

class RegistroUsuario: AppCompatActivity() {

    //Se crea el array para almacenar los usuarios creados en la actividad de Registro
    var usuarios_registrados = ArrayList<String>()

    //Se crea el array para almacenar las contraseñas guardadas en la actividad de Registro
    var contrasenas_registradas = ArrayList<String>()

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        setContentView(R.layout.registrousuario)

    btnsalir.setOnClickListener {
        startActivity(
            Intent(this, Login::class.java).
        putStringArrayListExtra("Usuarios",usuarios_registrados).
        putStringArrayListExtra("Contrasena",contrasenas_registradas))
    }

}
}