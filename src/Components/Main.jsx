import React, {useEffect} from 'react'
import * as Qs from 'querystring'
import {API_URL} from '../utils/constants'
import Levers from './Levers/Levers'
import Display from './Display/Display'
import './Main.css'

const Main = (props) => {
    useEffect (() => {
        const apiCall = async () => {
            const response = await fetch(API_URL)
            const fetchedLevers = await response.json()
            let urlData = Qs.parse(props.location.search)

            if (Object.keys(urlData).length > 0) {
                urlData = urlData.levers.match(/[0-9]{1,2}/g)     
                fetchedLevers.forEach((e, i) => e.value = urlData[i])
            }
            else {fetchedLevers.forEach(e => e.value = '00')}
        }
        apiCall() //eslint-disable-next-line
    }, []) 

    return (
        <main className="main">
            <Levers />
            <Display />
        </main>
    )
}

export default Main