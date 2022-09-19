package com.example.mecatec.Funciones

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import androidx.appcompat.app.AppCompatActivity
import com.example.mecatec.R

@Suppress("DEPRECATION")
class Inicio: AppCompatActivity() {

    lateinit var  handler: Handler

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.inicio)

        handler = Handler()
        handler.postDelayed({

            val intent = Intent(this , Login::class.java)
            startActivity(intent)
            finish()
        }, 3000)
    }

}