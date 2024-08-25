package com.waggle.wagglebe.dto

class CommonResponse<T>(
    val ok: Boolean,
    val message: String?,
    val data: T?
)