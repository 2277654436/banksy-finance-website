import Arrow from "../../image/upgrade/arrow.png";
import Image1 from "../../image/upgrade/1.png";
import Image2 from "../../image/upgrade/2.png";
import Image3 from "../../image/upgrade/3.png";
import SpinImg from "../../image/upgrade/spinImg.png";

const support = () => {
    return (
        <div className="support">
            <div className="support-title" data-aos="fade-right">
                <img src={Arrow}/>
                <div>SUPPORT A VARIETY OF</div>
                <div>NFTS POOL-BASE LENDING</div>
            </div>

            <div className="right-area" data-aos="zoom-in">
                <img src={Image1}/>
                <img src={Image2}/>
                <img src={Image3}/>
                <div className="kindBacBall">
                    <img src={SpinImg}/>
                </div>
            </div>
        </div>
    )
}

export default support
