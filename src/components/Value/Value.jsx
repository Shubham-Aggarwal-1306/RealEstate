import React, { useState } from 'react';
import './Value.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/accordion.jsx';


const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* LEFT Side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="value" />
                    </div>
                </div>
                {/* Right Side */}
                <div className="flexColStart v-right">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Value We Give to You</span>
                    <span className="secondaryText">
                        We always ready to help by providijng the best services for you.
                        <br />
                        We beleive a good blace to live can make your life better
                    </span>
                    <Accordion
                        className='accordion'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {data.map((item, index) => {
                            const [className, setClassName] = useState(null);
                            return (
                                <AccordionItem  className={`${className} accordionItem`} key={index} uuid={index}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>
                                            <AccordionItemState>
                                                {({ expanded }) => (expanded ? (setClassName('expanded')) : (setClassName('collapsed')))}
                                            </AccordionItemState>
                                            < div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">{item.heading}</span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>{item.detail}</AccordionItemPanel>
                                </AccordionItem>
                            )
                        }
                        )}

                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value
