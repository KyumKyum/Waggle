package com.waggle.wagglebe.provider

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.redis.core.RedisTemplate
import org.springframework.stereotype.Component

@Component
class VerificationStoreProvider(
    @Autowired val verificationStoreTemplate: RedisTemplate<String, String>,
) {

    fun setVerificationInSet(key: String, value: String){
        this.verificationStoreTemplate.opsForSet().add(key, value);
    }

    fun getVerificationsFromSet(key: String) {
        this.verificationStoreTemplate.opsForSet().members(key);
    }

    fun checkIfVerificationExists(key: String, value: String): Boolean? {
        return this.verificationStoreTemplate.opsForSet().isMember(key, value)
    }
}