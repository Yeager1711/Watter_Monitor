'use client';

import styles from './styles/home.module.scss';

type WaterData = {
    distance_cm: number;
    water_level_cm: number;
    status: 'normal' | 'warning' | 'danger';
    created_at: string;
};

const waterData: WaterData = {
    distance_cm: 25.4,
    water_level_cm: 124.6,
    status: 'warning',
    created_at: '2025-04-28T09:42:17',
};


export default function Home() {
    const data = waterData;

    const statusText = data.status === 'danger' ? 'NGUY HIỂM' : data.status === 'warning' ? 'CẢNH BÁO' : 'BÌNH THƯỜNG';

    const statusClass =
        data.status === 'danger'
            ? styles.statusDanger
            : data.status === 'warning'
              ? styles.statusWarning
              : styles.statusNormal;

    const updateTime = new Date(data.created_at).toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    const updateDate = new Date(data.created_at).toLocaleDateString('vi-VN');

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                {/* HEADER */}
                <header className={styles.header}>
                    <div className={styles.brand}>
                        <div className={styles.waterLogo}>
                            <svg viewBox="0 0 64 64" fill="none">
                                <path
                                    d="M32 4C32 4 12 27 12 40C12 51.05 20.95 60 32 60C43.05 60 52 51.05 52 40C52 27 32 4 32 4Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M42 42C42 48 37.5 52 32 52"
                                    stroke="white"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        <div className={styles.brandText}>
                            <h1>Giám sát mực nước</h1>
                            <p>Mương vườn</p>
                        </div>
                    </div>

                    <div className={styles.connection}>
                        <div className={styles.online}>
                            <span />
                            Online
                        </div>

                        <small>Cập nhật tự động 30s</small>
                    </div>
                </header>

                {/* MAIN WATER CARD */}
                <div className={styles.waterCard}>
                    <div className={styles.waterMain}>
                        <div className={styles.tankWrapper}>
                            <div className={styles.tankCircle}>
                                <div className={styles.tank}>
                                    <div className={styles.tankWater}>
                                        <span />
                                        <span />
                                        <span />
                                    </div>

                                    <div className={styles.tankGlass} />
                                </div>
                            </div>
                        </div>

                        <div className={styles.waterContent}>
                            <p className={styles.label}>Mực nước hiện tại</p>

                            <div className={styles.waterValue}>
                                {data.water_level_cm.toFixed(1)}
                                <span>cm</span>
                            </div>

                            <div className={`${styles.status} ${statusClass}`}>
                                <span className={styles.statusIcon}>!</span>
                                {statusText}
                            </div>
                        </div>
                    </div>

                    <div className={styles.waterSide}>
                        <div className={styles.sideItem}>
                            <div className={styles.sideIcon}>
                                <svg viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
                                    <path
                                        d="M12 8V12L15 14"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            <div>
                                <p>Khoảng cách cảm biến</p>
                                <strong>{data.distance_cm.toFixed(1)} cm</strong>
                            </div>
                        </div>

                        <div className={styles.sideItem}>
                            <div className={styles.sideIcon}>
                                <svg viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
                                    <path
                                        d="M12 7V12L15 14"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            <div>
                                <p>Cập nhật lần cuối</p>
                                <strong>{updateTime}</strong>
                                <small>{updateDate}</small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* INFO CARDS */}
                <div className={styles.grid}>
                    <div className={styles.infoCard}>
                        <div className={`${styles.infoIcon} ${styles.blueIcon}`}>
                            <svg viewBox="0 0 32 32" fill="none">
                                <path d="M16 7V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path
                                    d="M9.6 10.5C7.8 12.1 7 14.2 7 16.5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M22.4 10.5C24.2 12.1 25 14.2 25 16.5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M5 7.5C2.8 9.8 2 12.7 2 16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M27 7.5C29.2 9.8 30 12.7 30 16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M16 14C14.3 14 13 15.3 13 17C13 19 16 23 16 23C16 23 19 19 19 17C19 15.3 17.7 14 16 14Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>

                        <div className={styles.infoContent}>
                            <p>Khoảng cách cảm biến</p>
                            <strong>{data.distance_cm.toFixed(1)} cm</strong>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={`${styles.infoIcon} ${styles.purpleIcon}`}>
                            <svg viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="2" />
                                <path d="M16 11V16L19 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>

                        <div className={styles.infoContent}>
                            <p>Cập nhật lần cuối</p>
                            <strong>{updateTime}</strong>
                            <small>{updateDate}</small>
                        </div>
                    </div>
                </div>

                {/* CHART */}
                <div className={styles.chartCard}>
                    <div className={styles.chartHeader}>
                        <div className={styles.chartTitle}>
                            <div className={styles.chartTitleIcon}>
                                <svg viewBox="0 0 32 32" fill="none">
                                    <path d="M5 25V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M5 25H27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path
                                        d="M8 20L13 15L17 18L25 9"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <h2>
                                Biểu đồ mực nước <span>(24 giờ qua)</span>
                            </h2>
                        </div>

                        <div className={styles.chartTabs}>
                            <button className={styles.activeTab}>24h</button>
                            <button>7 ngày</button>
                            <button>30 ngày</button>
                        </div>
                    </div>

                    <div className={styles.chartArea}>
                        <div className={styles.chartLabel}>Mực nước (cm)</div>

                        <div className={styles.chartGraph}>
                            <div className={styles.yAxis}>
                                <span>160</span>
                                <span>120</span>
                                <span>80</span>
                                <span>40</span>
                                <span>0</span>
                            </div>

                            <div className={styles.graphBody}>
                                <div className={styles.zoneDanger} />
                                <div className={styles.zoneWarning} />
                                <div className={styles.zoneNormal} />

                                <div className={styles.horizontalGrid}>
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </div>

                                <div className={styles.verticalGrid}>
                                    {Array.from({ length: 8 }).map((_, index) => (
                                        <span key={index} />
                                    ))}
                                </div>

                                <svg className={styles.chartSvg} viewBox="0 0 800 300" preserveAspectRatio="none">
                                    <polyline
                                        points="
                      0,145
                      30,146
                      60,145
                      90,146
                      120,145
                      150,145
                      180,143
                      210,135
                      240,127
                      270,118
                      300,116
                      330,116
                      360,115
                      390,112
                      420,113
                      450,111
                      480,112
                      510,110
                      540,111
                      570,105
                      600,101
                      630,90
                      660,78
                      690,84
                      720,94
                      750,101
                      780,105
                    "
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    <circle
                                        cx="780"
                                        cy="105"
                                        r="6"
                                        fill="white"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                    />
                                </svg>

                                <div className={styles.chartTooltip}>124.6 cm</div>
                            </div>
                        </div>

                        <div className={styles.xAxis}>
                            <span>10:00</span>
                            <span>14:00</span>
                            <span>18:00</span>
                            <span>22:00</span>
                            <span>02:00</span>
                            <span>06:00</span>
                            <span>09:00</span>
                        </div>
                    </div>
                </div>

                {/* THRESHOLD */}
                <div className={styles.thresholdCard}>
                    <div className={styles.thresholdTitle}>
                        <div className={styles.warningIcon}>!</div>

                        <h2>Ngưỡng cảnh báo</h2>
                    </div>

                    <div className={styles.thresholdList}>
                        <div className={styles.threshold}>
                            <div className={styles.thresholdName}>
                                <span className={styles.greenDot} />
                                <span>Bình thường</span>
                            </div>

                            <strong>&lt; 120 cm</strong>
                        </div>

                        <div className={styles.threshold}>
                            <div className={styles.thresholdName}>
                                <span className={styles.yellowDot} />
                                <span>Cảnh báo</span>
                            </div>

                            <strong>120 – 129 cm</strong>
                        </div>

                        <div className={styles.threshold}>
                            <div className={styles.thresholdName}>
                                <span className={styles.redDot} />
                                <span>Nguy hiểm</span>
                            </div>

                            <strong>≥ 130 cm</strong>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <footer className={styles.footer}>
                    <span>⌁</span>
                    ESP32 + JSN-SR04T
                    <i />
                    Vườn cách nhà 40 km
                </footer>
            </div>
        </main>
    );
}
