import { use, useEffect } from "react";
import { initTooltips } from "../functions/Tooltip";

const About = () => {
    useEffect(() => {
        initTooltips();
    }, []);
    return (
        <>
            <style jsx>{`
        .about-bg {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            position: relative;
            overflow: hidden;
        }
        
        .about-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            z-index: 1;
        }
        
        .about-content {
            position: relative;
            z-index: 2;
        }
        
        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #2c3e50;
            position: relative;
            display: inline-block;
            margin-bottom: 1rem;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 2px;
        }
        
        .profile-container {
            position: relative;
        }
        
        .profile-img {
            width: 400px;
            height: 600px;
            border-radius: 20px;
            object-fit: cover;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        
        .profile-img:hover {
            transform: translateY(-10px);
        }
        
        .experience-card {
            position: absolute;
            bottom: -20px;
            left: -20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px 25px;
            border-radius: 15px;
            box-shadow: 0 15px 30px rgba(102, 126, 234, 0.3);
            text-align: center;
            min-width: 120px;
        }
        
        .experience-number {
            font-size: 2.5rem;
            font-weight: bold;
            line-height: 1;
            margin-bottom: 5px;
        }
        
        .experience-text {
            font-size: 0.9rem;
            opacity: 0.9;
            margin: 0;
        }
        
        .about-text {
            color: #6c757d;
            line-height: 1.8;
            font-size: 1.1rem;
            margin-bottom: 2rem;
        }
        
        .info-item {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            padding: 0.5rem 0;
        }
        
        .info-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-right: 1rem;
            font-size: 18px;
        }
        
        .info-label {
            font-weight: 600;
            color: #2c3e50;
            min-width: 120px;
        }
        
        .info-value {
            color: #6c757d;
        }
        
        .skill-item {
            background: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            margin-bottom: 1rem;
            transition: all 0.3s ease;
            border-left: 4px solid transparent;
        }
        
        .skill-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            border-left-color: #667eea;
        }
        
        .skill-icon {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
            margin-right: 1rem;
        }
        
        .skill-title {
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 0.5rem;
        }
        
        .skill-desc {
            color: #6c757d;
            font-size: 0.9rem;
            margin: 0;
        }
        
        .btn-gradient {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none;
            color: white;
            padding: 12px 30px;
            border-radius: 25px;
            font-weight: 600;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .btn-gradient:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
            color: white;
        }
        
        .stats-container {
            background: white;
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            margin-top: 2rem;
        }
        
        .stat-item {
            text-align: center;
        }
        
        .stat-number {
            font-size: 2.5rem;
            font-weight: bold;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
        }
        
        .stat-label {
            color: #6c757d;
            font-weight: 500;
        }
        
        .approach-card {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            margin-bottom: 2rem;
            transition: transform 0.3s ease;
        }
        
        .approach-card:hover {
            transform: translateY(-5px);
        }
        
        .approach-icon {
            width: 60px;
            height: 60px;
            border-radius: 15px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 28px;
            margin-bottom: 1.5rem;
        }
        
        .approach-title {
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 1rem;
        }
        
        .approach-desc {
            color: #6c757d;
            line-height: 1.6;
        }
        `}</style>

            <section className="about-bg py-5" data-aos-duration="1000" id="about" data-aos="fade-down">
                <div className="container about-content">
                    <div className="text-center mb-5" data-aos-delay="600" data-aos="fade-up">
                        <h2 className="section-title">About Me</h2>
                    </div>

                    <div className="row align-items-center">

                        <div className="col-lg-5 mb-6 mb-lg-0">
                            <div className="profile-container text-center" data-aos-delay="500" data-aos="fade-left">
                                <img
                                    src="/profile.jpg"
                                    alt="Mongkolrach Profile"
                                    className="profile-img"
                                />
                            </div>
                        </div>

                        <div className="col-lg-7" data-aos-delay="800" data-aos="fade-down">
                            <div className="mb-4" data-aos="fade-down" data-aos-delay="600">
                                <h3 className="h4 fw-bold text-dark mb-3">Who am I?</h3>
                                <p className="about-text">
                                    I’m a detail-oriented and creative thinker who loves turning complex ideas into simple,
                                    elegant solutions. With a passion for technology, analysis, and design,
                                    I enjoy exploring new ways to solve problems while keeping things minimal and organized.

                                </p>
                                <p className="about-text">
                                    I’m also attentive and empathetic, valuing meaningful connections and experiences.
                                    I strive to combine precision with creativity, making every project not just functional,
                                    but thoughtful and impactful.
                                </p>
                            </div>

                            <div className="mb-4" data-aos-delay="500" data-aos="fade-down">
                                <h4 className="h5 fw-bold text-dark mb-3">Personal Info</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="info-item">
                                            <div className="info-icon">
                                                <i className="bx bx-user"></i>
                                            </div>
                                            <div>
                                                <span className="info-label">Name:</span>
                                                <span className="info-value"> Mongkolrach Wadsuntad</span>
                                            </div>
                                        </div>
                                        <div className="info-item">
                                            <div className="info-icon">
                                                <i className="bx bx-map"></i>
                                            </div>
                                            <div>
                                                <span className="info-label">Location:</span>
                                                <span className="info-value"> Bangkok , Thailand</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-item">
                                            <div className="info-icon">
                                                <i className="bx bx-envelope"></i>
                                            </div>
                                            <div>
                                                <span className="info-label">Email:</span>
                                                <span className="info-value"> tontoeyrb92@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="info-item">
                                            <div className="info-icon">
                                                <i className="bx bx-phone"></i>
                                            </div>
                                            <div>
                                                <span className="info-label">Phone:</span>
                                                <span className="info-value">+66 92 893 4814</span>
                                            </div>
                                        </div>
                                        <div className="info-item">
                                            <div className="info-icon">
                                                <i className="bx bx-briefcase"></i>
                                            </div>
                                            <div>
                                                <span className="info-label">Status:</span>
                                                <span className="info-value"> in education</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="mb-4 d-flex gap-3" data-aos-delay="400" data-aos="fade-right">
                                <a
                                    href="/Portfolio.pdf"
                                    className="btn-gradient"
                                    download
                                    data-bs-toggle="tooltip"
                                    title="Download My Portfolio"
                                >
                                    <i className="bx bx-download"></i>
                                    Download My Portfolio
                                </a>
                                <a
                                    href="/Transcript.pdf"
                                    className="btn-gradient"
                                    download
                                    data-bs-toggle="tooltip"
                                    title="Download My Transcript"
                                >
                                    <i className="bx bx-download"></i>
                                    Download My Transcript
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <div className="text-center mb-5" data-aos-duration="600" data-aos="fade-down">
                            
                            <h3 className="section-title">My Strengths</h3>
                        </div>

                        <div className="row" data-aos-delay="500" data-aos="fade-up">
                            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-left">
                                <div className="approach-card">
                                    <div className="approach-icon">
                                        <i class='bx  bx-crown'></i> 
                                    </div>
                                    <h5 className="approach-title">Leadership</h5>
                                    <p className="approach-desc">
                                        Able to guide teams effectively, motivate others, and achieve goals efficiently.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="approach-card">
                                    <div className="approach-icon">
                                        <i class='bx  bx-glasses-alt'  ></i>
                                    </div>
                                    <h5 className="approach-title">Attention to Detail</h5>
                                    <p className="approach-desc">
                                        Meticulous and organized, minimizing errors and managing complex tasks smoothly.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="approach-card">
                                    <div className="approach-icon">
                                        <i className="bx bx-bulb"></i>
                                    </div>
                                    <h5 className="approach-title">Analytical & Problem-Solving Skills</h5>
                                    <p className="approach-desc">
                                        Assess situations, identify issues, and implement effective solutions.
                                    </p>
                                </div>
                            </div> <div className="col-lg-4 col-md-6 mb-4">
                                <div className="approach-card">
                                    <div className="approach-icon">
                                        <i className="bx bx-happy-beaming"></i>
                                    </div>
                                    <h5 className="approach-title">Communication & Teamwork</h5>
                                    <p className="approach-desc">
                                        Understand team and stakeholder needs, fostering smooth collaboration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;