import React from 'react'

const footer = (props) => {
    return (
        <footer >
            <div className='list-footer'>
                <div className='list'>

                    <ul>
                        <li>UFU</li>
                        <li>{props.link1}</li>
                        <li>{props.link2}</li>
                        <li>{props.link4}</li>
                        <li>{props.link5}</li>
                        <li>{props.link6}</li>
                        <li>{props.link7}</li>
                        <li>{props.link8}</li>
                        <li>{props.link9}</li>
                        <li>{props.link10}</li>
                    </ul>
                    <ul>
                        <li>LTAD</li>
                        <li>{props.link1}</li>
                        <li>{props.link2}</li>
                        <li>{props.link3}</li>
                        <li>{props.link7}</li>
                        <li>{props.link8}</li>
                        <li>{props.link9}</li>
                        <li>{props.link10}</li>
                    </ul>
                    <ul>
                        <li>Embrapii</li>
                        <li>{props.link1}</li>
                        <li>{props.link2}</li>
                        <li>{props.link3}</li>

                        <li>{props.link8}</li>
                        <li>{props.link9}</li>
                        <li>{props.link10}</li>
                    </ul>
                    <ul>
                        <li>Conheça nossos projetos</li>
                        <li>{props.link1}</li>
                        <li>{props.link3}</li>
                        <li>{props.link4}</li>
                        <li>{props.link5}</li>
                        <li>{props.link6}</li>
                        <li>{props.link7}</li>
                        <li>{props.link8}</li>
                        <li>{props.link9}</li>
                        <li>{props.link10}</li>
                    </ul>

                </div>
          
            </div>
            <div className='footer-end'>
                <div>
                 <div> <img src="./src/images/footer1.png" alt="" /></div>
                <div><img src="./src/images/footer2.png" alt="" /></div>
                </div>
            </div>  
        </footer>
    )
}

export default footer
