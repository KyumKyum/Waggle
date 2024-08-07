package com.waggle.wagglebe

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class WaggleBeApplication

fun main(args: Array<String>) {
    runApplication<WaggleBeApplication>(*args)
}
