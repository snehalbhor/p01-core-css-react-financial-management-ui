import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md'
import "./Value.css"
import data from "../../utils/accordion"
const Value = () => {
    // const [className,setClassName]=useState(null)
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">

                <div className="v-left">
                    <div className="image2-container">
                        <img src="FM2.jpg" alt="" />
                    </div>
                </div>

                <div className="flexColStart v-right">
                    <span className='red-text'>Our Values</span>
                    <span className='primary-text'>Values We Add in your Life</span>
                    <span className='second-text'>We are Their to Server Better Quality of Life</span>

                    <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>

                        {
                            

                            data.map((item, i) => {

                                

                                
                                return (
                                    // <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                        <AccordionItem className="accordionItem" key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accordionbutton'>

                                                {/* <AccordionItemState>
                                                    {
                                                        ({ expanded }) => {
                                                            expanded ? setClassName("expanded") : setClassName("collapsed")

                                                        }
                                                    }
                                                </AccordionItemState> */}
                                                <div className="flexCenter icon">
                                                    {item.icon}
                                                </div>
                                                <span className="primary-text">
                                                    {item.heading}
                                                </span>

                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className='second-text'> {item.details}</p>
                                        </AccordionItemPanel>

                                    </AccordionItem>
                                )
                            }

                            )
                        }


                    </Accordion>
                </div>

            </div>
        </section>
    )
}

export default Value
