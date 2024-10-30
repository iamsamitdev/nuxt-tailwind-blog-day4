export default defineEventHandler((event) => {
    
    const config = useRuntimeConfig()
    // const wpsecret = config.wpsecretkey
    const wpsecret = config.wpSecretKey

    return {
        message: "Hello from Nuxt 3 API",
        secret: wpsecret
    }

})