package com.waggle.wagglebe.dto

class CommonResponse<T>(
    ok: Boolean,
    message: String?,
    data: T?
)