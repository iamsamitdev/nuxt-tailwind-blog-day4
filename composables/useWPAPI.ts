/***
 * WordPress API composable
*/

import { type Post } from '~~/types/post'

export default () => {

    // const WP_URL = 'https://www.itgenius.co.th/sandbox_api/flutter_news_api'

    const config = useRuntimeConfig()
    // const WP_URL = config.public.wpurlapi
    // const WP_SECRET_KEY = config.wpsecretkey

    const WP_URL = config.public.wpUrlAPI
    const WP_SECRET_KEY = config.wpSecretKey

    console.log('WP_URL', WP_URL)
    console.log('WP_SECRET_KEY', WP_SECRET_KEY)

    // กำหนด useFetch ในการอ่าน API
    const get = async <T>(endpoint: string) => {
        return useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`)
    }

    // Get All Posts
    const getPosts = async (
        category?: number,
        page: number = 1,
        perPage: number = 10,
        fields: string = 'author,id,excerpt,title,link,slug,date',
    ) => {
        let query: string = `posts?page=${page}&per_page=${perPage}&_embed=1`
        if (category) {
            query += `&categories=${category}`;
        }
        return get<Post[]>(query)
    }

    // Get Single Post
    const getPost = async (slug: string) => {
        return get<Post[]>(`posts?slug=${slug}&_embed=1`)
    }

    // Get All Categories
    const getCategories = async (fields: string = "name,slug,count") => {
        return get<any>(`categories`);
    }

    // Get a single Category
    const getCategory = async (slug: string) => {
        return get<any>(`categories?slug=${slug}`)
    }

    return {
        get,
        getPosts,
        getCategories,
        getCategory,
        getPost
    }
}