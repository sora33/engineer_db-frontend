export const PurposeOptions = [
  { label: "一緒に開発をする人を探したい", value: "partner" },
  { label: "仕事を探している", value: "work" },
  { label: "趣味・プライベートの友達を探したい", value: "hobby" },
  { label: "その他", value: "other" },
];
export const OccupationOptions = [
  { label: "エンジニア", value: "engineer" },
  { label: "プロジェクトマネージャー", value: "projectManager" },
  { label: "コンサルタント", value: "consultant" },
  { label: "データアナリスト", value: "dataAnalyst" },
  { label: "CTO・技術顧問", value: "cto" },
  { label: "その他", value: "other" },
];

export const WorkOptions = [
  { label: "正社員", value: "fullTime" },
  { label: "フリーランス", value: "freelancer" },
  { label: "経営者", value: "businessOwner" },
  { label: "学生", value: "student" },
  { label: "その他", value: "other" },
];

export const GenderOptions = [
  { label: "男性", value: "male" },
  { label: "女性", value: "female" },
  { label: "その他", value: "other" },
];
export const ExperienceOptions = [
  { label: "1年", value: "1" },
  { label: "2年", value: "2" },
  { label: "3年", value: "3" },
  { label: "4年", value: "4" },
  { label: "5年", value: "5" },
  { label: "6年", value: "6" },
  { label: "7年", value: "7" },
  { label: "8年", value: "8" },
  { label: "9年", value: "9" },
  { label: "10年", value: "10" },
  { label: "11年", value: "11" },
  { label: "12年", value: "12" },
  { label: "13年", value: "13" },
  { label: "14年", value: "14" },
  { label: "15年", value: "15" },
  { label: "16年", value: "16" },
  { label: "17年", value: "17" },
  { label: "18年", value: "18" },
  { label: "19年", value: "19" },
  { label: "20年", value: "20" },
  { label: "21年", value: "21" },
  { label: "22年", value: "22" },
  { label: "23年", value: "23" },
  { label: "24年", value: "24" },
  { label: "25年", value: "25" },
  { label: "26年", value: "26" },
  { label: "27年", value: "27" },
  { label: "28年", value: "28" },
  { label: "29年", value: "29" },
  { label: "30年", value: "30" },
  { label: "31年", value: "31" },
  { label: "32年", value: "32" },
  { label: "33年", value: "33" },
  { label: "34年", value: "34" },
  { label: "35年", value: "35" },
  { label: "36年", value: "36" },
  { label: "37年", value: "37" },
  { label: "38年", value: "38" },
  { label: "39年", value: "39" },
  { label: "40年", value: "40" },
];

const Prefecture1Options = {
  name: "北海道・東北",
  options: [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
  ],
};

const Prefecture2Options = {
  name: "関東",
  options: [
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
  ],
};

const Prefecture3Options = {
  name: "中部",
  options: [
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
  ],
};
const Prefecture4Options = {
  name: "近畿",
  options: [
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
  ],
};

const Prefecture5Options = {
  name: "中国・四国",
  options: [
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
  ],
};

const Prefecture6Options = {
  name: "九州・沖縄",
  options: [
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県",
  ],
};

export const PrefectureOptions = [
  Prefecture1Options,
  Prefecture2Options,
  Prefecture3Options,
  Prefecture4Options,
  Prefecture5Options,
  Prefecture6Options,
];

export const PROJECT_SKILL_LIST = [
  { value: "project_management", label: "PjM" },
  { value: "product_management", label: "PdM" },
  { value: "project_management_office", label: "PMO" },
  { value: "project_leader", label: "PL" },
  { value: "chief_technology_officer", label: "CTO" },
  { value: "tech_lead", label: "テックリード" },
];

export const SOFTWHERE_SKILL_LIST = [
  { value: "requirements_definition", label: "要件定義" },
  { value: "basic_design", label: "基本設計" },
  { value: "detailed_design", label: "詳細設計" },
  { value: "frontend_development", label: "フロントエンド" },
  { value: "backend_development", label: "バックエンド" },
  { value: "infrastructure", label: "インフラ" },
  { value: "mobile_development", label: "モバイル開発" },
  { value: "game_development", label: "ゲーム開発" },
  { value: "business_system_development", label: "業務系システム開発" },
  { value: "embedded_development", label: "組み込み開発" },
  { value: "ecommerce_site", label: "ECサイト" },
  { value: "database_design_construction", label: "データベース設計・構築" },
  { value: "big_data", label: "データサイエンス" },
  { value: "vr", label: "VR・AR・XR" },
  { value: "test_design", label: "テスト設計" },
  { value: "quality_assurance", label: "QA" },
  { value: "tester", label: "テスター" },
];

