package com.waggle.wagglebe.controller.email

import com.waggle.wagglebe.dto.CommonResponse
import com.waggle.wagglebe.service.email.EmailService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController()
@RequestMapping("emails")
class EmailController(
    @Autowired val emailService: EmailService,
) {
    @GetMapping("existence")
    fun checkEmailExistence(@RequestParam email: String): CommonResponse<UInt> {

        val existence = this.emailService.checkEmailCrednetialConfliction(email)
        return CommonResponse(ok = !existence, message = null, data = null);
    }
}