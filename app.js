// Iber - Informatika Belajar | Core Application Logic 

// ==========================================
// 1. DATA KURIKULUM INFORMATIKA (SEMESTER 1-7)
// ==========================================
const curriculumData = {
    1: {
        title: "Semester 1",
        badge: "SEMESTER 1",
        desc: ".",
        gdrive: "https://drive.google.com/drive/folders/122wvZKmcWGOVS49FRoz5lX0jRKNZVeOy?usp=sharing",
        courses: [
            {
                code: "KF70061001",
                name: "Kalkulus Dasar",
                sks: "2 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi."
            },
            {
                code: "KI70061001",
                name: "Kewirausahaan",
                sks: "2 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi."
            },
            {
                code: "KP70061001",
                name: "Bahasa Inggris",
                sks: "2 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi."
            },
            {
                code: "KP70061002",
                name: "Berpikir Komputasional",
                sks: "2 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi."
            },
            {
                code: "KP70061003",
                name: "Logika Informatika",
                sks: "3 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi."
            },
            {
                code: "KP70061004",
                name: "Algoritma dan Pemrograman",
                sks: "3 SKS",
                category: "Teori & Praktikum",
                desc: "Belum ada deskripsi."
            },
            {
                code: "KU70061001",
                name: "Bahasa Indonesia",
                sks: "2 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi."
            },
            {
                code: "KU70061002",
                name: "Pancasila",
                sks: "2 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi."
            }
        ]
    },
    2: {
        title: "Semester 2",
        badge: "SEMESTER 2",
        desc: ".",
        gdrive: "https://drive.google.com/drive/folders/1Ulz0UbFrsLuzZzDeuvzkpFSP3FPN11bM?usp=drive_link",
        courses: [
            {
                code: "KF70062001",
                name: "Kalkulus Lanjut",
                sks: "2 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi"
            },
            {
                code: "KI70062001",
                name: "Literasi Inteligensi Artifisial",
                sks: "2 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi"
            },
            {
                code: "KP70062001",
                name: "Sistem Digital",
                sks: "2 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi"
            },
            {
                code: "KP70062002",
                name: "Matematika Diskrit",
                sks: "3 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi"
            },
            {
                code: "KP70062003",
                name: "Basis Data",
                sks: "3 SKS",
                category: "Teori & Praktikum",
                desc: "Belum ada deskripsi"
            },
            {
                code: "KP70062004",
                name: "Struktur Data",
                sks: "3 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi"
            },
            {
                code: "KU70062001",
                name: "Agama",
                sks: "2 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi"
            },
            {
                code: "KU70062002",
                name: "Kewarganegaraan",
                sks: "2 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi"
            }
        ]
    },
    3: {
        title: "Semester 3",
        badge: "SEMESTER 3",
        desc: ".",
        gdrive: "https://drive.google.com/drive/folders/1DsLdDVae536l3-xU7WaI22vdAR7hH7LJ?usp=sharing",
        courses: [
            {
                code: "-",
                name: "Organisasi dan Arsitektur Komputer",
                sks: "3 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi."
            },
            {
                code: "-",
                name: "Aljabar Linier dan Matriks",
                sks: "2 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi."
            },
            {
                code: "-",
                name: "Rekayasa Perangkat Lunak",
                sks: "3 SKS",
                category: "Teori & Praktikum",
                desc: "Belum ada deskripsi."
            },
            {
                code: "-",
                name: "Pemrograman Berorientasi Objek",
                sks: "3 SKS",
                category: "Teori & Praktikum",
                desc: "Belum ada deskripsi."
            },
            {
                code: "-",
                name: "Pemrograman Sistem",
                sks: "3 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi."
            },
            {
                code: "-",
                name: "Probabilitas dan Statistika",
                sks: "3 SKS",
                category: "Teori",
                desc: "Belum ada deskripsi."
            },
            {
                code: "-",
                name: "Sistem Operasi",
                sks: "3 SKS",
                category: "Teori & Praktikum",
                desc: "Belum ada deskripsi."
            }
        ]
    },
    4: {
        title: "Semester 4",
        badge: "SEMESTER 4",
        desc: "Fokus pada efisiensi algoritma lanjut, pembuatan aplikasi web terintegrasi, serta matematika grafika komputer.",
        gdrive: "https://drive.google.com/drive/folders/1gI184CKupCucsJ59sJHrR-teQuOFkOqw?usp=sharing",
        courses: [
            {
                code: "INF401",
                name: "Desain & Analisis Algoritma",
                sks: "3 SKS",
                category: "Teori",
                desc: "Menganalisis performa algoritma (Big-O, Big-Theta, Big-Omega). Mempelajari paradigma desain algoritma: Divide and Conquer, Greedy Algorithms, Dynamic Programming, Backtracking, serta pengenalan kelas kompleksitas P vs NP."
            },
            {
                code: "INF402",
                name: "Pemrograman Web",
                sks: "4 SKS",
                category: "Teori & Praktikum",
                desc: "Pengembangan web full-stack. Sisi klien menggunakan HTML5, CSS3, modern JavaScript/TypeScript, dan kerangka kerja SPA. Sisi server mempelajari routing API, middleware, autentikasi (JWT), dan koneksi database."
            },
            {
                code: "INF403",
                name: "Grafika Komputer",
                sks: "3 SKS",
                category: "Teori & Praktikum",
                desc: "Representasi visual 2D dan 3D di komputer. Mempelajari transformasi geometris (translasi, rotasi, skala), proyeksi, rendering pipa (pipeline), rasterisasi, pencahayaan, bayangan, serta WebGL atau OpenGL."
            },
            {
                code: "INF404",
                name: "Teori Graf",
                sks: "2 SKS",
                category: "Teori",
                desc: "Kajian mendalam representasi graf, algoritma lintasan terpendek (Dijkstra, Bellman-Ford), pohon rentang minimum (Kruskal, Prim), aliran jaringan (Max-flow Min-cut), pewarnaan graf, dan aplikasinya pada topologi jaringan."
            }
        ]
    },
    5: {
        title: "Semester 5",
        badge: "SEMESTER 5",
        desc: "Fase pengembangan produk lanjut: aplikasi mobile natif/lintas-platform, pengujian terstruktur, serta kecerdasan buatan.",
        gdrive: "https://drive.google.com/drive/folders/1HxIaZFLnPm9pV4Q5gRzHQUWBLWsH5kbv?usp=sharing",
        courses: [
            {
                code: "INF501",
                name: "Pemrograman Mobile",
                sks: "3 SKS",
                category: "Teori & Praktikum",
                desc: "Pengembangan aplikasi untuk Android dan iOS menggunakan kerangka kerja lintas-platform (seperti Flutter/Dart atau React Native). Topik meliputi manajemen state, penanganan sensor perangkat, database lokal (SQLite/Room), dan integrasi API eksternal."
            },
            {
                code: "INF502",
                name: "Kecerdasan Buatan (AI)",
                sks: "3 SKS",
                category: "Teori",
                desc: "Pengantar kecerdasan buatan. Mempelajari teknik pencarian (Heuristic Search, A*), sistem berbasis aturan (Rule-based Systems), logika fuzzy, jaringan saraf tiruan (Artificial Neural Networks), logika probabilitas, dan algoritma genetika."
            },
            {
                code: "INF503",
                name: "Pengujian Perangkat Lunak",
                sks: "3 SKS",
                category: "Teori & Praktikum",
                desc: "Proses verifikasi dan validasi fungsionalitas sistem. Mempelajari pengujian White-box (unit testing, coverage) dan Black-box (boundary value analysis, equivalence partitioning), pengujian regresi, automation testing, dan pembuatan laporan bug."
            }
        ]
    },
    6: {
        title: "Semester 6",
        badge: "SEMESTER 6",
        desc: "Integrasi sistem tingkat tinggi: arsitektur awan (cloud), sistem terdistribusi skala besar, dan model pembelajaran mesin.",
        gdrive: "https://drive.google.com/drive/folders/14jxbXJgxRuA9mQt2oK_fXI1MqTfeORri?usp=sharing",
        courses: [
            {
                code: "INF601",
                name: "Keamanan Siber & Jaringan",
                sks: "3 SKS",
                category: "Teori & Praktikum",
                desc: "Keamanan sistem dan transmisi informasi. Mempelajari kriptografi (simetris, asimetris, hashing), protokol aman (HTTPS, SSL/TLS), analisis kerentanan sistem, pencegahan serangan umum (SQL Injection, XSS, DDoS), firewall, dan etika penetrasi (penetration testing)."
            },
            {
                code: "INF602",
                name: "Machine Learning (Pembelajaran Mesin)",
                sks: "3 SKS",
                category: "Teori & Praktikum",
                desc: "Mempelajari model prediktif berbasis data. Topik meliputi regresi linear/logistik, pohon keputusan (Decision Tree, Random Forest), Support Vector Machine (SVM), Clustering (K-Means), pengolahan fitur data, evaluasi model (Precision, Recall, ROC/AUC), dan pengantar deep learning."
            },
            {
                code: "INF603",
                name: "Sistem Terdistribusi",
                sks: "3 SKS",
                category: "Teori",
                desc: "Arsitektur sistem terdesentralisasi. Mempelajari Remote Procedure Call (RPC), sinkronisasi waktu terdistribusi, konsensus (Raft/Paxos), replikasi data, toleransi kegagalan (fault tolerance), dan arsitektur mikroservis."
            },
            {
                code: "INF604",
                name: "Cloud Computing (Komputasi Awan)",
                sks: "2 SKS",
                category: "Teori",
                desc: "Konsep virtualisasi, model layanan cloud (IaaS, PaaS, SaaS), manajemen resource virtual, kontainerisasi (Docker) dan orkestrasi (Kubernetes), serverless computing, serta manajemen keamanan cloud."
            }
        ]
    },
    7: {
        title: "Semester 7",
        badge: "SEMESTER 7",
        desc: "Tahap pematangan akhir: analisis data skala besar, etika profesional industri, penulisan ilmiah, dan pengerjaan Tugas Akhir.",
        gdrive: "https://drive.google.com/drive/folders/1H9_O6eYS5rC_mtDIJY6pCAmyYGUfzZ5c?usp=sharing",
        courses: [
            {
                code: "INF701",
                name: "Data Science (Sains Data)",
                sks: "3 SKS",
                category: "Teori & Praktikum",
                desc: "Alur kerja analisis data komprehensif. Mulai dari data ingestion, data cleaning, exploratory data analysis (EDA), visualisasi data interaktif, rekayasa fitur tingkat lanjut, pembuatan model analitik, dan presentasi wawasan bisnis (insights)."
            },
            {
                code: "INF702",
                name: "Etika Profesi & Kewirausahaan",
                sks: "2 SKS",
                category: "Teori",
                desc: "Membahas etika profesi di bidang TI (hak kekayaan intelektual, lisensi software, regulasi ITE), serta dasar-dasar membangun startup teknologi (analisis pasar, model bisnis canvas, pitching, pendanaan)."
            },
            {
                code: "INF703",
                name: "Metodologi Penelitian",
                sks: "2 SKS",
                category: "Teori",
                desc: "Panduan melakukan riset ilmiah yang terstruktur. Cara merumuskan masalah penelitian, melakukan tinjauan pustaka (literature review) secara kritis, memilih metodologi riset kuantitatif/kualitatif yang sesuai, penulisan sitasi ilmiah, serta teknik penyusunan proposal penelitian."
            },
            {
                code: "INF704",
                name: "Tugas Akhir I (Skripsi I)",
                sks: "2 SKS",
                category: "Bimbingan & Wajib",
                desc: "Fase inisiasi proyek skripsi. Mahasiswa merancang topik riset orisinal, menyusun proposal formal di bawah arahan dosen pembimbing, merancang arsitektur awal sistem, serta mempresentasikannya di seminar proposal."
            }
        ]
    }
};

