export const Constants = {
  USER_TYPE: {
    EMPLOYER: 0,
    TALENT: 1,
  },
  JOB_EXPERIENCE_YEAR: {
    JR: {
      key: 'Jr. level: 1-3 years',
      value: 0,
    },
    MID: {
      key: 'Mid level: 4-6 years',
      value: 1,
    },
    SR: {
      key: 'Sr. level: 7+ years',
      value: 2,
    },
    MD: {
      key: 'Manager/Director',
      value: 3,
    }
  },
  WHAT_BRINGS: {
    LOOKING_JOB: {
      key: 'I am actively looking for a new job',
      value: 0,
    },
    INTERESTING_OFFER: {
      key: 'I am open to interesting offers',
      value: 1,
    },
    CURIOUS: {
      key: 'I am just curious',
      value: 2,
    },
  },
  JOB_TITLES: {
    FE_ENG: {
      key: 'Frontend Engineer',
      value: 0,
      group: 0,
    },
    BE_ENG: {
      key: 'Backend Engineer',
      value: 1,
      group: 0,
    },
    FS_ENG: {
      key: 'Fullstack Engineer',
      value: 2,
      group: 0,
    },
    MOB_ENG: {
      key: 'Mobile Engineer',
      value: 3,
      group: 0,
    },
    EMB_ENG: {
      key: 'Embedded Engineer',
      value: 4,
      group: 0,
    },
    HARD_ENG: {
      key: 'Hardware Engineer',
      value: 5,
      group: 0,
    },
    DATA_ENG: {
      key: 'Data Engineer',
      value: 6,
      group: 0,
    },
    MCH_ENG: {
      key: 'Machine Learning Engineer',
      value: 7,
      group: 0,
    },
    SEC_ENG: {
      key: 'Security Engineer',
      value: 8,
      group: 0,
    },
    BCHAIN_ENG: {
      key: 'Blockchain Engineer',
      value: 9,
      group: 0,
    },
    CMP_ENG: {
      key: 'Computer Vision Engineer',
      value: 10,
      group: 0,
    },
    GAME_ENG: {
      key: 'Gaming Engineer',
      value: 11,
      group: 0,
    },
    NLP_ENG: {
      key: 'Nlp Engineer',
      value: 12,
      group: 0,
    },
    SEARCH_ENG: {
      key: 'Search Engineer',
      value: 13,
      group: 0,
    },
    APP_MAN: {
      key: 'Application Engineering Manager',
      value: 14,
      group: 1,
    },
    DATA_MAN: {
      key: 'Data Infrastructure Manager',
      value: 15,
      group: 1,
    },
    DEV_MAN: {
      key: 'DevOps Manager',
      value: 16,
      group: 1,
    },
    MCH_MAN: {
      key: 'Machine Learning Manager',
      value: 17,
      group: 1,
    },
    MOB_MAN: {
      key: 'Mobile Engineering Manager',
      value: 18,
      group: 1,
    },
    QA_MAN: {
      key: 'QA Manager',
      value: 19,
      group: 1,
    },
    SEARCH_MAN: {
      key: 'Search Engineer Manager',
      value: 20,
      group: 2,
    },
    BUILD_OP: {
      key: 'Build/Release Engineer',
      value: 21,
      group: 2,
    },
    DEV_OP: {
      key: 'DevOps Engineer',
      value: 22,
      group: 2,
    },
    SITE_OP: {
      key: 'Site Reliablity Engineer',
      value: 23,
      group: 2,
    },
    BRAND_DESIGN: {
      key: 'Brand/Graphic Designer',
      value: 24,
      group: 3,
    },
    PROD_DESIGN: {
      key: 'Product Designer',
      value: 25,
      group: 3,
    },
    UX_DESIGN: {
      key: 'UX Designer',
      value: 26,
      group: 3,
    },
    UI_DESIGN: {
      key: 'UI Designer',
      value: 27,
      group: 3,
    },
    PROD_PROJ: {
      key: 'Product Manager',
      value: 28,
      group: 4,
    },
    IT_PROJ: {
      key: 'IT Project Manager',
      value: 29,
      group: 4,
    },
    PROG_PROJ: {
      key: 'Program Manager',
      value: 30,
      group: 4,
    },
    DATA_ANAL: {
      key: 'Data Analyst',
      value: 31,
      group: 5,
    },
    DATAS_ANAL: {
      key: 'Data Scientist',
      value: 32,
      group: 5,
    },
    BUS_ANAL: {
      key: 'Business Analyst',
      value: 33,
      group: 5,
    },
    TEST_QA: {
      key: 'QA Test Automation Engineer',
      value: 34,
      group: 6,
    },
    MANUAL_QA: {
      key: 'QA Manual Test Engineer',
      value: 35,
      group: 6,
    },
    DATA_INFO: {
      key: 'Database Administrator',
      value: 36,
      group: 7,
    },
    BUS_INFO: {
      key: 'Business System Engineer',
      value: 37,
      group: 7,
    },
    DESK_INFO: {
      key: 'Desktop Support',
      value: 38,
      group: 7,
    },
    NOC_INFO: {
      key: 'NOC Engineer',
      value: 39,
      group: 7,
    },
    NET_INFO: {
      key: 'Network Administrator',
      value: 40,
      group: 7,
    },
    SALE_INFO: {
      key: 'Salesforce Developer',
      value: 41,
      group: 7,
    },
    SOL_INFO: {
      key: 'Solution Engineer',
      value: 42,
      group: 7,
    },
    SYS_INFO: {
      key: 'System Administrator',
      value: 43,
      group: 7,
    },
  },
  JOB_GROUPS: [
    {
      key: 0,
      value: 'SOFTWARE ENGINEERING',
    },
    {
      key: 1,
      value: 'ENGINEERING MANAGEMENT',
    },
    {
      key: 2,
      value: 'DEVELOPER OPERATIONS',
    },
    {
      key: 3,
      value: 'DESIGN',
    },
    {
      key: 4,
      value: 'PROJECT MANAGEMENT',
    },
    {
      key: 5,
      value: 'DATA ANALYTICS',
    },
    {
      key: 6,
      value: 'QUALITY ASSURANCE',
    },
    {
      key: 7,
      value: 'INFORMATION TECHNOLOGY',
    },
  ],
  JOB_TIME: {
    FULL_TIME: {
      key: 'Full Time',
      value: 0,
    },
    CONTRACT_FL: {
      key: 'Contract',
      value: 1,
    },
  },
  JOB_TIME_2: {
    FULL_TIME: {
      key: 'Full Time',
      value: 0,
    },
    CONTRACT_FL: {
      key: 'Contract',
      value: 1,
    },
    CONTRACT_HR: {
      key: 'Contract to Hire',
      value: 2,
    }
  },
  WORK_PLACE: {
    NEW_YORK: {
      key: 'New York',
      value: 0,
      group: 5,
    },
    SAN_FRANSISCO: {
      key: 'San Francisco',
      value: 1,
      group: 9,
    },
    WASHINGTON: {
      key: 'Washington D.C.',
      value: 2,
      group: 10,
    },
    SEATTLE: {
      key: 'Seattle',
      value: 3,
      group: 9,
    },
    SAN_JOSE: {
      key: 'San Jose',
      value: 4,
      group: 9,
    },
    MADISON: {
      key: 'Madison',
      value: 5,
      group: 4,
    },
    RALEIGH: {
      key: 'Raleigh',
      value: 6,
      group: 8,
    },
    AUSTIN: {
      key: 'Austin',
      value: 7,
      group: 0,
    },
    BOSTON: {
      key: 'Boston',
      value: 8,
      group: 1,
    },
    SACRAMENTO: {
      key: 'Sacramento',
      value: 9,
      group: 9,
    },
    PORTLAND: {
      key: 'Portland',
      value: 10,
      group: 7,
    },
    ATLANTA: {
      key: 'Atlanta',
      value: 11,
      group: 0,
    },
    DALLAS_FORT_WORTH: {
      key: 'Dallas - Fort Worth',
      value: 12,
      group: 3,
    },
    DURHAM_CHAPEL_HILL: {
      key: 'Durham - Chapel Hill',
      value: 13,
      group: 3,
    },
    OMAHA: {
      key: 'Omaha',
      value: 14,
      group: 6,
    },
    PHOENIX: {
      key: 'Phoenix',
      value: 15,
      group: 7,
    },
    SALT_LAKE_CITY: {
      key: 'Salt Lake City',
      value: 16,
      group: 9,
    },
    DENVER: {
      key: 'Denver',
      value: 17,
      group: 3,
    },
    SAN_ANTONIO: {
      key: 'San Antonio',
      value: 18,
      group: 9,
    },
    CHARLOTTE: {
      key: 'Charlotte',
      value: 19,
      group: 2,
    },
    SAN_DIEGO: {
      key: 'San Diego',
      value: 20,
      group: 9,
    },
    PITTSBURGH: {
      key: 'Pittsburgh',
      value: 21,
      group: 7,
    },
    OTHER: {
      key: 'OTHER',
      value: 22,
      group: 6,
    },
    REMOTE: {
      key: 'Remote',
      value: 23,
      group: 8,
    },
  },
  CITY_GROUPS: [
    {
      key: 0,
      value: 'A',
    },
    {
      key: 1,
      value: 'B',
    },
    {
      key: 2,
      value: 'C',
    },
    {
      key: 3,
      value: 'D',
    },
    {
      key: 4,
      value: 'M',
    },
    {
      key: 5,
      value: 'N',
    },
    {
      key: 6,
      value: 'O',
    },
    {
      key: 7,
      value: 'P',
    },
    {
      key: 8,
      value: 'R',
    },
    {
      key: 9,
      value: 'S',
    },
    {
      key: 10,
      value: 'W',
    },
  ],
  START_TIME: {
    NOW: {
      key: 'Now',
      value: 0,
    },
    AFTER_SPECIFIC_DATE: {
      key: 'After Specific Date',
      value: 2,
    },
  },
  LANGUAGE_LEVEL: {
    BASIC: {
      key: 'Basic',
      value: 0,
    },
    CONVERSATIONAL: {
      key: 'Conversational',
      value: 1,
    },
    WORKING_PROFICIENCY: {
      key: 'Working Proficiency',
      value: 2,
    },
    FLUENT: {
      key: 'Fluent',
      value: 3,
    },
    NATIVE: {
      key: 'Native',
      value: 4,
    },
  },
  CURRENCY: {
    DOLLAR: {
      key: 'Dollar',
      value: '$',
    },
  },
  COMPANY_SIZE: {
    1: {
      key: '0-50',
      value: 0,
    },
    2: {
      key: '51-200',
      value: 1,
    },
    3: {
      key: '201-500',
      value: 2,
    },
    4: {
      key: '501-1000',
      value: 3,
    },
    5: {
      key: '1001-5000',
      value: 4,
    },
    6: {
      key: '5000+',
      value: 5,
    },
  },
  INDUSTRIES: {
    AEROSPACE_INDUSTRY: {
      key: 'Aerospace Industry',
      value: 0,
    },
    TRANSPORT_INDUSTRY: {
      key: 'Transport Industry',
      value: 1,
    },
    COMPUTER_INDUSTRY: {
      key: 'Computer Industry',
      value: 2,
    },
    TELECOMMUNICATION_INDUSTRY: {
      key: 'Telecommunication industry',
      value: 3,
    },
    AGRICULTURE_INDUSTRY: {
      key: 'Agriculture industry',
      value: 4,
    },
    CONSTRUCTION_INDUSTRY: {
      key: 'Construction Industry',
      value: 5,
    },
    EDUCATION_INDUSTRY: {
      key: 'Education Industry',
      value: 6,
    },
    PHARMACEUTICAL_INDUSTRY: {
      key: 'Pharmaceutical Industry',
      value: 7,
    },
    FOOD_INDUSTRY: {
      key: 'Food industry',
      value: 8,
    },
    HEALTHCARE_INDUSTRY: {
      key: 'Healthcare industry',
      value: 9,
    },
    HOSPITALITY_INDUSTRY: {
      key: 'Hospitality industry',
      value: 10,
    },
    ENTERTAINMENT_INDUSTRY: {
      key: 'Entertainment industry',
      value: 11,
    },
    NEWSMEDIA_INDUSTRY: {
      key: 'News Media industry',
      value: 12,
    },
    ENERGY_INDUSTRY: {
      key: 'Energyindustry',
      value: 13,
    },
    MANIFACTURING_INDUSTRY: {
      key: 'Manifacturing industry',
      value: 14,
    },
    MUSIC_INDUSTRY: {
      key: 'Music industry',
      value: 15,
    },
    MINING_INDUSTRY: {
      key: 'Mining industry',
      value: 16,
    },
    WORLDWIDEWEB_INDUSTRY: {
      key: 'Worldwide Web industry',
      value: 17,
    },
    ELECTRONIC_INDUSTRY: {
      key: 'Electronic industry',
      value: 18,
    },
    OTHER_INDUSTRY: {
      key: 'Other',
      value: 19,
    },
  },
  EXPERIENCE_YEAR: {
    1: {
      key: '0-2',
      value: 0,
    },
    2: {
      key: '3-5',
      value: 1,
    },
    3: {
      key: '6-8',
      value: 2,
    },
    4: {
      key: '9+',
      value: 3,
    },
  },
  APPOINMTMENT_TIME: {
    1: {
      key: '9-10 am',
      value: 1,
    },
    2: {
      key: '10-11 am',
      value: 2,
    },
    3: {
      key: '11-12 am',
      value: 3,
    },
    4: {
      key: '12-1 pm',
      value: 4,
    },
    5: {
      key: '1-2 pm',
      value: 5,
    },
    6: {
      key: '2-3 pm',
      value: 6,
    },
    7: {
      key: '3-4 pm',
      value: 7,
    },
    8: {
      key: '4-5 pm',
      value: 8,
    },
  },
};
