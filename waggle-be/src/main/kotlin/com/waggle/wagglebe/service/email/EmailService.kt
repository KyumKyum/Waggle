package com.waggle.wagglebe.service.email

import com.waggle.wagglebe.provider.VerificationStoreProvider
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class EmailService(
    @Autowired val verificationStoreProvider: VerificationStoreProvider
) {
    private val EMAIL_VERIFICATION_KEY = "EMAIL_VERIFICATION_KEY"
    fun checkEmailCrednetialConfliction(email: String): Boolean {
        return this.verificationStoreProvider.checkIfVerificationExists(EMAIL_VERIFICATION_KEY, email) ?: false
    }
}