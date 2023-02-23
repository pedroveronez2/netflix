import axios from "axios"

const api_key = '850bd873f4f7d8cbef26d42775cb28a4'
const api_base = 'https://api.themoviedb.org/3'

const pt_br = '&language=pt-BR'

const basicFetch = async (endpoint) => {
    const req = await axios.get(api_base + endpoint)
    const res = await req.data
    return res
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return [
            {
               slug: 'originais',
               title: 'Originais do Netflix',
               items: await basicFetch('/discover/tv?with_network=213' + pt_br + '&api_key=' + api_key)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch('/trending/all/week?' + pt_br + '&api_key=' + api_key)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch('/movie/top_rated?' + pt_br + '&api_key=' + api_key)
            },
            {
                slug: 'comedy',
                title: 'comedia',
                items: await basicFetch('/discover/movie?with_genres=28' + pt_br + '&api_key=' + api_key)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch('/discover/movie?with_genres=35' + pt_br + '&api_key=' + api_key)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch('/discover/movie?with_genres=27' + pt_br + '&api_key=' + api_key)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch('/discover/movie?with_genres=10749' + pt_br + '&api_key=' + api_key)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch('/discover/movie?with_genres=99' + pt_br + '&api_key=' + api_key)
            }
        ]
    }
}