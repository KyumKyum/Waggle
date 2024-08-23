import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.redis.connection.RedisConnectionFactory
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory
import org.springframework.data.redis.core.RedisTemplate
import org.springframework.data.redis.serializer.StringRedisSerializer

@Configuration
class RedisConfig (
    @Value("\${spring.duplicationStorage.host}")
    val host: String,
    
    @Value("\${spring.duplicationStorage.port}")
    val port: Int,
){

    @Bean
    fun dupStorageConnectionFactory(): RedisConnectionFactory {
        return LettuceConnectionFactory(host, port)
    }

    @Bean
    fun dupStorageTemplate(): RedisTemplate<*, *> {
        return RedisTemplate<Any, Any>().apply {
            connectionFactory = dupStorageConnectionFactory()

            this.keySerializer = StringRedisSerializer()
            this.hashKeySerializer = StringRedisSerializer()
            this.valueSerializer = StringRedisSerializer()
        }
    }
}