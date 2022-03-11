import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export default function Loader()  {
    var arr = [1,2,3,4];
    return (
        <>
            {arr.map((e)=>{
                    return <div className="col-md-3 py-2" key={e}>
                        <SkeletonTheme color="#d9d9d9">
                            <div className="card border-0" style={{height:"100%"}}>
                                <img src="/logo.png" className="card-img-top" style={{background:"black", padding:"50px 20px"}} alt="..." />
                                <div className="card-body">
                                    <h2 className="card-title">{<Skeleton />}</h2>
                                    <p className="card-text">
                                        <Skeleton /> 
                                        <Skeleton /> 
                                        <Skeleton width={120} />
                                    </p>
                                    <p className="card-text"><small className="text-muted"><Skeleton width={200} /></small></p>
                                    <Skeleton width={150} height={30} />
                                </div>
                            </div>
                        </SkeletonTheme>
                    </div>
            })}
        </>
    )
}
