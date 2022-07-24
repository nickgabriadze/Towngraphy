import React, {useState} from 'react';
import './privacy.css';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
export function PrivacyPolicy(){
    const [clicked, setClicked] = useState(false)
    return(
    <>
    <div className="privacy-div">
    <motion.div  layout transition={{layout: {duration:0.8}}} id="mainBox"   onClick={() => setClicked(!clicked)}>
        <motion.p id="header"layout="position">Website uses Framer Motion Animations</motion.p>
        
        <div>
    {clicked ? <motion.div layout="position" id="privacy" style={{'textAlign':'center'}}>
    The MIT License (MIT)

Copyright (c) 2018 Framer B.V.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
    </motion.div>: ''}
    </div>
    </motion.div>
    <motion.p style={{'paddingTop': '10px'}}><Link to="/" id="back"><FontAwesomeIcon icon={faArrowLeft}/> Back to Game</Link></motion.p>
    </div>

    </>

    );
}