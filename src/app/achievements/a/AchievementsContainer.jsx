import React from 'react';
import './AchievementsContainer.css';

function AchievementsContainer() {
    return (
        <>
            {/* Achievements */}
            <div className = 'container-title'>
                <div className = 'achievement-title'>
                    <svg className = 'svg-a' width = '72' height = '61' viewBox = '0 0 72 61' fill = 'none' xmlns = 'http://www.w3.org/2000/svg'>
                        <path d = 'M36 0L72 61L36.0014 39.3111L0 61L36 0Z' fill = '#D9D9D9'/>
                    </svg>
                    <h1 className = 'title-text'>CHIEVEMENTS</h1>
                </div>
                <div className = 'underline'></div>
            </div>

            {/* Section 1 */}
            <div className = 'section'>
                <img className = 'achievement-image' src = 'https://www.santevet.es/uploads/images/es_ES/razas/gatocomuneuropeo.jpeg'/>

                <div className = 'achievement-text'>
                    <div className = 'top-text'>
                        <h1 className = 'achievement-year'>2023</h1>
                        <div className = 'achievement-count'>
                            <h1 className = 'achievement-number'>4</h1>
                            <svg className = 'medal' width = '48' height = '48' viewBox = '0 0 48 48' fill = 'none' xmlns = 'http://www.w3.org/2000/svg'>
                                <path d = 'M30.001 36.6C29.101 36.6 28.501 36.3 27.601 36L24.001 34.5L20.401 36C19.801 36.3 18.901 36.6 18.001 36.6C17.401 36.6 17.101 36.6 16.501 36.3L15.001 48L24.001 42L33.001 48L31.201 36.3C30.901 36.6 30.301 36.6 30.001 36.6ZM38.701 17.7C38.401 17.1 38.401 16.2 38.701 15.6L40.501 12C41.101 10.8 40.501 9.3 39.001 8.7L35.101 7.2C34.501 6.9 33.901 6.3 33.601 5.7L32.101 1.8C31.801 0.6 30.901 0 30.001 0C29.701 0 29.101 0 28.801 0.3L24.901 2.1H24.001C23.701 2.1 23.401 2.1 23.101 1.8L19.201 0.3C18.901 0 18.301 0 18.001 0C17.101 0 16.201 0.6 15.601 1.5L14.101 5.7C14.101 6.3 13.501 6.9 12.901 7.2L8.70101 8.7C7.50101 9 6.90101 10.5 7.50101 12L9.30101 15.9C9.60101 16.5 9.60101 17.4 9.30101 18L7.50101 21.6C6.90101 22.8 7.50101 24.3 9.00101 24.9L12.901 26.4C13.501 26.7 14.101 27.3 14.401 27.9L15.901 31.8C16.201 33 17.101 33.6 18.001 33.6C18.301 33.6 18.601 33.6 18.901 33.3L22.801 31.5C23.101 31.5 23.401 31.2 23.701 31.2C24.001 31.2 24.301 31.2 24.601 31.5L28.501 33.3C28.801 33.6 29.101 33.6 29.401 33.6C30.301 33.6 31.201 33 31.801 32.1L33.301 28.2C33.601 27.6 34.201 27 34.801 26.7L38.701 25.2C39.901 24.6 40.801 23.1 40.201 21.9L38.701 17.7ZM24.001 28.8C17.401 28.8 12.001 23.4 12.001 16.8C12.001 10.2 17.401 4.8 24.001 4.8C30.601 4.8 36.001 10.2 36.001 16.8C36.001 23.4 30.601 28.8 24.001 28.8Z' fill = 'white'/>
                                <path d = 'M33 16.8C33 19.187 32.0518 21.4761 30.364 23.164C28.6761 24.8518 26.3869 25.8 24 25.8C21.6131 25.8 19.3239 24.8518 17.636 23.164C15.9482 21.4761 15 19.187 15 16.8C15 14.4131 15.9482 12.1239 17.636 10.436C19.3239 8.74821 21.6131 7.8 24 7.8C26.3869 7.8 28.6761 8.74821 30.364 10.436C32.0518 12.1239 33 14.4131 33 16.8Z' fill = 'white'/>
                            </svg>
                        </div>
                    </div>
                    <div className = 'content-text'>
                        <span className = 'highlighted-text'>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat.
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className = 'section'>
                <div className = 'achievement-text'>
                    <div className = 'top-text'>
                        <h1 className = 'achievement-year'>2022</h1>
                        <div className = 'achievement-count'>
                            <h1 className = 'achievement-number'>2</h1>
                            <svg className = 'medal' width = '48' height = '48' viewBox = '0 0 48 48' fill = 'none' xmlns = 'http://www.w3.org/2000/svg'>
                                <path d = 'M30.001 36.6C29.101 36.6 28.501 36.3 27.601 36L24.001 34.5L20.401 36C19.801 36.3 18.901 36.6 18.001 36.6C17.401 36.6 17.101 36.6 16.501 36.3L15.001 48L24.001 42L33.001 48L31.201 36.3C30.901 36.6 30.301 36.6 30.001 36.6ZM38.701 17.7C38.401 17.1 38.401 16.2 38.701 15.6L40.501 12C41.101 10.8 40.501 9.3 39.001 8.7L35.101 7.2C34.501 6.9 33.901 6.3 33.601 5.7L32.101 1.8C31.801 0.6 30.901 0 30.001 0C29.701 0 29.101 0 28.801 0.3L24.901 2.1H24.001C23.701 2.1 23.401 2.1 23.101 1.8L19.201 0.3C18.901 0 18.301 0 18.001 0C17.101 0 16.201 0.6 15.601 1.5L14.101 5.7C14.101 6.3 13.501 6.9 12.901 7.2L8.70101 8.7C7.50101 9 6.90101 10.5 7.50101 12L9.30101 15.9C9.60101 16.5 9.60101 17.4 9.30101 18L7.50101 21.6C6.90101 22.8 7.50101 24.3 9.00101 24.9L12.901 26.4C13.501 26.7 14.101 27.3 14.401 27.9L15.901 31.8C16.201 33 17.101 33.6 18.001 33.6C18.301 33.6 18.601 33.6 18.901 33.3L22.801 31.5C23.101 31.5 23.401 31.2 23.701 31.2C24.001 31.2 24.301 31.2 24.601 31.5L28.501 33.3C28.801 33.6 29.101 33.6 29.401 33.6C30.301 33.6 31.201 33 31.801 32.1L33.301 28.2C33.601 27.6 34.201 27 34.801 26.7L38.701 25.2C39.901 24.6 40.801 23.1 40.201 21.9L38.701 17.7ZM24.001 28.8C17.401 28.8 12.001 23.4 12.001 16.8C12.001 10.2 17.401 4.8 24.001 4.8C30.601 4.8 36.001 10.2 36.001 16.8C36.001 23.4 30.601 28.8 24.001 28.8Z' fill = 'white'/>
                                <path d = 'M33 16.8C33 19.187 32.0518 21.4761 30.364 23.164C28.6761 24.8518 26.3869 25.8 24 25.8C21.6131 25.8 19.3239 24.8518 17.636 23.164C15.9482 21.4761 15 19.187 15 16.8C15 14.4131 15.9482 12.1239 17.636 10.436C19.3239 8.74821 21.6131 7.8 24 7.8C26.3869 7.8 28.6761 8.74821 30.364 10.436C32.0518 12.1239 33 14.4131 33 16.8Z' fill = 'white'/>
                            </svg>
                        </div>
                    </div>
                    <div className = 'content-text'>
                        <span className = 'highlighted-text'>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat.
                    </div>
                </div>

                <img className = 'achievement-image' src = 'https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg'/>
            </div>

            {/* Section 3 */}
            <div className = 'section'>
                <img className = 'achievement-image' src = 'https://www.santevet.es/uploads/images/es_ES/razas/gatocomuneuropeo.jpeg'/>

                <div className = 'achievement-text'>
                    <div className = 'top-text'>
                        <h1 className = 'achievement-year'>2021</h1>
                        <div className = 'achievement-count'>
                            <h1 className = 'achievement-number'>5</h1>
                            <svg className = 'medal' width = '48' height = '48' viewBox = '0 0 48 48' fill = 'none' xmlns = 'http://www.w3.org/2000/svg'>
                                <path d = 'M30.001 36.6C29.101 36.6 28.501 36.3 27.601 36L24.001 34.5L20.401 36C19.801 36.3 18.901 36.6 18.001 36.6C17.401 36.6 17.101 36.6 16.501 36.3L15.001 48L24.001 42L33.001 48L31.201 36.3C30.901 36.6 30.301 36.6 30.001 36.6ZM38.701 17.7C38.401 17.1 38.401 16.2 38.701 15.6L40.501 12C41.101 10.8 40.501 9.3 39.001 8.7L35.101 7.2C34.501 6.9 33.901 6.3 33.601 5.7L32.101 1.8C31.801 0.6 30.901 0 30.001 0C29.701 0 29.101 0 28.801 0.3L24.901 2.1H24.001C23.701 2.1 23.401 2.1 23.101 1.8L19.201 0.3C18.901 0 18.301 0 18.001 0C17.101 0 16.201 0.6 15.601 1.5L14.101 5.7C14.101 6.3 13.501 6.9 12.901 7.2L8.70101 8.7C7.50101 9 6.90101 10.5 7.50101 12L9.30101 15.9C9.60101 16.5 9.60101 17.4 9.30101 18L7.50101 21.6C6.90101 22.8 7.50101 24.3 9.00101 24.9L12.901 26.4C13.501 26.7 14.101 27.3 14.401 27.9L15.901 31.8C16.201 33 17.101 33.6 18.001 33.6C18.301 33.6 18.601 33.6 18.901 33.3L22.801 31.5C23.101 31.5 23.401 31.2 23.701 31.2C24.001 31.2 24.301 31.2 24.601 31.5L28.501 33.3C28.801 33.6 29.101 33.6 29.401 33.6C30.301 33.6 31.201 33 31.801 32.1L33.301 28.2C33.601 27.6 34.201 27 34.801 26.7L38.701 25.2C39.901 24.6 40.801 23.1 40.201 21.9L38.701 17.7ZM24.001 28.8C17.401 28.8 12.001 23.4 12.001 16.8C12.001 10.2 17.401 4.8 24.001 4.8C30.601 4.8 36.001 10.2 36.001 16.8C36.001 23.4 30.601 28.8 24.001 28.8Z' fill = 'white'/>
                                <path d = 'M33 16.8C33 19.187 32.0518 21.4761 30.364 23.164C28.6761 24.8518 26.3869 25.8 24 25.8C21.6131 25.8 19.3239 24.8518 17.636 23.164C15.9482 21.4761 15 19.187 15 16.8C15 14.4131 15.9482 12.1239 17.636 10.436C19.3239 8.74821 21.6131 7.8 24 7.8C26.3869 7.8 28.6761 8.74821 30.364 10.436C32.0518 12.1239 33 14.4131 33 16.8Z' fill = 'white'/>
                            </svg>
                        </div>
                    </div>
                    <div className = 'content-text'>
                        <span className = 'highlighted-text'>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat.
                    </div>
                </div>
            </div>

            {/* Section 4 */}
            <div className = 'section'>
                <div className = 'achievement-text'>
                    <div className = 'top-text'>
                        <h1 className = 'achievement-year'>2020</h1>
                        <div className = 'achievement-count'>
                            <h1 className = 'achievement-number'>1</h1>
                            <svg className = 'medal' width = '48' height = '48' viewBox = '0 0 48 48' fill = 'none' xmlns = 'http://www.w3.org/2000/svg'>
                                <path d = 'M30.001 36.6C29.101 36.6 28.501 36.3 27.601 36L24.001 34.5L20.401 36C19.801 36.3 18.901 36.6 18.001 36.6C17.401 36.6 17.101 36.6 16.501 36.3L15.001 48L24.001 42L33.001 48L31.201 36.3C30.901 36.6 30.301 36.6 30.001 36.6ZM38.701 17.7C38.401 17.1 38.401 16.2 38.701 15.6L40.501 12C41.101 10.8 40.501 9.3 39.001 8.7L35.101 7.2C34.501 6.9 33.901 6.3 33.601 5.7L32.101 1.8C31.801 0.6 30.901 0 30.001 0C29.701 0 29.101 0 28.801 0.3L24.901 2.1H24.001C23.701 2.1 23.401 2.1 23.101 1.8L19.201 0.3C18.901 0 18.301 0 18.001 0C17.101 0 16.201 0.6 15.601 1.5L14.101 5.7C14.101 6.3 13.501 6.9 12.901 7.2L8.70101 8.7C7.50101 9 6.90101 10.5 7.50101 12L9.30101 15.9C9.60101 16.5 9.60101 17.4 9.30101 18L7.50101 21.6C6.90101 22.8 7.50101 24.3 9.00101 24.9L12.901 26.4C13.501 26.7 14.101 27.3 14.401 27.9L15.901 31.8C16.201 33 17.101 33.6 18.001 33.6C18.301 33.6 18.601 33.6 18.901 33.3L22.801 31.5C23.101 31.5 23.401 31.2 23.701 31.2C24.001 31.2 24.301 31.2 24.601 31.5L28.501 33.3C28.801 33.6 29.101 33.6 29.401 33.6C30.301 33.6 31.201 33 31.801 32.1L33.301 28.2C33.601 27.6 34.201 27 34.801 26.7L38.701 25.2C39.901 24.6 40.801 23.1 40.201 21.9L38.701 17.7ZM24.001 28.8C17.401 28.8 12.001 23.4 12.001 16.8C12.001 10.2 17.401 4.8 24.001 4.8C30.601 4.8 36.001 10.2 36.001 16.8C36.001 23.4 30.601 28.8 24.001 28.8Z' fill = 'white'/>
                                <path d = 'M33 16.8C33 19.187 32.0518 21.4761 30.364 23.164C28.6761 24.8518 26.3869 25.8 24 25.8C21.6131 25.8 19.3239 24.8518 17.636 23.164C15.9482 21.4761 15 19.187 15 16.8C15 14.4131 15.9482 12.1239 17.636 10.436C19.3239 8.74821 21.6131 7.8 24 7.8C26.3869 7.8 28.6761 8.74821 30.364 10.436C32.0518 12.1239 33 14.4131 33 16.8Z' fill = 'white'/>
                            </svg>
                        </div>
                    </div>
                    <div className = 'content-text'>
                        <span className = 'highlighted-text'>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat.
                    </div>
                </div>

                <img className = 'achievement-image' src = 'https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg'/>
            </div>
        </>
    );
}

export default AchievementsContainer;