// ==========================================
// 2. CANVAS WAVE BACKGROUND ENGINE
// ==========================================
class WaveEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');

        // Define wave layers with elegant coordinates and shapes
        // (y represents vertical offset from top: 0 to 1)
        this.waves = [
            {
                yPercent: 0.82,
                length: 0.003,
                amplitude: 38,
                speed: 0.008,
                phase: 0,
                gradientColors: ['rgba(14, 165, 233, 0.4)', 'rgba(2, 132, 199, 0.5)']
            },
            {
                yPercent: 0.85,
                length: 0.0045,
                amplitude: 26,
                speed: -0.012,
                phase: Math.PI / 3,
                gradientColors: ['rgba(56, 189, 248, 0.45)', 'rgba(14, 165, 233, 0.55)']
            },
            {
                yPercent: 0.88,
                length: 0.0025,
                amplitude: 48,
                speed: 0.005,
                phase: Math.PI / 1.5,
                gradientColors: ['rgba(13, 148, 136, 0.35)', 'rgba(20, 184, 166, 0.45)']
            },
            {
                yPercent: 0.92,
                length: 0.0035,
                amplitude: 18,
                speed: -0.016,
                phase: Math.PI * 1.2,
                gradientColors: ['rgba(3, 105, 161, 0.65)', 'rgba(7, 89, 133, 0.75)']
            }
        ];

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw sky gradient helper if necessary (canvas covers all, but we have css bg too)
        // Draw each wave
        this.waves.forEach((wave) => {
            const grad = this.ctx.createLinearGradient(0, this.canvas.height * wave.yPercent - wave.amplitude, 0, this.canvas.height);
            grad.addColorStop(0, wave.gradientColors[0]);
            grad.addColorStop(1, wave.gradientColors[1]);

            this.ctx.beginPath();
            this.ctx.moveTo(0, this.canvas.height);

            const baseHeight = this.canvas.height * wave.yPercent;

            // Generate dynamic sine wave path
            for (let x = 0; x <= this.canvas.width; x += 3) {
                // Double harmonic sine wave for organic feel
                const sineVal1 = Math.sin(x * wave.length + wave.phase);
                const sineVal2 = Math.cos(x * wave.length * 0.5 + wave.phase * 0.7);
                const y = baseHeight + (sineVal1 * wave.amplitude * 0.7) + (sineVal2 * wave.amplitude * 0.3);

                this.ctx.lineTo(x, y);
            }

            this.ctx.lineTo(this.canvas.width, this.canvas.height);
            this.ctx.closePath();

            this.ctx.fillStyle = grad;
            this.ctx.fill();

            // Update phase for animation flow
            wave.phase += wave.speed;
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================
// 3. WEB AUDIO API PROCEDURAL WAVE GENERATOR
// ==========================================
class BeachAudioEngine {
    constructor() {
        this.audioCtx = null;
        this.isPlaying = false;
        this.volume = 0.5; // Default 50%
        this.mode = 'synth'; // 'synth' or 'audio' (fallback)

        // Nodes references
        this.masterGainNode = null;
        this.noiseSource = null;
        this.noiseFilter = null;
        this.lfoNode = null;
        this.noiseGainNode = null;
        this.realAudioEl = document.getElementById('ambient-wave-audio');
        this.realAudioSource = null;
    }

    initContext() {
        if (this.audioCtx) return;

        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContextClass();

        // Setup Master Gain
        this.masterGainNode = this.audioCtx.createGain();
        this.masterGainNode.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
        this.masterGainNode.connect(this.audioCtx.destination);

        // Create Synth Nodes and Real Audio Source
        this.setupSynthNodes();
        this.setupRealAudioNode();
    }

    setupSynthNodes() {
        if (!this.audioCtx) return;

        // 1. Generate 2 seconds of White Noise Buffer
        const bufferSize = 2 * this.audioCtx.sampleRate;
        const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }

        // 2. Create Buffer Source Node for noise loop
        this.noiseSource = this.audioCtx.createBufferSource();
        this.noiseSource.buffer = noiseBuffer;
        this.noiseSource.loop = true;

        // 3. Lowpass filter to shape white noise into a soft rushing sound
        this.noiseFilter = this.audioCtx.createBiquadFilter();
        this.noiseFilter.type = 'lowpass';
        this.noiseFilter.frequency.setValueAtTime(350, this.audioCtx.currentTime);
        this.noiseFilter.Q.value = 1.0;

        // 4. Modulate gain (volume) for wave swells
        this.noiseGainNode = this.audioCtx.createGain();
        this.noiseGainNode.gain.setValueAtTime(0.4, this.audioCtx.currentTime);

        // 5. Connect noise generator
        this.noiseSource.connect(this.noiseFilter);
        this.noiseFilter.connect(this.noiseGainNode);

        // 6. Connect noise to Master Gain (only connected when mode is 'synth')
        if (this.mode === 'synth') {
            this.noiseGainNode.connect(this.masterGainNode);
        }

        // 7. LFO (Low Frequency Oscillator) to drive periodic wave swells
        // Real waves swell every 6 to 10 seconds (frequency = 0.1Hz - 0.16Hz)
        this.lfoNode = this.audioCtx.createOscillator();
        this.lfoNode.type = 'sine';
        this.lfoNode.frequency.setValueAtTime(0.12, this.audioCtx.currentTime);

        // LFO Gain to modulate cutoff frequency (sweep filter: 380Hz +/- 220Hz => 160Hz to 600Hz)
        const lfoFilterGain = this.audioCtx.createGain();
        lfoFilterGain.gain.setValueAtTime(220, this.audioCtx.currentTime);
        this.lfoNode.connect(lfoFilterGain);
        lfoFilterGain.connect(this.noiseFilter.frequency);

        // LFO Gain to modulate swell volume (modulate gain: 0.45 +/- 0.35 => 0.1 to 0.8)
        const lfoVolumeGain = this.audioCtx.createGain();
        lfoVolumeGain.gain.setValueAtTime(0.35, this.audioCtx.currentTime);
        this.lfoNode.connect(lfoVolumeGain);
        lfoVolumeGain.connect(this.noiseGainNode.gain);

        // Start sources
        this.noiseSource.start();
        this.lfoNode.start();
    }

    setupRealAudioNode() {
        if (!this.audioCtx || !this.realAudioEl) return;

        // Web Audio routing for HTML5 Audio Element fallback
        try {
            this.realAudioSource = this.audioCtx.createMediaElementSource(this.realAudioEl);

            // Connect to Master Gain (only connected when mode is 'audio')
            if (this.mode === 'audio') {
                this.realAudioSource.connect(this.masterGainNode);
            }
        } catch (e) {
            console.warn("MediaElementSource already created or browser security restrictions applied.", e);
        }
    }

    setVolume(value) {
        this.volume = value / 100;
        if (this.masterGainNode && this.audioCtx) {
            // Smoothly interpolate volume changes to avoid clicks
            this.masterGainNode.gain.setTargetAtTime(this.volume, this.audioCtx.currentTime, 0.05);
        }
    }

    togglePlay() {
        this.initContext();

        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }

        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
        return this.isPlaying;
    }

    play() {
        this.isPlaying = true;
        if (this.mode === 'synth') {
            // In synth mode, make sure synth is connected to master gain
            try { this.noiseGainNode.connect(this.masterGainNode); } catch (e) { }
            // Pause fallback audio if playing
            if (this.realAudioEl) this.realAudioEl.pause();
        } else {
            // In fallback mode, connect media source to master gain and play media element
            try { this.realAudioSource.connect(this.masterGainNode); } catch (e) { }
            // Disconnect synth to make it silent
            try { this.noiseGainNode.disconnect(this.masterGainNode); } catch (e) { }
            if (this.realAudioEl) this.realAudioEl.play().catch(err => console.log("Audio play deferred:", err));
        }
    }

    pause() {
        this.isPlaying = false;
        // Pause fallback audio
        if (this.realAudioEl) this.realAudioEl.pause();
        // Mute synth by disconnecting from master gain
        if (this.noiseGainNode && this.masterGainNode) {
            try { this.noiseGainNode.disconnect(this.masterGainNode); } catch (e) { }
        }
    }

    setMode(mode) {
        if (mode === this.mode) return;
        this.mode = mode;

        if (this.isPlaying) {
            // Transition modes seamlessly
            this.play();
        }
    }
}

