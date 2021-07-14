import React from "react";
import './index.css'
import { Row, Col } from 'antd'
import SERVICES from '../../image/features/SERVICES.png'
import ORACLE from '../../image/features/ORACLE.png'
import ARTWORKS from '../../image/features/ARTWORKS.png'
import DETECTION from '../../image/features/DETECTION.png'
import INFRASTRUCTURE from '../../image/features/INFRASTRUCTURE.png'
import CASES from  '../../image/features/CASES.png'
import FEES from '../../image/features/FEES.png'
import ROYALTIES from '../../image/features/ROYALTIES.png'
import SERVICESSolid from '../../image/features/SERVICESSolid.png'
import ORACLESolid from '../../image/features/ORACLESolid.png'
import ARTWORKSSolid from '../../image/features/ARTWORKSSolid.png'
import DETECTIONSolid from '../../image/features/DETECTIONSolid.png'
import INFRASTRUCTURESolid from '../../image/features/INFRASTRUCTURESolid.png'
import CASESSolid from  '../../image/features/CASESSolid.png'
import FEESSolid from '../../image/features/FEESSolid.png'
import ROYALTIESSolid from '../../image/features/ROYALTIESSolid.png'
import FeaturesBG from '../../image/features/features-bg.png'
import Dots from '../../image/features/dots.png'



function FeaturesPage() {
    return (
        <div className="features">
            <div className="features-content" data-aos="fade-up">
                <div className="features-content-item-img">
                    <img src={FeaturesBG} />
                    <img src={Dots} />
                </div>

            </div>
        </div>
    )
}

export default FeaturesPage
