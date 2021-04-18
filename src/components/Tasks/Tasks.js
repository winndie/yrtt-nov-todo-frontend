import React, { useState, useEffect } from 'react';
import { fetchData } from '../../functions/fetchData'
import './Tasks.css';
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
            <div className='row list'>
                {data === undefined ? <div>Loading...</div> :
                 data.length === 0 ? <div>No tasks found!</div> :
                    data.map((v, i) =>
                        <div key={v.id} className='col-lg-4 col-sm-6 item'>
                            {/* <video src={v.videoUrl} width='50%' height='35%' controls preload='none' /> */}
                            <span data-testid='taskIndex'>{i + 1}</span>
                            <div>
                                <span data-testid='task'>{v.task}</span>
                            </div>
                            <div>
                                <span>Guest: </span>
                                <span data-testid='guest'>{v.guest}</span>
                            </div>
                            <div className='col-auto'>
                                {v.tags.map(t => <span key={t} data-testid='tag'>{'・' + t}</span>)}
                            </div>
                            <div>
                                <span>Rating : </span>
                                <span>{v.averageUserRating.toLocaleString("en", { style: "percent" })}</span>
                            </div>
                        </div>
                    )}
            </div>
        </section >
    )
}

export default Tasks