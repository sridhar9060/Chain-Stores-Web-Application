import React from 'react';
import './ContentBar.css';
import {Link} from 'react-router-dom';
import {Button} from './Button'
export default function ContentBar({
    lightBg, topLine ,lightText,lightTextDesc,headline,description,
    buttonLabel , img , alt, imgStart
}){
return (
<>
<div className ={lightBg ? 'content-section':'content-sectiondarkBg'}>
    <div className='container'>
        <div className ='row' style={{display:'flex',flexDirection: imgStart ==='start'? 'row-reverse':'row'}}>
            <div className='col'>
                <div className='content-text-wrapper'>
                    <div className='top-line'>{topLine}</div>
                    <h1 className={lightText?'heading':'heading dark'}>
                    {headline}
                    </h1>
                    <p className={lightTextDesc ? 'content-subtitle':'content-subtitle dark'}>
                    {description}
                    </p>
                    <Link to ={'/'+buttonLabel}>
                        <Button buttonSize= 'btn-wide' buttonColor ='bule'>
                            {buttonLabel}
                        </Button>
                    </Link>

                </div>
            </div>
            <div className='col'>
                <div className='content-img-wrapper'>
                    <img src={img} alt={alt} className='content-img'/>
                </div>
            </div>
        </div>
    </div>
</div>
</>
)
}
