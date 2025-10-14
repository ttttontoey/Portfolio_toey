import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const typedRef = useRef(null);
  const [consoleLines, setConsoleLines] = useState([]);
  const [currentTypingLine, setCurrentTypingLine] = useState('');

  useEffect(() => {
    // Typing effect untuk subtitle
    const texts = [
      "Business Analystr",
      "System Analyst",
      "Tester"
    ];

    let currentTextIndex = 0;
    let typeCharIndex = 0;
    let isDeleting = false;

    const typeText = () => {
      const currentText = texts[currentTextIndex];

      if (isDeleting) {
        typedRef.current.textContent = currentText.substring(0, typeCharIndex - 1);
        typeCharIndex--;

        if (typeCharIndex === 0) {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
        }
      } else {
        typedRef.current.textContent = currentText.substring(0, typeCharIndex + 1);
        typeCharIndex++;

        if (typeCharIndex === currentText.length) {
          isDeleting = true;
          setTimeout(typeText, 2000);
          return;
        }
      }

      setTimeout(typeText, isDeleting ? 50 : 100);
    };

    typeText();

    // Console typing effect
    const fullConsoleScript = [
      "> Name = \"Mongkolrach\";", 
      "> Skills = [\"React\", \"HTML\", \"CSS\"];",
      "> Passion = \"Business Analystr\";",
    ];

    let currentLineIndex = 0;
    let consoleCharIndex = 0;
    let completedLines = [];

    const typeConsoleLine = () => {
      if (currentLineIndex >= fullConsoleScript.length) {
        // Reset dan mulai ulang dari awal
        setTimeout(() => {
          setConsoleLines([]);
          setCurrentTypingLine('');
          currentLineIndex = 0;
          consoleCharIndex = 0;
          completedLines = [];
          setTimeout(typeConsoleLine, 1000);
        }, 3000);
        return;
      }

      const currentLine = fullConsoleScript[currentLineIndex];
      
      if (consoleCharIndex <= currentLine.length) {
        setCurrentTypingLine(currentLine.substring(0, consoleCharIndex));
        consoleCharIndex++;
        setTimeout(typeConsoleLine, 80);
      } else {
        // Line selesai, pindah ke line berikutnya
        completedLines.push(currentLine);
        setConsoleLines([...completedLines]);
        setCurrentTypingLine('');
        currentLineIndex++;
        consoleCharIndex = 0;
        setTimeout(typeConsoleLine, 500);
      }
    };

    // Mulai console typing setelah delay
    setTimeout(typeConsoleLine, 1000);

  }, []);

  return (
    <>
      {/* Custom CSS */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-bg {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
          position: relative;
          padding-top:80px;
          overflow: hidden;
        }
        
        .hero-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
        }
        
        .console-container {
          background: #1e1e1e;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          overflow: hidden;
          font-family: 'Courier New', monospace;
          position: relative;
        }
        
        .console-header {
          background: #2d2d2d;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .console-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .console-body {
          padding: 20px;
          color: #00ff00;
          font-size: 14px;
          line-height: 1.6;
          height: 300px;
          overflow-y: auto;
        }
        
        .profile-img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #667eea;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
          transition: transform 0.3s ease;
        }
        
        .profile-img:hover {
          transform: scale(1.05);
        }
        
        .btn-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .btn-gradient:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
          color: white;
        }
        
        .social-icons {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 20px;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: transform 0.3s ease;
          font-size: 18px;
        }
        
        .social-icon:hover {
          transform: translateY(-3px) scale(1.1);
          color: white;
        }
        
        .typing-cursor {
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }
        
        .shape {
          position: absolute;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }
        
        .shape:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .shape:nth-child(2) {
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }
        
        .shape:nth-child(3) {
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

         .scroll-down {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          font-size: 24px;
          animation: scrollFloat 2s ease-in-out infinite;
          transition: all 0.3s ease;
          z-index: 10;
        }   
        @keyframes scrollFloat {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin: -15px;
        }

        .col-lg-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 15px;
        }

        @media (max-width: 768px) {
          .col-lg-6 {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }

        .d-flex {
          display: flex;
        }

        .align-items-center {
          align-items: center;
        }

        .flex-wrap {
          flex-wrap: wrap;
        }

        .gap-3 {
          gap: 1rem;
        }

        .gap-4 {
          gap: 1.5rem;
        }

        .mb-3 {
          margin-bottom: 1rem;
        }

        .mb-4 {
          margin-bottom: 1.5rem;
        }

        .mb-5 {
          margin-bottom: 3rem;
        }

        .text-muted {
          color: #6c757d;
        }

        .text-white {
          color: white;
        }

        .ms-3 {
          margin-left: 1rem;
        }

        .me-2 {
          margin-right: 0.5rem;
        }

        .display-4 {
          font-size: 3.5rem;
          font-weight: 300;
          line-height: 1.2;
        }

        .h3 {
          font-size: 1.75rem;
        }

        .lead {
          font-size: 1.25rem;
          font-weight: 300;
        }

        .fw-bold {
          font-weight: 700;
        }

        .btn {
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .btn-lg {
          padding: 0.75rem 1.5rem;
          font-size: 1.125rem;
        }

        .px-4 {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        .py-2 {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }

        .btn-outline-dark {
          border: 2px solid #212529;
          color: #212529;
          background: transparent;
        }

        .btn-outline-dark:hover {
          background: #212529;
          color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <section className="hero-bg d-flex  align-items-center" data-aos-duration="1000" data-aos="fade-down" id='home'>
        <div className="floating-shapes">
          <div className="shape">
            <i className="bx bx-code-alt" style={{ fontSize: '60px', color: '#667eea' }}></i>
          </div>
          <div className="shape">
            <i className="bx bx-laptop" style={{ fontSize: '50px', color: '#764ba2' }}></i>
          </div>
          <div className="shape">
            <i className="bx bx-rocket" style={{ fontSize: '55px', color: '#667eea' }}></i>
          </div>
        </div>

        <div className="container hero-content" data-aos="fade-up" data-aos-duration="1000">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4" data-aos-delay="500" data-aos="fade-right">
                <h1 className="display-4 fw-bold mb-3">
                  Hi, I am <span className="gradient-text">Mongkolrach</span>
                </h1>
                <h2 className="h3 mb-4">
                  I'm a <span ref={typedRef} className="gradient-text"></span>
                  <span className="typing-cursor">|</span>
                </h2>
              </div>
            </div>

            <div className="col-lg-6" data-aos-delay="600" data-aos="fade-up">
              <div className="console-container mb-4">
                <div className="console-header">
                  <div className="console-dot" style={{ backgroundColor: '#ff5f56' }}></div>
                  <div className="console-dot" style={{ backgroundColor: '#ffbd2e' }}></div>
                  <div className="console-dot" style={{ backgroundColor: '#27ca3f' }}></div>
                  <span className="text-white ms-3">ยินดีต้อนรับเข้าสู่พอร์ตโฟลิโอของ Mongkolrach</span>
                </div>
                <div className="console-body">
                  {consoleLines.map((line, index) => (
                    <div key={index} style={{ marginBottom: '8px' }}>
                      {line.startsWith('>') ? (
                        <span>
                          <span style={{ color: '#ff6b6b' }}>&gt;</span>
                          <span style={{ color: '#ffffffff' }}>{line.substring(1)}</span>
                        </span>
                      ) : (
                        <span style={{ color: '#ffffffff' }}>{line}</span>
                      )}
                    </div>
                  ))}
                  
                  {currentTypingLine && (
                    <div style={{ marginBottom: '8px' }}>
                      {currentTypingLine.startsWith('>') ? (
                        <span>
                          <span style={{ color: '#ff6b6b' }}>&gt;</span>
                          <span style={{ color: '#ffffffff' }}>{currentTypingLine.substring(1)}</span>
                          <span className="typing-cursor" style={{ color: '#ffffffff' }}>_</span>
                        </span>
                      ) : (
                        <span>
                          <span style={{ color: '#dfdfdfff' }}>{currentTypingLine}</span>
                          <span className="typing-cursor" style={{ color: '#d0d0d0ff' }}>_</span>
                        </span>
                      )}
                    </div>
                  )}
                  
                  <div style={{ color: '#666', marginTop: '20px', fontSize: '12px' }}>
                    // Console is running...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="scroll-down" data-aos-delay="600" data-aos="fade-down">
          <i className="bx bx-chevron-down"></i>
        </a>
      </section>
    </>
  );
};

export default Hero;