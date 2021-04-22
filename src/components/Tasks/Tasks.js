import React, { useState, useEffect } from 'react';
import './Tasks.css';
import { fetchData } from '../../functions/fetchData'
import { getTopRatedTasksForTags } from '../../functions/getTopRatedTasksForTags';
import { searchForTasks } from '../../functions/searchForTasks';

function Tasks() {

    const [data, setData] = useState(undefined)
    const [param, setParam] = useState('')

    function loadData(e) {
        if (e === null) {
            useEffect(() => { fetchData(setData) }, [])
        }
        else {
            switch (e.target.className) {
                case 'btn btn-primary getTopRated':
                    param.length === 0 ? null :
                        setData(getTopRatedTasksForTags(data, param))
                    break
                case 'btn btn-primary searchAnything':
                    param.length === 0 ? null :
                        setData(searchForTasks(data, param))
                    break
                case 'btn btn-primary refresh':
                    setData(undefined)
                    fetchData(setData)
                    break
            }
        }
    }

    loadData(null)

    return (
        <section className='container container-margin'>
            <label htmlFor='inputSearch'>Search Tasks</label>
            <input
                type='input'
                id='inputSearch'
                className='form-control'
                value={param}
                onFocus={() => setParam('')}
                onChange={e => setParam(e.target.value)}
            />
            <div>
                <button className='btn btn-primary getTopRated'
                    onClick={loadData}>Get Top Rated Tasks For Tags</button>
            </div>
            <div>
                <button className='btn btn-primary searchAnything'
                    onClick={loadData}>Search For Tasks</button>
            </div>
            <div>
                <button className='btn btn-primary refresh'
                    onClick={loadData}>Refresh</button>
            </div>
            <ol>
                {data === undefined ? 'Loading...' :
                    data.length === 0 ? 'No tasks found!' :
                        data.map(v =>
                            <li data-testid='taskIndex' key={v.id}>
                                <div className='row'>
                                <div className='col-4' data-testid='task'>{v.task}</div>
                                <div className='col-4'>
                                <span>Rating : </span>
                                <span>{v.averageUserRating.toLocaleString("en", { style: "percent" })}</span>
                                </div>
                                <div className='col-4'>
                                <span>Guest: </span><span data-testid='guest'>{v.guest}</span>
                                </div>
                                </div>
                                {v.tags.map(t =>
                                    <span className='badge' key={t} data-testid='tag'>
                                        {'・' + t}</span>)}
                            </li>
                        )}
            </ol>
        </section >
    )
}

export default Tasks