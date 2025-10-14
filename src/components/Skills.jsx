import { useState, useEffect } from "react";

const Skills = () => {
    const [activeTab, setActiveTab] = useState('technical');
    const [animatedBars, setAnimatedBars] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedBars(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const technicalSkills = [
        {
            name: 'HTML',
            icon: 'bxl-html5',
        },
        {
            name: 'CSS',
            icon: 'bxl-css3',
        },
        {
            name: 'JavaScript',
            icon: 'bxl-javascript',
        },
        {
            name: 'Bootstrap',
            icon: 'bxl-bootstrap',
        },
        {
            name: 'React',
            icon: 'bxl-react',
        },
        {
            name: 'PHP',
            icon: 'bxl-php',
        },
        {
            name: 'Node.js',
            icon: 'bxl-nodejs',
        },
        {
            name: 'Python',
            icon: 'bxl-python',
        },
        {
            name: 'Dart',
            icon: 'bxl-dev-to',
        },
        {
            name: 'Tailwind CSS',
            icon: 'bxl-tailwind-css',
        },
        {
            name: 'MySQL',
            icon: 'bxs-data',
        },
        {
            name: 'MongoDB',
            icon: 'bxl-mongodb',
        }
    ];

    const softSkills = [
        {
            name: 'Git',
            icon: 'bxl-git',
        },
        {
            name: 'GitHub',
            icon: 'bxl-github',
        },
        {
            name: 'VS Code',
            icon: 'bxl-visual-studio',
        },
        {
            name: 'Google Colab',
            icon: 'bxl-google',
        },
        {
            name: 'Canva',
            icon: 'bxl-dribbble',
        },
        {
            name: 'Figma',
            icon: 'bxl-figma',
        }
    ];
    return (
        <>
            <style jsx>{`
                .skills-bg {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    position: relative;
                    overflow: hidden;
                }
                
                .skills-bg::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                    z-index: 1;
                }
                
                .skills-content {
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
                
                .skill-tabs {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 3rem;
                    background: white;
                    border-radius: 15px;
                    padding: 8px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    max-width: 400px;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                .tab-btn {
                    flex: 1;
                    padding: 12px 20px;
                    border: none;
                    background: transparent;
                    color: #6c757d;
                    font-weight: 600;
                    border-radius: 10px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                
                .tab-btn.active {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
                }
                
                .skill-card {
                    background: white;
                    border-radius: 20px;
                    padding: 2rem 1rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    transition: all 0.3s ease;
                    height: auto;               /* ✅ ไม่ fix สูงเกินไป */
                    border: 1px solid rgba(0,0,0,0.05);
                    text-align: center;         /* ✅ จัดกลาง */
                }
                
                .skill-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
                }
                
                .skill-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }
                
                .skill-icon {
                    .skill-icon {
                        width: 70px;
                        height: 70px;
                        border-radius: 15px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-size: 32px;
                        margin: 0 auto;            /* ✅ จัดกลาง */
                    }
                
                .skill-icon::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    transition: left 0.5s ease;
                }
                
                .skill-card:hover .skill-icon::before {
                    left: 100%;
                }
                
                .skill-info h4 {
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 0.5rem;
                    font-size: 1.3rem;
                }
                .skill-description {
                    color: #6c757d;
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }
                
                .skill-progress {
                    margin-bottom: 1rem;
                }
                
                .progress-label {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }
                
                .progress-text {
                    font-weight: 600;
                    color: #2c3e50;
                }
                
                .progress-percentage {
                    font-weight: 700;
                    color: #667eea;
                }
                
                .progress-bar-container {
                    height: 8px;
                    background: #e9ecef;
                    border-radius: 10px;
                    overflow: hidden;
                    position: relative;
                }
                
                .progress-bar {
                    height: 100%;
                    border-radius: 10px;
                    transition: width 2s ease-in-out;
                    position: relative;
                    overflow: hidden;
                }
                
                .progress-bar::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    animation: shimmer 2s infinite;
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                .soft-skill-card {
                    background: white;
                    border-radius: 20px;
                    padding: 2rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    transition: all 0.3s ease;
                    height: 100%;
                    text-align: center;
                    border: 1px solid rgba(0,0,0,0.05);
                }
                
                .soft-skill-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
                }
                
                .soft-skill-icon {
                    width: 80px;
                    height: 80px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 36px;
                    margin: 0 auto 1.5rem;
                    position: relative;
                    overflow: hidden;
                }
                
                .soft-skill-icon::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    transition: left 0.5s ease;
                }
                
                .soft-skill-card:hover .soft-skill-icon::before {
                    left: 100%;
                }
                
                .soft-skill-title {
                    font-weight: 700;
                    color: #2c3e50;
                    font-size: 1.2rem;
                    margin-top: 0.8rem;
                }
                
                .soft-skill-description {
                    color: #6c757d;
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }
                
                .circular-progress {
                    position: relative;
                    width: 80px;
                    height: 80px;
                    margin: 0 auto;
                }
                
                .circular-progress svg {
                    width: 80px;
                    height: 80px;
                    transform: rotate(-90deg);
                }
                
                .circular-progress circle {
                    fill: none;
                    stroke-width: 6;
                    stroke-linecap: round;
                }
                
                .circle-bg {
                    stroke: #e9ecef;
                }
                
                .circle-progress {
                    stroke: url(#gradient);
                    stroke-dasharray: 251.2;
                    stroke-dashoffset: 251.2;
                    transition: stroke-dashoffset 2s ease-in-out;
                }
                
                .progress-text-center {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-weight: 700;
                    color: #2c3e50;
                    font-size: 1rem;
                }
                
                @media (max-width: 768px) {
                    .skill-tabs {
                        flex-direction: column;
                        max-width: 300px;
                    }
                    
                    .section-title {
                        font-size: 2rem;
                    }
                }
            `}</style>

            <section className="skills-bg py-5" id="skills">
                <div className="container skills-content">
                    <div className="text-center mb-5" data-aos="fade-up">
                        <h2 className="section-title">My Skills</h2>
                    </div>

                    <div className="skill-tabs" data-aos="fade-up" data-aos-delay="200">
                        <button 
                            className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
                            onClick={() => setActiveTab('technical')}
                        >
                            <i className="bx bx-code-alt me-2"></i>
                            Tech Stack
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'soft' ? 'active' : ''}`}
                            onClick={() => setActiveTab('soft')}
                        >
                            <i className="bx bx-cog me-2"></i>
                            Tools
                        </button>
                    </div>

                    {activeTab === 'technical' && (
                        <div className="row" data-aos="fade-up" data-aos-delay="400">
                            {technicalSkills.map((skill, index) => (
                                <div key={index} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={500 + index * 100}>
                                    <div className="skill-card text-center">
                                        <div
                                            className="skill-icon mx-auto mb-3"
                                            style={{ background: skill.color }}
                                        >
                                            <i className={`bx ${skill.icon}`}></i>
                                        </div>
                                        <h4 className="skill-title">{skill.name}</h4>
                                    </div>
                                </div>
                            ))}

                        </div>
                    )}

                    {activeTab === 'soft' && (
                        <div className="row" data-aos="fade-up" data-aos-delay="400">
                            {softSkills.map((skill, index) => (
                                <div key={index} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={500 + index * 100}>
                                    <div className="skill-card text-center">
                                        <div
                                            className="skill-icon mx-auto mb-3"
                                            style={{ background: skill.color }}
                                        >
                                            <i className={`bx ${skill.icon}`}></i>
                                        </div>
                                        <h4 className="skill-title">{skill.name}</h4>
                                    </div>
                                </div>
                            ))}

                        </div>
                    )}
                </div>

                <svg width="0" height="0" style={{ position: 'absolute' }}>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#667eea" />
                            <stop offset="100%" stopColor="#764ba2" />
                        </linearGradient>
                    </defs>
                </svg>
            </section>
        </>
    );
};

export default Skills;