// ==========================================
// 4. INTERACTION & UI CONTROLLER LOGIC
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 4.1 Initialize background wave simulation
    new WaveEngine('waveCanvas');

    // 4.2 Initialize sound engine
    const audioEngine = new BeachAudioEngine();

    // UI Elements
    const audioPanel = document.getElementById('audio-panel');
    const audioToggleBtn = document.getElementById('audio-toggle-btn');
    const soundIcon = document.getElementById('sound-icon');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeValue = document.getElementById('volume-value');
    const modeSynthBtn = document.getElementById('mode-synth-btn');
    const modeAudioBtn = document.getElementById('mode-audio-btn');

    // Modal Overlay Elements
    const optionsModal = document.getElementById('options-modal');
    const optionsCloseBtn = document.getElementById('options-close-btn');
    const optExplain = document.getElementById('opt-explain');
    const optGdrive = document.getElementById('opt-gdrive');
    const modalHeaderIcon = document.getElementById('modal-header-icon');
    const modalSemTitle = document.getElementById('modal-semester-title');

    // Drawer Overlay Elements
    const drawerModal = document.getElementById('drawer-modal');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');
    const drawerBackBtn = document.getElementById('drawer-back-btn');
    const drawerBadge = document.getElementById('drawer-badge');
    const drawerSemTitle = document.getElementById('drawer-semester-title');
    const drawerSemDesc = document.getElementById('drawer-semester-desc');
    const drawerCourseList = document.getElementById('drawer-course-list');
    const drawerGdriveBtn = document.getElementById('drawer-gdrive-btn');

    // Detail Course Panel
    const detailCourseName = document.getElementById('detail-course-name');
    const detailCourseSks = document.getElementById('detail-course-sks');
    const detailCourseCategory = document.getElementById('detail-course-category');
    const detailCourseDesc = document.getElementById('detail-course-desc');

    let activeSemester = null;

    // ------------------------------------------
    // A. Audio Controls Interaction
    // ------------------------------------------

    // Handle Mute/Unmute toggle click
    audioToggleBtn.addEventListener('click', (e) => {
        // Toggle engine play/pause
        const isPlaying = audioEngine.togglePlay();

        // Remove pulse animation after user first interacts
        audioToggleBtn.classList.remove('pulse');

        // Update Icon representation
        updateSoundIcon(isPlaying);

        // Prevent toggle expansion conflict on click if necessary,
        // but it is nice to expand the drawer so they see volume slider
        audioPanel.classList.toggle('expanded');
    });

    // Expand panel on hover (desktop only)
    audioPanel.addEventListener('mouseenter', () => {
        audioPanel.classList.add('expanded');
    });
    audioPanel.addEventListener('mouseleave', () => {
        audioPanel.classList.remove('expanded');
    });

    // Change Volume
    volumeSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        volumeValue.textContent = `${value}%`;
        audioEngine.setVolume(value);
    });

    // Switch to Synthesis mode
    modeSynthBtn.addEventListener('click', () => {
        modeSynthBtn.classList.add('active');
        modeAudioBtn.classList.remove('active');
        audioEngine.setMode('synth');
    });

    // Switch to Streaming Fallback audio mode
    modeAudioBtn.addEventListener('click', () => {
        modeAudioBtn.classList.add('active');
        modeSynthBtn.classList.remove('active');
        audioEngine.setMode('audio');
    });

    function updateSoundIcon(isPlaying) {
        if (isPlaying) {
            // Dynamic Wave sound visual (Volume Waves active)
            soundIcon.innerHTML = `
                <!-- Playing State (Speaker waves) -->
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" fill="currentColor"/>
            `;
            audioToggleBtn.style.color = '#0284c7';
            audioToggleBtn.querySelector('.btn-text').textContent = 'Suara Aktif';
        } else {
            // Muted speaker visual
            soundIcon.innerHTML = `
                <!-- Muted State -->
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.03c1.37-.31 2.6-.97 3.63-1.85l2.73 2.73 1.27-1.27L4.27 3zM12 4L9.91 6.09 12 8.18V4z" fill="currentColor"/>
            `;
            audioToggleBtn.style.color = '#64748b';
            audioToggleBtn.querySelector('.btn-text').textContent = 'Suara Mute';
        }
    }

    // ------------------------------------------
    // B. Semester Selection Modal Interactions
    // ------------------------------------------

    // Bind click trigger to semester cards
    const semCards = document.querySelectorAll('.card-semester');
    semCards.forEach(card => {
        card.addEventListener('click', () => {
            const semNum = parseInt(card.getAttribute('data-semester'));
            openOptionsModal(semNum, card);
        });
    });

    function openOptionsModal(semNum, cardElement) {
        activeSemester = semNum;
        const data = curriculumData[semNum];

        if (!data) return;

        // Update Modal Header Texts
        modalSemTitle.textContent = `Semester ${semNum}`;

        // Capture card's beach decoration SVG and clone it inside modal header icon
        const decorSvg = cardElement.querySelector('.decor-svg').cloneNode(true);
        // Clear old SVG
        modalHeaderIcon.innerHTML = '';
        modalHeaderIcon.appendChild(decorSvg);

        // Bind GDrive Link
        optGdrive.setAttribute('href', data.gdrive);

        // Display Modal Backdrop
        optionsModal.classList.add('active');
    }

    // Close Options Modal
    optionsCloseBtn.addEventListener('click', closeOptionsModal);
    optionsModal.addEventListener('click', (e) => {
        if (e.target === optionsModal) {
            closeOptionsModal();
        }
    });

    function closeOptionsModal() {
        optionsModal.classList.remove('active');
    }

    // ------------------------------------------
    // C. Curriculum Drawer Interactions
    // ------------------------------------------

    // Click "Penjelasan di Website"
    optExplain.addEventListener('click', () => {
        if (!activeSemester) return;

        // Close Option popup, immediately open side drawer
        closeOptionsModal();
        openCurriculumDrawer(activeSemester);
    });

    function openCurriculumDrawer(semNum) {
        const data = curriculumData[semNum];
        if (!data) return;

        // Populate static info
        drawerBadge.textContent = data.badge;
        drawerSemTitle.textContent = `Kurikulum ${data.title}`;
        drawerSemDesc.textContent = data.desc;
        drawerGdriveBtn.setAttribute('href', data.gdrive);

        // Populate Course List buttons
        drawerCourseList.innerHTML = '';
        data.courses.forEach((course, index) => {
            const btn = document.createElement('button');
            btn.className = 'course-item-btn';
            btn.setAttribute('data-course-index', index);

            btn.innerHTML = `
                <div class="course-name-info">
                    <span class="course-code-badge">${course.code}</span>
                    <span class="course-title-text">${course.name}</span>
                </div>
                <span class="course-sks-tag">${course.sks}</span>
            `;

            // Add click listener to show course description detail
            btn.addEventListener('click', () => {
                // Remove active class from all course items
                document.querySelectorAll('.course-item-btn').forEach(b => b.classList.remove('active'));
                // Mark this active
                btn.classList.add('active');

                showCourseDetail(course);
            });

            drawerCourseList.appendChild(btn);
        });

        // Default select first course
        if (data.courses.length > 0) {
            drawerCourseList.firstChild.classList.add('active');
            showCourseDetail(data.courses[0]);
        } else {
            resetCourseDetailPanel();
        }

        // Open Drawer
        drawerModal.classList.add('active');
    }

    function showCourseDetail(course) {
        detailCourseName.textContent = course.name;
        detailCourseSks.textContent = course.sks;
        detailCourseCategory.textContent = course.category;
        detailCourseDesc.textContent = course.desc;
    }

    function resetCourseDetailPanel() {
        detailCourseName.textContent = "Pilih mata kuliah untuk melihat detail";
        detailCourseSks.textContent = "- SKS";
        detailCourseCategory.textContent = "-";
        detailCourseDesc.textContent = "Klik salah satu mata kuliah di atas untuk membaca penjelasan lengkap mengenai apa yang dipelajari.";
    }

    // Close Drawer
    drawerCloseBtn.addEventListener('click', closeCurriculumDrawer);
    drawerModal.addEventListener('click', (e) => {
        if (e.target === drawerModal) {
            closeCurriculumDrawer();
        }
    });

    function closeCurriculumDrawer() {
        drawerModal.classList.remove('active');
        activeSemester = null;
    }

    drawerBackBtn.addEventListener('click', () => {
        if (!activeSemester) return;

        const tempSem = activeSemester;
        closeCurriculumDrawer();

        // Re-open options modal
        setTimeout(() => {
            const correspondingCard = document.querySelector(`.card-semester[data-semester="${tempSem}"]`);
            openOptionsModal(tempSem, correspondingCard);
        }, 150); // Small delay to let slide transitions finish cleanly
    });
});
