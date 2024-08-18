package com.waggle.wagglebe.model

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import java.util.UUID

@Entity
class Waggler(
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    val id: UUID,

    @Column (nullable = false)
    val ident: String,

    @Column (nullable = false)
    val wagglerName: String,

    @Column (nullable = false)
    val pw: String
)