package com.waggle.wagglebe.controller.email

import com.waggle.wagglebe.dto.CommonResponse
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController()
@RequestMapping("emails")
class EmailController {
    @GetMapping("existence")
    fun checkEmailExistence(@RequestParam email: String): CommonResponse<UInt> {


        return CommonResponse(ok = true, message = null, data = null);
    }
}