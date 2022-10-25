import React from 'react'
import { actor } from './db'

const card = () => {

    const info = actor;

    return (
        <>
            <section key={"img"}>
                <img src={info.img} alt="" />
            </section>
            <section key={"personal-information"}>
                <h4>Personal information</h4>
                <ul>
                    <li>Name: {info.name}</li>
                    <li>Last name: {info.lastName}</li>
                    <li>Age: {info.age}</li>
                    <li>Nationlity: {info.nationality}</li>
                    <li>
                        Experince in movies
                        <ul>
                            {info.movies.map((movie, index) => <li key={index}>{movie}</li>)}
                        </ul>
                    </li>
                    <li>
                        Education
                        <ul>
                            {info.movies.map((education, index) => <li key={index}>{education}</li>)}
                        </ul>
                    </li>
                    <li>Bio: {info.bio}</li>
                </ul>
            </section>
        </>
    )
}

export default card