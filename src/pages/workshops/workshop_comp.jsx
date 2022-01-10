import React, { useEffect } from 'react';
import Header from '../../components/Header';
import TitleBackground from '../../images/background/workshop.jpg';
import aiWorkshopImage from '../../images/resource/ml&ai.jpg';
import './styles.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import Footer from '../../components/Footer';

const Workshop_comp = (props) => {

    return (


        <div
            className="news-block news-block-style col-lg-5 col-md-6 col-sm-12 wow fadeInUp "
            dataWowDelay="400ms"
        >
            <div className="image-box" style={{ padding: '8% 5% 3% 5%', borderRadius: '12px', overflow: 'hidden' }}>
                <figure className="image" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <a href="#">
                        <img src={aiWorkshopImage} alt="" style={{ width: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                    </a>
                </figure>
            </div>

            <div className="lower-content" style={{ textAlign: 'left' }}>
                <h4>
                    <a
                        href="#"
                        style={{
                            fontSize: '25px',
                            paddingTop: '5px',
                            fontFamily: `-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,
                            textAlign: 'center',
                            textDecoration: 'none',
                        }}
                    >
                        {props.name}
                    </a>
                </h4>
                <div className="text" style={{ marginBottom: '6px' }}>
                    <span
                        style={{
                            color: '#000',
                            fontWeight: '700',
                            fontSize: '20px',
                        }}
                    >
                        Start Date:{' '}
                    </span>
                    <span
                        style={{
                            color: '#000',
                            fontSize: '17px',
                            fontWeight: 'normal',
                        }}
                    >
                        {props.startDate}
                    </span>
                </div>
                <div className="text" style={{ marginBottom: '6px' }}>
                    <span
                        style={{
                            color: '#000',
                            fontWeight: '700',
                            fontSize: '20px',
                        }}
                    >
                        End Date:{' '}
                    </span>
                    <span
                        style={{
                            color: '#000',
                            fontSize: '17px',
                            fontWeight: 'normal',
                        }}
                    >
                        {props.endDate}
                    </span>
                </div>
                <div className="text" style={{ marginBottom: '6px' }}>
                    <span
                        style={{
                            color: '#000',
                            fontWeight: '700',
                            fontSize: '20px',
                        }}
                    >
                        Fees:{' '}
                    </span>
                    <span
                        style={{
                            color: '#000',
                            fontSize: '17px',
                            fontWeight: 'normal',
                        }}
                    >
                        &#8377; {props.fee}
                    </span>
                </div>

                <center
                    style={{
                        height: '50px',
                        paddingBottom: '60px',
                        paddingTop: '15px',
                    }}
                >
                    <div className="btn-box">
                        <button
                            type="button"
                            className="btn btn-lg btn-primary"
                            disabled
                        >
                            Coming soon
                        </button>
                    </div>
                    <br />
                    <br />
                </center>
            </div>
        </div>
    );
};

export default Workshop_comp