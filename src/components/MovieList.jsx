import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../api/tmbd'
import Moviecard, { SeriesCard } from '../components/Moviecard';
const MovieList = () => {
    const [popularMovies, setPopularMovies] = useState([])
    const [trendingMovies, setTrendingMovies] = useState([])
    const [series, setSeries] = useState([])
      useEffect(() => {
        const fetchPopularMovies = async () => {
            try{
                const {data} = await axios.get("movie/popular")
                setPopularMovies(data.results)
            }catch(err) {
                console.log(err)
            }
        }
        const fetchTrendingMovies = async () => {
            try{
                const {data} = await axios.get("trending/all/day")
                setTrendingMovies(data.results)
            }catch(err) {
                console.log(err)
            }
        }

        const fetchSeries = async () => {
            const {data} = await axios.get("tv/airing_today")
            setSeries(data.results)
        }
        fetchSeries()
        fetchTrendingMovies()
        fetchPopularMovies()
       
      }, [])
  return (
    <section className='p-4'>
        <div className="my-5">
            <h3 className='font-bold pb-5 text-3xl text-center md:text-left' >Popular</h3>
            <hr />
            <div className='grid md:grid-cols-4 grid-cols mt-5'>
            
                {popularMovies.map((movie, index) => {
                    return <Moviecard key={index} {...movie} />
                })}
            </div>
        </div>

        <div className="p-4">
            <h3 className='font-bold mb-5 text-3xl text-center md:text-left' >Trending Movies</h3>
            <hr />
            <div className='grid md:grid-cols-4 grid-cols mt-5'>
            
                {trendingMovies.map((movie, index) => {
                    return <Moviecard key={index} {...movie} />
                })}
            </div>
        </div>

        <div className="p-4">
            <h3 className='font-bold mb-5 text-3xl text-center md:text-left' >Series</h3>
            <hr />
            <div className='grid md:grid-cols-4 grid-cols  mt-5'>
            
                {series.map((movie, index) => {
                    return <SeriesCard key={index} {...movie} />
                })}
            </div>
        </div>
        
        
    </section>
  
  )
}

export default MovieList