export const PROGRAMMING_SKILL_LIST = [
  { value: "html_css", label: "HTML/CSS" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "python", label: "Python" },
  { value: "perl", label: "Perl" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "dart", label: "Dart" },
  { value: "swift", label: "Swift" },
  { value: "objective_c", label: "Objective-C" },
  { value: "java", label: "Java" },
  { value: "kotlin", label: "Kotlin" },
  { value: "scala", label: "Scala" },
  { value: "c_sharp", label: "C#" },
  { value: "asp_net", label: "ASP.NET" },
  { value: "c_language", label: "C言語" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "zig", label: "Zig" },
  { value: "c_plus_plus", label: "C++" },
  { value: "carbon", label: "Carbon" },
  { value: "webassembly", label: "WebAssembly" },
  { value: "erlang", label: "Erlang" },
  { value: "elixir", label: "Elixir" },
  { value: "r", label: "R" },
  { value: "clojure", label: "Clojure" },
  { value: "haskell", label: "Haskell" },
  { value: "vba", label: "VBA" },
  { value: "vbscript", label: "VBScript" },
  { value: "cobol", label: "COBOL" },
  { value: "sql", label: "SQL" },
  { value: "pl_sql", label: "PL/SQL" },
];

export const FRAMEWORK_SKILL_LIST = [
  { value: "laravel", label: "Laravel" },
  { value: "cakephp", label: "CakePHP" },
  { value: "fuelphp", label: "FuelPHP" },
  { value: "symfony", label: "Symfony" },
  { value: "ruby_on_rails", label: "Ruby on Rails" },
  { value: "django", label: "Django" },
  { value: "flask", label: "Flask" },
  { value: "angular", label: "Angular" },
  { value: "react_js", label: "React.js" },
  { value: "next_js", label: "Next.js" },
  { value: "vue_js", label: "Vue.js" },
  { value: "nuxt_js", label: "Nuxt.js" },
  { value: "express_js", label: "Express.js" },
  { value: "nestjs", label: "NestJS" },
  { value: "node_js", label: "Node.js" },
  { value: "deno", label: "deno" },
  { value: "electron", label: "Electron" },
  { value: "flutter", label: "Flutter" },
  { value: "react_native", label: "React Native" },
  { value: "xamarin", label: "Xamarin" },
  { value: "cordova", label: "Cordova" },
  { value: "spring", label: "Spring" },
  { value: "spring_boot", label: "Spring Boot" },
  { value: "struts", label: "Struts" },
  { value: "seasar2", label: "Seasar2" },
  { value: "unity", label: "Unity" },
  { value: "hadoop", label: "Hadoop" },
  { value: "apache_spark", label: "Apache Spark" },
];

export const DATABASE_SKILL_LIST = [
  { value: "oracle", label: "Oracle" },
  { value: "mysql", label: "MySQL" },
  { value: "postgresql", label: "PostgreSQL" },
  { value: "sql_server", label: "SQL Server" },
  { value: "access", label: "Access" },
  { value: "mongodb", label: "MongoDB" },
  { value: "redis", label: "Redis" },
  { value: "cassandra", label: "Cassandra" },
  { value: "sqlite", label: "SQLite" },
  { value: "elasticsearch", label: "Elasticsearch" },
];

export const TOOL_SKILL_LIST = [
  { value: "aws", label: "AWS" },
  { value: "azure", label: "Azure" },
  { value: "gcp", label: "GCP" },
  { value: "wordpress", label: "WordPress" },
  { value: "ansible", label: "Ansible" },
  { value: "chef", label: "Chef" },
  { value: "terraform", label: "Terraform" },
  { value: "jenkins", label: "Jenkins" },
  { value: "docker", label: "Docker" },
  { value: "kubernetes", label: "Kubernetes" },
  { value: "tensorflow", label: "Tensorflow" },
  { value: "firebase", label: "Firebase" },
  { value: "tableau", label: "Tableau" },
  { value: "scikit_learn", label: "scikit-learn" },
  { value: "pytorch", label: "PyTorch" },
  { value: "salesforce", label: "Salesforce" },
  { value: "sap", label: "SAP" },
  { value: "active_directory", label: "Active Directory" },
  { value: "uipath", label: "UiPath" },
];

export const SKILL_LIST = [
  ...PROJECT_SKILL_LIST,
  ...SOFTWHERE_SKILL_LIST,
  ...PROGRAMMING_SKILL_LIST,
  ...FRAMEWORK_SKILL_LIST,
  ...DATABASE_SKILL_LIST,
  ...TOOL_SKILL_LIST,
];

export const SKILL_FILTER_OPTION = [
  { value: "0", label: "すべて表示" },
  { value: "1", label: "Lv.1以上を表示" },
  { value: "2", label: "Lv.2以上を表示" },
  { value: "3", label: "Lv.3以上を表示" },
  { value: "4", label: "Lv.4以上を表示" },
  { value: "5", label: "Lv.5以上を表示" },
  { value: "6", label: "Lv.6以上を表示" },
  { value: "7", label: "Lv.7を表示" },
];
