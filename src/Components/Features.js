import React from 'react';
import FeatureCard from './FeatureCard';
import {MdMoneyOffCsred} from "react-icons/md";
import {FaInfinity} from "react-icons/fa";
import {IoMdSpeedometer} from "react-icons/io";


function Features() {
    return (
        <div id="features" className="mt-5 mx-auto">
            <h1 className="text-primary display-5 fw-bold">Features</h1>
            <div className="row mt-5">
                <FeatureCard title="Free" icon="💳"/>
                <FeatureCard title="Unlimited" icon="✔️"/>
                <FeatureCard title="Safe" icon="🔒"/>
                <FeatureCard title="Private" icon="🕵️"/>
                <FeatureCard title="Support" icon="👊"/>
                <FeatureCard title="Secure" icon="🔑"/>
                <FeatureCard title="Fast" icon="🚀"/>
                <FeatureCard title="No Data logs" icon="🙅‍♂️"/>
            </div>
        </div>
    )
}

export default Features
