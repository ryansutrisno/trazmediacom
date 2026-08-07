import type { Locale, TranslationDict } from '@/types/i18n';

export const translations: Record<Locale, TranslationDict> = {
  id: {
    site: {
      name: 'Trazmedia',
      tagline: 'Code that scales, design that converts',
      secondaryTagline: 'Bridging design + code + business',
      description: 'Trazmedia adalah software house Indonesia yang membantu UMKM naik kelas secara digital melalui web & mobile development.',
      url: 'https://trazmedia.com',
      ogImage: '/og-image-id.png',
    },
    nav: [
      { label: 'Beranda', href: '/' },
      { label: 'Tentang', href: '/about' },
      { label: 'Layanan', href: '/services' },
      { label: 'Portofolio', href: '/portfolio' },
      { label: 'Blog', href: '/blog' },
      { label: 'Kontak', href: '/contact' },
    ],
    home: {
      hero: {
        greeting: 'Halo, kami',
        heading: 'Membangun Produk Digital yang Scalable untuk Bisnis Anda',
        description: 'Kami bantu UMKM dan bisnis Indonesia membangun website, aplikasi mobile, dan sistem digital yang modern, cepat, dan mudah dikelola.',
        cta: 'Mulai Konsultasi',
      },
      services: {
        heading: 'Layanan Kami',
        description: 'Kami menyediakan solusi digital end-to-end untuk membantu bisnis Anda tumbuh dan bersaing di era digital.',
        pillars: [
          {
            title: 'Web Development',
            description: 'Website landing page, company profile, web apps, hingga e-commerce yang modern dan responsif — dibangun dengan React, Next.js, Astro, atau Laravel.',
            icon: 'web',
          },
          {
            title: 'Mobile Development',
            description: 'Aplikasi mobile iOS dan Android yang user-friendly untuk bisnis lokal, UMKM, hingga enterprise dengan performa terbaik.',
            icon: 'mobile',
          },
          {
            title: 'Full-stack Apps',
            description: 'Solusi lengkap dari frontend ke backend — REST API, admin dashboard, sistem reseller, booking, dan inventory yang scalable.',
            icon: 'fullstack',
          },
        ],
      },
      portfolioPreview: {
        heading: 'Hasil Karya Terbaru',
        description: 'Lihat beberapa project terbaru yang telah kami selesaikan untuk klien dan internal.',
        cta: 'Lihat Semua Portofolio',
      },
      ctaBanner: {
        heading: 'Siap Membangun Produk Digital Anda?',
        description: 'Ceritakan ide dan kebutuhan Anda. Kami siap membantu dari tahap konsultasi hingga produk live.',
        button: 'Konsultasi Gratis',
      },
    },
    about: {
      hero: {
        heading: 'Tentang Trazmedia',
        description: 'Berdiri sejak 2017 di Sleman, Yogyakarta. Kami adalah software house yang fokus membantu UMKM dan bisnis Indonesia bertransformasi secara digital.',
      },
      vision: {
        heading: 'Visi Kami',
        description: 'Menjadi perusahaan IT berskala nasional & internasional yang mengedepankan kualitas dan kemitraan jangka panjang dengan klien.',
      },
      values: {
        heading: 'Nilai Kami',
        description: 'Empat pilar yang menjadi fondasi setiap project yang kami kerjakan.',
        items: [
          { title: 'Profesional', description: 'Setiap project dikerjakan dengan standar industri, dokumentasi lengkap, dan komunikasi yang transparan.' },
          { title: 'Integritas', description: 'Kami memegang komitmen terhadap kualitas, deadline, dan kepercayaan yang diberikan oleh klien.' },
          { title: 'Teknologi Modern', description: 'Kami selalu mengadopsi teknologi terbaru — React, Next.js, TypeScript, TanStack, Astro, dan Laravel.' },
          { title: 'Kreatif', description: 'Setiap solusi dirancang dengan pendekatan kreatif yang disesuaikan dengan kebutuhan unik bisnis Anda.' },
        ],
      },
      partners: {
        heading: 'Kolaborasi',
        description: 'Kami percaya produk digital terbaik lahir dari kolaborasi antara engineering dan design.',
        partnerName: 'Vectorion.design',
        partnerDesc: 'Partner UI/UX kami — spesialis product MVP design, design system, dan prototyping. Berkolaborasi untuk memberikan hasil yang tidak hanya berfungsi dengan baik, tapi juga terlihat premium.',
      },
    },
    services: {
      hero: {
        heading: 'Layanan',
        description: 'Kami menyediakan layanan development end-to-end — dari konsultasi, desain, development, deployment, hingga maintenance.',
      },
      pillars: [
        {
          title: 'Web Development',
          description: 'Website landing page, company profile, web apps, e-commerce, dan dashboard admin. Dibangun dengan teknologi modern seperti React, Next.js, Astro, dan Laravel untuk performa maksimal.',
          icon: 'web',
        },
        {
          title: 'Mobile Development',
          description: 'Aplikasi mobile iOS dan Android yang intuitif dan responsif. Cocok untuk bisnis lokal, UMKM, hingga enterprise yang ingin menjangkau pelanggan melalui mobile.',
          icon: 'mobile',
        },
        {
          title: 'Full-stack Apps',
          description: 'Solusi menyeluruh dari frontend, backend, REST API, database, hingga deployment. Kami membangun sistem yang scalable — POS, reseller system, booking, marketplace, dan banyak lagi.',
          icon: 'fullstack',
        },
      ],
      cta: {
        heading: 'Butuh Solusi yang Tidak Ada di List?',
        description: 'Setiap bisnis itu unik. Ceritakan kebutuhan Anda dan kami akan carikan solusi terbaik.',
        button: 'Konsultasi Sekarang',
      },
    },
    portfolio: {
      hero: {
        heading: 'Portofolio',
        description: 'Kumpulan project yang telah kami kerjakan — dari aplikasi internal, website klien, hingga produk SaaS.',
      },
      projects: [
        {
          slug: 'simpel-pos',
          title: 'Simpel POS',
          tagline: 'Aplikasi Point of Sale untuk UMKM Indonesia',
          description: 'Aplikasi kasir sederhana yang membantu pemilik toko kecil dan UMKM memantau produk, stok, transaksi, keuangan, dan alert reorder dari satu dashboard.',
          tech: ['Laravel', 'PHP', 'Blade', 'MySQL'],
          image: '/project-images/Dashboard-Simpel-POS-Light.png',
          url: 'https://github.com/ryansutrisno/simpel-pos-laravel',
          category: 'Web Apps',
        },
        {
          slug: 'simpel-pos-landing',
          title: 'Simpel POS Landing',
          tagline: 'Marketing site untuk produk Simpel POS',
          description: 'Landing page modern yang dibangun dengan Astro untuk memperkenalkan produk Simpel POS ke calon pengguna.',
          tech: ['Astro', 'TypeScript', 'Tailwind CSS'],
          image: '/project-images/Simple-Pos-Thumbnail.png',
          url: 'https://simpel-pos.trazmedia.com',
          category: 'Landing Page',
        },
        {
          slug: 'gojamu',
          title: 'Gojamu',
          tagline: 'Landing page modern untuk produk herbal',
          description: 'Landing page untuk produk herbal GoJamu yang dibangun dengan Astro, di-deploy di Vercel, dengan integrasi Meta Pixel dan WhatsApp CTA.',
          tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'Vercel'],
          image: '/project-images/Gojamu.png',
          url: 'https://gojamu.vercel.app',
          category: 'Landing Page',
        },
        {
          slug: 'gojamu-reseller',
          title: 'Gojamu Reseller',
          tagline: 'Sistem manajemen reseller untuk operasional GoJamu',
          description: 'Aplikasi manajemen reseller dengan autentikasi berbasis role, dashboard admin/reseller, master data produk, gudang, inventory, price tier, reward, dan tracking stok.',
          tech: ['Laravel', 'Inertia.js', 'React 19', 'TypeScript', 'Tailwind v4'],
          image: '/project-images/screencapture-gojamu-reseller-test-admin-dashboard-2026-05-21-05_29_20.png',
          url: 'https://github.com/ryansutrisno/gojamu-reseller',
          category: 'Web Apps',
        },
        {
          slug: 'ezitour',
          title: 'EziTour',
          tagline: 'Platform booking tur & wisata Indonesia',
          description: 'Platform booking tur end-to-end: katalog publik, checkout, payment via Midtrans, dashboard traveler, dan admin panel via Filament.',
          tech: ['Laravel 12', 'Filament', 'Midtrans', 'MySQL'],
          image: '/project-images/Thumbnail-EziTour.png',
          url: 'https://github.com/ryansutrisno/ezitour',
          category: 'Web Apps',
        },
        {
          slug: 'suntree',
          title: 'Suntree',
          tagline: 'Marketplace pembelajaran ngaji online',
          description: 'Platform cohort-based untuk pembelajaran ngaji online. Menghubungkan santri dengan ustadz terverifikasi melalui program berbasis batch dan pembayaran.',
          tech: ['Laravel', 'Inertia.js', 'React 19', 'TypeScript', 'Tailwind v4'],
          image: '/project-images/Thumbnail-Suntree.png',
          url: 'https://github.com/ryansutrisno/suntree',
          category: 'Web Apps',
        },
        {
          slug: 'isometricon',
          title: 'Isometricon',
          tagline: 'AI-powered Icon Isometric Generator',
          description: 'Tool berbasis AI untuk generate icon isometric dengan cepat. Dibangun dengan TypeScript dan di-deploy di Vercel.',
          tech: ['TypeScript', 'AI', 'Vercel'],
          image: '/project-images/isometric-icon-generator.png',
          url: 'https://isometricon-generator.vercel.app',
          category: 'Web Apps',
        },
        {
          slug: '4da-cathering',
          title: '4DA Cathering',
          tagline: 'Katalog produk katering ayam bakar',
          description: 'Landing page untuk bisnis katering dengan spesialisasi nasi ayam bakar. Dibangun dengan Astro dan Tailwind CSS.',
          tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'Vercel'],
          image: '/project-images/Thumbnail-4dacathering.png',
          url: 'https://4dacathering.vercel.app',
          category: 'Landing Page',
        },
      ],
      cta: 'Butuh solusi seperti di atas? Ceritakan project Anda.',
    },
    blog: {
      hero: {
        heading: 'Blog',
        description: 'Artikel, tips, dan insight seputar web development, mobile apps, dan teknologi digital.',
      },
      placeholder: {
        heading: 'Segera Hadir',
        description: 'Kami sedang menyiapkan konten berkualitas untuk Anda. Sementara itu, ikuti kami di media sosial untuk update terbaru.',
      },
    },
    contact: {
      hero: {
        heading: 'Kontak',
        description: 'Punya pertanyaan atau ingin memulai project? Kami siap membantu. Pilih channel yang paling nyaman untuk Anda.',
      },
      wa: {
        heading: 'WhatsApp',
        description: 'Chat langsung dengan kami via WhatsApp untuk konsultasi cepat dan GRATIS.',
        button: 'Chat via WhatsApp',
      },
      email: {
        heading: 'Email',
        description: 'Kirim detail project atau pertanyaan Anda melalui email. Kami akan merespon dalam 1×24 jam.',
        button: 'Kirim Email',
      },
    },
    faq: {
      heading: 'Pertanyaan yang Sering Diajukan',
      description: 'Dapatkan jawaban untuk pertanyaan umum seputar layanan kami.',
      items: [
        {
          question: 'Apakah bisa revisi selama pengerjaan?',
          answer: 'Tentu. Setiap project mendapatkan sesi revisi sesuai dengan jenis layanan. Kami pastikan hasil akhir sesuai dengan kebutuhan Anda.',
        },
        {
          question: 'Apakah ada support setelah project selesai?',
          answer: 'Ya, kami menyediakan support setelah project selesai untuk membantu jika ada kendala atau pertanyaan seputar website/aplikasi yang kami buat.',
        },
        {
          question: 'Berapa lama pengerjaan project?',
          answer: 'Tergantung kompleksitas. Landing page biasanya 1-2 minggu, web apps 3-8 minggu, mobile apps 4-12 minggu. Kami akan berikan estimasi detail saat konsultasi.',
        },
        {
          question: 'Apakah bisa custom request di luar paket?',
          answer: 'Tentu. Setiap project kami perlakukan secara custom sesuai kebutuhan bisnis Anda. Ceritakan kebutuhan Anda saat konsultasi dan kami akan berikan solusi terbaik.',
        },
      ],
    },
    footer: {
      copyright: '© {year} Trazmedia Segoro Digital. All rights reserved.',
      tagline: 'Code that scales, design that converts',
      secondaryTagline: 'Bridging design + code + business',
    },
    cta: {
      waMessage: 'Halo Trazmedia, saya tertarik dengan layanan Anda dan ingin konsultasi lebih lanjut.',
    },
  },
  en: {
    site: {
      name: 'Trazmedia',
      tagline: 'Code that scales, design that converts',
      secondaryTagline: 'Bridging design + code + business',
      description: 'Trazmedia is an Indonesian software house helping UMKM level up digitally through web & mobile development.',
      url: 'https://trazmedia.com',
      ogImage: '/og-image-en.png',
    },
    nav: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    home: {
      hero: {
        greeting: 'Hello, we are',
        heading: 'Building Scalable Digital Products for Your Business',
        description: 'We help Indonesian UMKM and businesses build modern, fast, and easy-to-manage websites, mobile apps, and digital systems.',
        cta: 'Start Consultation',
      },
      services: {
        heading: 'Our Services',
        description: 'We provide end-to-end digital solutions to help your business grow and compete in the digital era.',
        pillars: [
          {
            title: 'Web Development',
            description: 'Landing pages, company profiles, web apps, and e-commerce — modern and responsive, built with React, Next.js, Astro, or Laravel.',
            icon: 'web',
          },
          {
            title: 'Mobile Development',
            description: 'User-friendly iOS and Android mobile apps for local businesses, UMKM, and enterprises with top-tier performance.',
            icon: 'mobile',
          },
          {
            title: 'Full-stack Apps',
            description: 'Complete solutions from frontend to backend — REST API, admin dashboards, reseller systems, booking, inventory, and more — all scalable.',
            icon: 'fullstack',
          },
        ],
      },
      portfolioPreview: {
        heading: 'Recent Work',
        description: 'Check out some of our latest projects built for clients and internal products.',
        cta: 'View All Portfolio',
      },
      ctaBanner: {
        heading: 'Ready to Build Your Digital Product?',
        description: 'Tell us your ideas and requirements. We are ready to help from consultation to a live product.',
        button: 'Free Consultation',
      },
    },
    about: {
      hero: {
        heading: 'About Trazmedia',
        description: 'Founded in 2017 in Sleman, Yogyakarta. We are a software house focused on helping Indonesian UMKM and businesses transform digitally.',
      },
      vision: {
        heading: 'Our Vision',
        description: 'To become a nationally and internationally recognized IT company that prioritizes quality and long-term partnerships with clients.',
      },
      values: {
        heading: 'Our Values',
        description: 'Four pillars that serve as the foundation for every project we deliver.',
        items: [
          { title: 'Professional', description: 'Every project is executed with industry standards, complete documentation, and transparent communication.' },
          { title: 'Integrity', description: 'We uphold our commitment to quality, deadlines, and the trust our clients place in us.' },
          { title: 'Modern Tech', description: 'We continuously adopt the latest technologies — React, Next.js, TypeScript, TanStack, Astro, and Laravel.' },
          { title: 'Creative', description: 'Every solution is designed with a creative approach tailored to the unique needs of your business.' },
        ],
      },
      partners: {
        heading: 'Collaboration',
        description: 'We believe the best digital products are born from collaboration between engineering and design.',
        partnerName: 'Vectorion.design',
        partnerDesc: 'Our UI/UX partner — specialists in product MVP design, design systems, and prototyping. We work together to deliver results that not only function well but also look premium.',
      },
    },
    services: {
      hero: {
        heading: 'Services',
        description: 'We provide end-to-end development services — from consultation, design, development, deployment, to maintenance.',
      },
      pillars: [
        {
          title: 'Web Development',
          description: 'Landing pages, company profiles, web apps, e-commerce, and admin dashboards. Built with modern technologies like React, Next.js, Astro, and Laravel for maximum performance.',
          icon: 'web',
        },
        {
          title: 'Mobile Development',
          description: 'Intuitive and responsive iOS and Android mobile apps. Perfect for local businesses, UMKM, and enterprises looking to reach customers on mobile.',
          icon: 'mobile',
        },
        {
          title: 'Full-stack Apps',
          description: 'Comprehensive solutions from frontend, backend, REST API, database, to deployment. We build scalable systems — POS, reseller systems, booking platforms, marketplaces, and more.',
          icon: 'fullstack',
        },
      ],
      cta: {
        heading: 'Need Something Not Listed Here?',
        description: 'Every business is unique. Tell us your requirements and we will find the best solution.',
        button: 'Consult Now',
      },
    },
    portfolio: {
      hero: {
        heading: 'Portfolio',
        description: 'A collection of projects we have worked on — from internal applications, client websites, to SaaS products.',
      },
      projects: [
        {
          slug: 'simpel-pos',
          title: 'Simpel POS',
          tagline: 'Point of Sale Application for Indonesian UMKM',
          description: 'A simple POS application that helps small shop owners and UMKM track products, stock, transactions, finances, and reorder alerts from a single dashboard.',
          tech: ['Laravel', 'PHP', 'Blade', 'MySQL'],
          image: '/project-images/Dashboard-Simpel-POS-Light.png',
          url: 'https://github.com/ryansutrisno/simpel-pos-laravel',
          category: 'Web Apps',
        },
        {
          slug: 'simpel-pos-landing',
          title: 'Simpel POS Landing',
          tagline: 'Marketing site for Simpel POS product',
          description: 'A modern landing page built with Astro to introduce the Simpel POS product to potential users.',
          tech: ['Astro', 'TypeScript', 'Tailwind CSS'],
          image: '/project-images/Simple-Pos-Thumbnail.png',
          url: 'https://simpel-pos.trazmedia.com',
          category: 'Landing Page',
        },
        {
          slug: 'gojamu',
          title: 'Gojamu',
          tagline: 'Modern landing page for herbal products',
          description: 'A landing page for GoJamu herbal products built with Astro, deployed on Vercel, with Meta Pixel integration and WhatsApp CTA.',
          tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'Vercel'],
          image: '/project-images/Gojamu.png',
          url: 'https://gojamu.vercel.app',
          category: 'Landing Page',
        },
        {
          slug: 'gojamu-reseller',
          title: 'Gojamu Reseller',
          tagline: 'Reseller management system for GoJamu operations',
          description: 'A reseller management app with role-based authentication, admin/reseller dashboards, product master data, warehouse, inventory, price tiers, rewards, and stock tracking.',
          tech: ['Laravel', 'Inertia.js', 'React 19', 'TypeScript', 'Tailwind v4'],
          image: '/project-images/screencapture-gojamu-reseller-test-admin-dashboard-2026-05-21-05_29_20.png',
          url: 'https://github.com/ryansutrisno/gojamu-reseller',
          category: 'Web Apps',
        },
        {
          slug: 'ezitour',
          title: 'EziTour',
          tagline: 'Indonesian tour & travel booking platform',
          description: 'An end-to-end tour booking platform: public catalog, checkout, Midtrans payment, traveler dashboard, and Filament admin panel.',
          tech: ['Laravel 12', 'Filament', 'Midtrans', 'MySQL'],
          image: '/project-images/Thumbnail-EziTour.png',
          url: 'https://github.com/ryansutrisno/ezitour',
          category: 'Web Apps',
        },
        {
          slug: 'suntree',
          title: 'Suntree',
          tagline: 'Online Quran learning marketplace',
          description: 'A cohort-based platform for online Quran learning. Connects students with verified teachers through batch-based programs and payment confirmation.',
          tech: ['Laravel', 'Inertia.js', 'React 19', 'TypeScript', 'Tailwind v4'],
          image: '/project-images/Thumbnail-Suntree.png',
          url: 'https://github.com/ryansutrisno/suntree',
          category: 'Web Apps',
        },
        {
          slug: 'isometricon',
          title: 'Isometricon',
          tagline: 'AI-powered Isometric Icon Generator',
          description: 'An AI-based tool for quickly generating isometric icons. Built with TypeScript and deployed on Vercel.',
          tech: ['TypeScript', 'AI', 'Vercel'],
          image: '/project-images/isometric-icon-generator.png',
          url: 'https://isometricon-generator.vercel.app',
          category: 'Web Apps',
        },
        {
          slug: '4da-cathering',
          title: '4DA Cathering',
          tagline: 'Grilled chicken catering product catalog',
          description: 'A landing page for a catering business specializing in grilled chicken rice. Built with Astro and Tailwind CSS.',
          tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'Vercel'],
          image: '/project-images/Thumbnail-4dacathering.png',
          url: 'https://4dacathering.vercel.app',
          category: 'Landing Page',
        },
      ],
      cta: 'Need a solution like these? Tell us about your project.',
    },
    blog: {
      hero: {
        heading: 'Blog',
        description: 'Articles, tips, and insights about web development, mobile apps, and digital technology.',
      },
      placeholder: {
        heading: 'Coming Soon',
        description: 'We are preparing quality content for you. In the meantime, follow us on social media for the latest updates.',
      },
    },
    contact: {
      hero: {
        heading: 'Contact',
        description: 'Have questions or want to start a project? We are ready to help. Choose the channel that works best for you.',
      },
      wa: {
        heading: 'WhatsApp',
        description: 'Chat with us directly via WhatsApp for a quick and FREE consultation.',
        button: 'Chat via WhatsApp',
      },
      email: {
        heading: 'Email',
        description: 'Send your project details or questions via email. We will respond within 1×24 hours.',
        button: 'Send Email',
      },
    },
    faq: {
      heading: 'Frequently Asked Questions',
      description: 'Get answers to common questions about our services.',
      items: [
        {
          question: 'Can I request revisions during development?',
          answer: 'Of course. Every project includes revision sessions based on the service type. We ensure the final result meets your needs.',
        },
        {
          question: 'Is there support after the project is completed?',
          answer: 'Yes, we provide post-project support to help with any issues or questions about the website/app we built.',
        },
        {
          question: 'How long does project development take?',
          answer: 'It depends on complexity. Landing pages typically take 1-2 weeks, web apps 3-8 weeks, mobile apps 4-12 weeks. We will provide a detailed estimate during consultation.',
        },
        {
          question: 'Can I request custom features outside the standard packages?',
          answer: 'Absolutely. Every project is treated as custom according to your business needs. Tell us your requirements during consultation and we will provide the best solution.',
        },
      ],
    },
    footer: {
      copyright: '© {year} Trazmedia Segoro Digital. All rights reserved.',
      tagline: 'Code that scales, design that converts',
      secondaryTagline: 'Bridging design + code + business',
    },
    cta: {
      waMessage: 'Hi Trazmedia, I am interested in your services and would like to discuss further.',
    },
  },
};
