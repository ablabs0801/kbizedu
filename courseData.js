/**
 * Biz Partners AI 교육 과정 통합 데이터
 * 각 ID는 메인 페이지의 표 순서와 일치합니다.
 */
const courseData = {
  "1": {
    badge: "생성형AI활용 업무생산성과 효율성 극대화",
    title: "스마트워크 & AI 기반 업무혁신",
    point: "시간낭비를 제거하고 직무생산성 향상과 직결",
    target: "중소제조기업 재직자",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "350,000",
    memberPrice: "320,000",
    hours: "8시간",
    schedule: ["2025. 03. 11", "2025. 05. 13", "2025. 06. 12", "2025. 10. 14"],
    features: [
      {
        icon: 'fa-rocket',
        iconColor: 'blue',
        title: '스마트워크 혁신',
        description: '불필요한 수작업을 제거하고 AI와 협업하는 차세대 업무 로직을 구축합니다.'
      },
      {
        icon: 'fa-chart-line',
        iconColor: 'green',
        title: '생산성 극대화',
        description: '시간 낭비 요소를 자동화하여 성과 창출을 위한 핵심 업무에 집중합니다.'
      },
      {
        icon: 'fa-check-double',
        iconColor: 'orange',
        title: '실전형 결과물',
        description: '이론 중심 교육이 아닌 현장에서 즉시 활용 가능한 최적의 아웃풋을 도출합니다.'
      }
    ],
    featureSection: {
      title: 'AI와 함께하는 스마트워크,<br /><span class="text-[#4A6CF7]">업무 혁신</span>의 시작입니다.',
      description: '더 적게 일하고 더 많은 성과를 내는 비결, AI에서 찾으세요.'
    }
  },
  "2": {
    badge: "기본 홈페이지를 AI를 이용하여 1일 내 구축",
    title: "우리 회사 홈페이지를 내가 만들 수 있다고?",
    point: "소규모 기업·소상공인에게 홈페이지 제작 비용 절감과 지속적인 콘텐츠 업데이트 능력을 제공",
    target: "홈페이지 관리 담당자, 홍보·마케팅·영업 지원 담당자, 소규모 사업장 대표·실무자",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "350,000",
    memberPrice: "320,000",
    hours: "8시간",
    schedule: ["2025. 04. 03", "2025. 06. 15", "2025. 09. 04", "2025. 10. 13"],
    features: [
      {
        icon: 'fa-globe',
        iconColor: 'blue',
        title: '1일 내 홈페이지 구축',
        description: 'AI 도구를 활용해 단 하루 만에 전문적인 홈페이지를 완성합니다.'
      },
      {
        icon: 'fa-coins',
        iconColor: 'green',
        title: '제작비용 대폭 절감',
        description: '외주 제작비 없이 직접 제작하여 수백만 원의 비용을 절감합니다.'
      },
      {
        icon: 'fa-sync',
        iconColor: 'purple',
        title: '지속적인 업데이트',
        description: '직접 콘텐츠를 수정하고 관리할 수 있는 능력을 갖춥니다.'
      }
    ],
    featureSection: {
      title: '이제는 <span class="text-[#4A6CF7]">내 손으로</span><br />홈페이지를 직접 관리하세요.',
      description: '외주 개발사에 의존하지 않고, 원하는 때에 원하는 내용을 즉시 업데이트할 수 있습니다.'
    }
  },
  "3": {
    badge: "재고 등록·수정·삭제·조회 기능을 갖춘 기초 재고 관리 웹앱을 구축",
    title: "우리 회사 재고 관리를 웹앱으로 내가 만들 수 있다고?",
    point: "스마트폰으로 바코드를 현장·사무·대표 모두가 실시간으로 재고 현황을 공유",
    target: "재고·자재·창고 관리 담당자, 소규모 사업장 대표·실무자,사무·영업 관리 담당자",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "350,000",
    memberPrice: "320,000",
    hours: "8시간",
    schedule: ["2025. 03. 13", "2025. 05. 13", "2025. 09. 02", "2025. 10. 15"],
    features: [
      {
        icon: 'fa-barcode',
        iconColor: 'blue',
        title: '모바일 바코드 스캔',
        description: '고가 장비 없이 스마트폰으로 바코드를 찍어 재고를 관리합니다.'
      },
      {
        icon: 'fa-mobile-alt',
        iconColor: 'green',
        title: '실시간 현황 공유',
        description: '현장과 사무실이 동일한 재고 데이터를 실시간으로 확인합니다.'
      },
      {
        icon: 'fa-edit',
        iconColor: 'purple',
        title: '간편한 입출고',
        description: '클릭 몇 번으로 재고 등록, 수정, 삭제를 손쉽게 처리합니다.'
      }
    ],
    featureSection: {
      title: '내 주머니 속의 <span class="text-[#4A6CF7]">재고 창고</span>,<br />스마트폰 하나로 끝내세요.',
      description: '엑셀 파일 찾느라 헤매지 말고, 현장에서 즉시 확인하고 처리하세요.'
    }
  },
  "4": {
    badge: "문의·요청 관리, 출하 일정 관리, A/S 접수 중 하나의 업무 흐름을 설계",
    title: "우리 회사 챗봇을 웹앱으로 내가 만들 수 있다고?",
    point: "챗봇이 1차 응대하게 함으로써, CS 업무 부담을 경감하고 응답 시간·품질을 표준화",
    target: "홈페이지·FAQ·상담 채널 관리 담당자, IT·디지털 전환 담당자, 소규모 사업장 대표·실무자 ",
    image: "https://images.unsplash.com/photo-1535378433864-14be69cb74d4?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "350,000",
    memberPrice: "320,000",
    hours: "8시간",
    schedule: ["2025. 03. 17", "2025. 04. 15", "2025. 06. 16", "2025. 09. 09"],
    features: [
      {
        icon: 'fa-robot',
        iconColor: 'blue',
        title: 'AI 챗봇 1차 응대',
        description: '24시간 자동 응답으로 고객 문의에 즉시 대응합니다.'
      },
      {
        icon: 'fa-clock',
        iconColor: 'orange',
        title: '응답 시간 단축',
        description: 'CS 업무 부담을 줄이고 응답 품질을 표준화합니다.'
      },
      {
        icon: 'fa-tasks',
        iconColor: 'green',
        title: '업무 흐름 설계',
        description: '문의, 출하, A/S 등 핵심 업무 프로세스를 자동화합니다.'
      }
    ],
    featureSection: {
      title: '24시간 잠들지 않는,<br /><span class="text-[#4A6CF7]">AI 상담원</span>을 채용하세요.',
      description: '단순 반복 문의는 AI에게 맡기고, 더 가치 있는 고객 경험에 집중하세요.'
    }
  },
  "5": {
    badge: "문의·요청 관리, 출하 일정 관리, A/S 접수 중 하나의 업무 흐름을 설계",
    title: "우리 회사 미니 웹서비스 만들기",
    point: "내부 인력이 스스로 관리 기능을 개선·확장할 수 있는 역량을 기르는 데 직결",
    target: "사내 IT 담당자, 현장·사무 관리자, 홈페이지 관리 담당자(HTML 아주 기초 수준만 알아도 참여 가능)",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "650,000",
    memberPrice: "600,000",
    hours: "16시간",
    schedule: ["2025. 04. 13", "2025. 06. 08", "2025. 09. 07", "2025. 11. 09"],
    features: [
      {
        icon: 'fa-project-diagram',
        iconColor: 'purple',
        title: '업무 흐름 설계',
        description: '우리 회사만의 독특한 업무 프로세스를 웹 서비스로 구현합니다.'
      },
      {
        icon: 'fa-wrench',
        iconColor: 'blue',
        title: '쉬운 유지보수',
        description: '개발자 없이도 내부 인력이 직접 기능을 수정하고 개선합니다.'
      },
      {
        icon: 'fa-concierge-bell',
        iconColor: 'orange',
        title: '맞춤형 서비스',
        description: '문의, 예약, A/S 접수 등 필요한 기능만 쏙 골라 만듭니다.'
      }
    ],
    featureSection: {
      title: '딱 맞는 프로그램이 없다면,<br /><span class="text-[#4A6CF7]">직접 만들어</span> 쓰세요.',
      description: '기성 서비스에 업무를 맞추지 말고, 우리 업무에 딱 맞는 도구를 가지세요.'
    }
  },
  "6": {
    badge: "웹 기반 관리자 페이지에 필요한 데이터 구조와 화면 구성을 설계",
    title: "Cursor로 만드는 우리 회사 재고·출하 관리자 페이지",
    point: "저비용·고효율의 사내 재고 관리 도구를 스스로 설계·운영하는 실질적인 직무 역량을 강화",
    target: "사내 IT 담당자, 재고·출하·물류 담당자, 사무·영업 관리 담당자",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "650,000",
    memberPrice: "600,000",
    hours: "16시간",
    schedule: ["2025. 03. 10", "2025. 05. 12", "2025. 06. 08", "2025. 11. 10"],
    features: [
      {
        icon: 'fa-server',
        iconColor: 'blue',
        title: '데이터 구조 설계',
        description: '재고/출하 관리에 최적화된 DB 구조를 직접 설계합니다.'
      },
      {
        icon: 'fa-laptop-code',
        iconColor: 'purple',
        title: '관리자 페이지 구현',
        description: 'Cursor를 활용해 실무에 맞춘 대시보드를 빠르게 구축합니다.'
      },
      {
        icon: 'fa-boxes',
        iconColor: 'green',
        title: '효율적 자재 관리',
        description: '입출고 현황을 한눈에 파악하고 관리 효율을 높입니다.'
      }
    ],
    featureSection: {
      title: '복잡한 재고 관리, <span class="text-[#4A6CF7]">내 입맛대로</span><br />시스템을 구축하세요.',
      description: '시중의 비싼 ERP 대신, 우리 회사에 딱 맞는 관리 도구를 직접 만듭니다.'
    }
  },
  "7": {
    badge: "업무 매뉴얼·지시사항·FAQ를 수집·분류하여 지식베이스 구조를 설계",
    title: "회사 매뉴얼, FAQ를 AI에 담는 [업무지식 챗봇 기초]",
    point: "데이터 정제·구조화 능력을 키우는 직무 핵심 역량과 직결",
    target: "사내 IT 담당자, 재고·출하·물류 담당자, 사무·영업관리 담당자",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "650,000",
    memberPrice: "600,000",
    hours: "16시간",
    schedule: ["2025. 04. 09", "2025. 05. 14", "2025. 09. 17", "2025. 11. 12"],
    features: [
      {
        icon: 'fa-book',
        iconColor: 'blue',
        title: '지식 데이터 구조화',
        description: '흩어진 사내 매뉴얼과 FAQ를 체계적으로 정리합니다.'
      },
      {
        icon: 'fa-comments',
        iconColor: 'orange',
        title: '사내 챗봇 구축',
        description: '임직원이 궁금해하는 정보를 즉답해주는 AI를 만듭니다.'
      },
      {
        icon: 'fa-user-shield',
        iconColor: 'green',
        title: '운영 관리 노하우',
        description: '지속 가능한 챗봇 운영 및 데이터 관리 방법을 배웁니다.'
      }
    ],
    featureSection: {
      title: '반복되는 사내 문의, <span class="text-[#4A6CF7]">AI 챗봇</span>에게<br />맡기고 업무에 집중하세요.',
      description: '신입사원 온보딩부터 규정 문의까지, AI가 대신 답변해줍니다.'
    }
  },
  "8": {
    badge: "AI로 브랜드 콘텐츠를 만드는 기획",
    title: "기획·마케팅 실무자를 위한 AX 실전 설계 (기본)",
    point: "생각한 기획을 말과 글로 옮기고 루틴화",
    target: "기획·전략, 마케팅·브랜딩,콘텐츠 관련 실무자",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "550,000",
    memberPrice: "500,000",
    hours: "14시간",
    schedule: ["2025. 03. 23", "2025. 06. 22", "2025. 09. 14", "2025. 11. 26"],
    features: [
      {
        icon: 'fa-lightbulb',
        iconColor: 'orange',
        title: '기획의 구체화',
        description: '추상적인 아이디어를 AI와 함께 구체적인 기획안으로 바꿉니다.'
      },
      {
        icon: 'fa-pencil-ruler',
        iconColor: 'blue',
        title: '실무 루틴 설계',
        description: '기획부터 실행까지 AI를 활용한 효율적 프로세스를 짭니다.'
      },
      {
        icon: 'fa-file-alt',
        iconColor: 'purple',
        title: '문서 작성 자동화',
        description: '기획서, 제안서 작성 시간을 획기적으로 단축합니다.'
      }
    ],
    featureSection: {
      title: '막막한 기획, <span class="text-[#4A6CF7]">AI 파트너</span>와 함께<br />속 시원하게 해결하세요.',
      description: '아이디어 도출부터 문서 완성까지, AI가 든든한 조수가 되어줍니다.'
    }
  },
  "9": {
    badge: "기획–브랜딩–숏폼 콘텐츠까지 한 흐름으로 완성",
    title: "기획·마케팅 실무자를 위한 AX 실전 설계 (심화)",
    point: "기획사고의 고도로 자산화 및 확장",
    target: "기획·전략, 마케팅·브랜딩,콘텐츠 관련 실무자",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "650,000",
    memberPrice: "600,000",
    hours: "16시간",
    schedule: ["2025. 04. 09", "2025. 06. 11", "2025. 10. 15", "2025. 11. 12"],
    features: [
      {
        icon: 'fa-layer-group',
        iconColor: 'purple',
        title: '브랜딩의 확장',
        description: '기획한 내용을 바탕으로 브랜딩 전략을 수립합니다.'
      },
      {
        icon: 'fa-video',
        iconColor: 'red',
        title: '숏폼 콘텐츠 제작',
        description: '기획안을 즉시 숏폼 영상으로 변환하는 기술을 익힙니다.'
      },
      {
        icon: 'fa-project-diagram',
        iconColor: 'blue',
        title: '통합 프로세스',
        description: '기획-제작-발행을 하나의 흐름으로 연결합니다.'
      }
    ],
    featureSection: {
      title: '기획에서 콘텐츠까지, <span class="text-[#4A6CF7]">One-Stop</span>으로<br />연결하는 힘을 기르세요.',
      description: '단순 기획을 넘어 실제 결과물까지 만들어내는 AX 전문가로 거듭납니다.'
    }
  },
  "10": {
    badge: "내 업무를 빠르게 끝내는 업무 루틴 만들기",
    title: "AX 실전 설계 : AI와 일하는 방식 만들기 (기본)",
    point: "바쁜 나만의 AI업무 루틴 완성",
    target: "신입사원~관리자",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "350,000",
    memberPrice: "320,000",
    hours: "8시간",
    schedule: ["2025. 04. 20", "2025. 05. 18", "2025. 09. 14", "2025. 10. 19"],
    features: [
      {
        icon: 'fa-clock',
        iconColor: 'green',
        title: '시간 관리 혁신',
        description: '단순 반복 업무를 줄이고 중요한 일에 시간을 씁니다.'
      },
      {
        icon: 'fa-tools',
        iconColor: 'blue',
        title: '도구 최적화',
        description: '나에게 맞는 AI 도구를 찾아 업무 루틴에 적용합니다.'
      },
      {
        icon: 'fa-running',
        iconColor: 'orange',
        title: '업무 속도 향상',
        description: '퇴근 시간을 앞당기는 실질적인 속도 향상을 경험합니다.'
      }
    ],
    featureSection: {
      title: '매일 야근인가요? <span class="text-[#4A6CF7]">나만의 AI 비서</span>로<br />워라밸을 되찾으세요.',
      description: '내 업무 패턴을 분석하고 가장 효율적인 AI 협업 방식을 만듭니다.'
    }
  },
  "11": {
    badge: "반복 업무를 시스템으로 바꾸는 실무 루틴 만들기",
    title: "AX 실전 설계 : AI와 일하는 방식 만들기 (심화)",
    point: "AI협업 사고설계를 팀.조직으로 확장",
    target: "신입사원~관리자",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "650,000",
    memberPrice: "600,000",
    hours: "16시간",
    schedule: ["2025. 03. 25", "2025. 05. 26", "2025. 09. 17", "2025. 10. 14"],
    features: [
      {
        icon: 'fa-users',
        iconColor: 'blue',
        title: '팀 협업 시스템',
        description: '개인의 효율을 넘어 팀 전체의 생산성을 높입니다.'
      },
      {
        icon: 'fa-sitemap',
        iconColor: 'purple',
        title: '업무 프로세스 표준화',
        description: '누구나 쉽게 따라할 수 있는 AI 업무 매뉴얼을 만듭니다.'
      },
      {
        icon: 'fa-chart-pie',
        iconColor: 'green',
        title: '성과 분석',
        description: '업무 효율화가 가져온 성과를 측정하고 개선합니다.'
      }
    ],
    featureSection: {
      title: '혼자 잘하는 것을 넘어, <span class="text-[#4A6CF7]">팀 전체</span>가<br />AI로 일하게 하세요.',
      description: '조직의 일하는 방식을 근본적으로 바꾸는 AX 리더가 되십시오.'
    }
  },
  "12": {
    badge: "SNS 계정 및 브랜드 커뮤니케이션에 바로 적용 가능한 실무 브랜딩 역량",
    title: "브랜드는 어떻게 사람의 선택을 받는가: 관계 기반 브랜딩 실무 과정",
    point: "단기 성과 중심 마케팅에서 벗어나 지속 가능한 브랜드 신뢰를 구축하는 실무 역량 강화",
    target: "개인 브랜드 운영자, 기업·기관 홍보·마케팅·기획 실무자, SNS 계정 운영 담당자",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "330,000",
    memberPrice: "300,000",
    hours: "7시간",
    schedule: ["2025. 03. 19", "2025. 05. 18", "2025. 06. 17", "2025. 09. 11"],
    features: [
      {
        icon: 'fa-heart',
        iconColor: 'red',
        title: '관계 형성',
        description: '고객과 진정성 있는 관계를 맺는 브랜딩 기술을 익힙니다.'
      },
      {
        icon: 'fa-hashtag',
        iconColor: 'blue',
        title: 'SNS 전략',
        description: '플랫폼별 특성에 맞는 매력적인 콘텐츠 전략을 짭니다.'
      },
      {
        icon: 'fa-bullhorn',
        iconColor: 'orange',
        title: '메시지 전달',
        description: '브랜드의 핵심 가치를 명확하게 전달하는 카피를 씁니다.'
      }
    ],
    featureSection: {
      title: '선택받는 브랜드는 <span class="text-[#4A6CF7]">무엇이 다를까요?</span><br />관계의 비밀을 푸세요.',
      description: '단순 노출이 아닌, 고객의 마음을 움직이는 브랜딩의 본질을 배웁니다.'
    }
  },
  "13": {
    badge: "대화형 AI를 활용해 아이디어 기획부터 사업계획서 초안 완성까지 전 과정을 수행",
    title: "AI 활용 정부지원사업계획서 작성 실무 과정",
    point: "심사 기준에 부합하는 문서 작성 역량을 통해 조직의 재원 확보 및 사업 추진 역량 강화에 직접적으로 기여 ",
    target: " 기업·단체 실무자, 창업팀, 사회적기업, 협동조합, 예비창업자",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "280,000",
    memberPrice: "250,000",
    hours: "6시간",
    schedule: ["2025. 03. 26", "2025. 04. 23", "2025. 06. 19", "2025. 09. 02"],
    features: [
      {
        icon: 'fa-search-dollar',
        iconColor: 'green',
        title: '사업 기회 포착',
        description: 'AI와 함께 시장을 분석하고 지원사업 아이템을 발굴합니다.'
      },
      {
        icon: 'fa-clipboard-check',
        iconColor: 'blue',
        title: '평가 지표 공략',
        description: '심사위원이 원하는 핵심 포인트를 정확히 타격합니다.'
      },
      {
        icon: 'fa-pen-fancy',
        iconColor: 'purple',
        title: '작성 시간 단축',
        description: '복잡한 사업계획서 초안을 AI로 빠르게 작성합니다.'
      }
    ],
    featureSection: {
      title: '합격하는 사업계획서, <span class="text-[#4A6CF7]">AI 컨설턴트</span>와<br />함께 작성하세요.',
      description: '막막한 지원사업 준비, 아이디어 정리부터 문서 완성까지 논스톱으로 해결합니다.'
    }
  },
  "14": {
    badge: "기업 홍보에 바로 활용 가능한 이미지 및 숏폼 영상을 제작",
    title: "기업 홍보에 바로 쓰는 AI 이미지·영상 콘텐츠 제작 실무 과정",
    point: "AI 기반 제작 역량을 통해 업무 효율성과 홍보 성과를 동시에 향상",
    target: "기업·기관 홍보, 마케팅, 기획, 콘텐츠 담당 실무자",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "330,000",
    memberPrice: "300,000",
    hours: "7시간",
    schedule: ["2025. 03. 27", "2025. 04. 17", "2025. 05. 22", "2025. 06. 18", "2025. 09. 04"],
    features: [
      {
        icon: 'fa-image',
        iconColor: 'purple',
        title: '고퀄리티 이미지',
        description: '디자이너 없이도 상업용 수준의 이미지를 생성합니다.'
      },
      {
        icon: 'fa-film',
        iconColor: 'red',
        title: '영상 콘텐츠 제작',
        description: '텍스트만으로 홍보용 영상을 뚝딱 만들어냅니다.'
      },
      {
        icon: 'fa-magic',
        iconColor: 'orange',
        title: '창의적 연출',
        description: 'AI의 상상력을 빌려 눈길을 끄는 비주얼을 완성합니다.'
      }
    ],
    featureSection: {
      title: '홍보물 제작비 0원, <span class="text-[#4A6CF7]">AI 크리에이터</span>가<br />되어보세요.',
      description: '외주 비용 없이 우리 회사 홍보 콘텐츠를 직접, 더 멋지게 만듭니다.'
    }
  },
  "15": {
    badge: "이미지·영상 콘텐츠를 멀티플랫폼에 최적화하여 제작",
    title: "AI 기반 멀티플랫폼 브랜딩 콘텐츠 제작 및 자동화 실무 과정",
    point: "조직의 브랜드 경쟁력과 운영 효율성을 높이는 데 직접적으로 기여",
    target: "기업·기관 홍보, 마케팅, 브랜드 운영 담당자",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "550,000",
    memberPrice: "500,000",
    hours: "14시간",
    schedule: ["2025. 04. 13", "2025. 06. 08", "2025. 09. 07", "2025. 11. 12"],
    features: [
      {
        icon: 'fa-share-alt',
        iconColor: 'blue',
        title: 'OSMU 전략',
        description: '하나의 소스로 블로그, 인스타, 유튜브용 콘텐츠를 동시에 만듭니다.'
      },
      {
        icon: 'fa-cogs',
        iconColor: 'green',
        title: '제작 자동화',
        description: '반복되는 콘텐츠 생산 작업을 자동화 시스템으로 구축합니다.'
      },
      {
        icon: 'fa-globe',
        iconColor: 'purple',
        title: '채널 최적화',
        description: '각 플랫폼 알고리즘에 맞는 최적의 포맷으로 변환합니다.'
      }
    ],
    featureSection: {
      title: '콘텐츠 하나로 <span class="text-[#4A6CF7]">세상을 연결</span>하는<br />자동화 시스템을 만드세요.',
      description: '적은 노력으로 더 많은 채널에 더 자주 노출되는 비결을 공개합니다.'
    }
  },
  "16": {
    badge: "업무 흐름을 AI 에이전트로 설계·구현",
    title: "실무자가 직접 만드는 AI 업무 자동화: Google Opal 활용 과정",
    point: "업무 프로세스를 AI 에이전트로 자동화하여 업무 생산성과 정확도를 향상",
    target: "기업·기관 기획, 홍보, 운영, 행정 실무자",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "330,000",
    memberPrice: "300,000",
    hours: "7시간",
    schedule: ["2025. 04. 27", "2025. 05. 15", "2025. 06. 23", "2025. 09. 10"],
    features: [
      {
        icon: 'fa-code-branch',
        iconColor: 'orange',
        title: '노코드 자동화',
        description: '코딩 없이 클릭만으로 복잡한 업무 로직을 설계합니다.'
      },
      {
        icon: 'fa-robot',
        iconColor: 'blue',
        title: '맞춤형 에이전트',
        description: '우리 회사만의 특수한 업무를 처리하는 AI 직원을 채용합니다.'
      },
      {
        icon: 'fa-check-circle',
        iconColor: 'green',
        title: '무결점 실행',
        description: '휴먼 에러를 제거하고 24시간 정확하게 업무를 수행합니다.'
      }
    ],
    featureSection: {
      title: '반복 업무 해방, <span class="text-[#4A6CF7]">Google Opal</span>이<br />당신의 시간을 벌어줍니다.',
      description: '지루한 반복 작업은 AI에게 맡기고, 당신은 창의적인 일에 집중하세요.'
    }
  },
  "17": {
    badge: "AI를 활용해 카피·구성·이미지 가이드를 빠르게 제작",
    title: "매출 전환을 높이는 AI 상세페이지 제작 실무 과정",
    point: "매출과 직결되는 상세페이지 제작 및 개선",
    target: "기업·기관 마케팅, 온라인 사업, 홍보 담당자",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "330,000",
    memberPrice: "300,000",
    hours: "7시간",
    schedule: ["2025. 03. 26", "2025. 05. 27", "2025. 09. 02", "2025. 11. 16"],
    features: [
      {
        icon: 'fa-ad',
        iconColor: 'red',
        title: '설득의 카피라이팅',
        description: '고객의 지갑을 여는 매력적인 문구를 AI로 뽑아냅니다.'
      },
      {
        icon: 'fa-layer-group',
        iconColor: 'purple',
        title: '시선 강탈 레이아웃',
        description: '가독성과 몰입도를 높이는 상세페이지 구조를 배웁니다.'
      },
      {
        icon: 'fa-percentage',
        iconColor: 'green',
        title: '구매 전환율 UP',
        description: '방문자를 구매자로 바꾸는 결정적 요소를 최적화합니다.'
      }
    ],
    featureSection: {
      title: '팔리는 상세페이지, <span class="text-[#4A6CF7]">AI의 설득력</span>을<br />더해 완성하세요.',
      description: '디자인 감각이 없어도, 글솜씨가 없어도 매출을 부르는 페이지를 만듭니다.'
    }
  },
  "18": {
    badge: "AI를 활용한 반복 개선 및 자동화 구조를 구축",
    title: "AI 기반 매출 전환 최적화 상세페이지 설계 및 자동 개선 실무 과정",
    point: "상세페이지 전환율 개선을 통해 조직의 매출 성과 향상",
    target: "기업·기관 마케팅, 온라인 사업, 홍보 담당자 ",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "550,000",
    memberPrice: "500,000",
    hours: "14시간",
    schedule: ["2025. 04. 14", "2025. 06. 12"],
    features: [
      {
        icon: 'fa-flask',
        iconColor: 'blue',
        title: 'A/B 테스트 설계',
        description: '데이터를 기반으로 더 나은 상세페이지를 찾아냅니다.'
      },
      {
        icon: 'fa-chart-bar',
        iconColor: 'orange',
        title: '고객 행동 분석',
        description: '어디서 이탈하는지 파악하고 즉각 개선합니다.'
      },
      {
        icon: 'fa-sync-alt',
        iconColor: 'green',
        title: '자동 개선 사이클',
        description: '지속적으로 성과가 오르는 선순환 구조를 만듭니다.'
      }
    ],
    featureSection: {
      title: '멈춰있는 페이지는 그만, <span class="text-[#4A6CF7]">스스로 성장하는</span><br />상세페이지를 설계하세요.',
      description: '데이터 1등 공신 AI를 활용해 매출 그래프를 우상향으로 그립니다.'
    }
  },
  "19": {
    badge: "글쓰기 업무를 구조적으로 설계하고,명확하고 설득력 있는 실무 글을 빠르게 작성",
    title: "업무에 바로 쓰는 AI 활용 실무 글쓰기 과정",
    point: "AI를 활용한 글쓰기 역량을 통해 업무 효율성 및 문서 완성도를 향상",
    target: "기업·기관 기획, 행정, 홍보, 운영 실무자",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "330,000",
    memberPrice: "300,000",
    hours: "7시간",
    schedule: ["2025. 04. 02", "2025. 06. 26", "2025. 09. 21", "2025. 10. 22"],
    features: [
      {
        icon: 'fa-pen-nib',
        iconColor: 'blue',
        title: '비즈니스 글쓰기',
        description: '보고서, 이메일, 제안서 등 상황에 맞는 격식 있는 글을 씁니다.'
      },
      {
        icon: 'fa-tachometer-alt',
        iconColor: 'green',
        title: '작성 속도 5배',
        description: '고민하는 시간을 없애고 순식간에 문서를 완성합니다.'
      },
      {
        icon: 'fa-check-double',
        iconColor: 'purple',
        title: '논리적 구성',
        description: 'AI의 도움을 받아 빈틈없는 논리 구조를 갖춥니다.'
      }
    ],
    featureSection: {
      title: '글쓰기가 두렵나요? <span class="text-[#4A6CF7]">AI 에디터</span>가<br />당신의 문장을 다듬어줍니다.',
      description: '더 이상 빈 화면을 보며 고민하지 마세요. 핵심만 입력하면 완성됩니다.'
    }
  },
  "20": {
    badge: "플랫폼 특성에 맞는 글을 설계·확장하는 실무 글쓰기 및 콘텐츠 활용",
    title: "AI 기반 멀티플랫폼 실무 글쓰기 및 콘텐츠 확장 과정",
    point: "직무에서 요구되는 콘텐츠 생산 및 커뮤니케이션 역량을 AI를 활용해 고도화",
    target: "기업·기관 기획, 홍보, 마케팅, 콘텐츠 담당 실무자",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "550,000",
    memberPrice: "500,000",
    hours: "14시간",
    schedule: ["2025. 03. 11", "2025. 05. 13", "2025. 09. 16", "2025. 11. 11"],
    features: [
      {
        icon: 'fa-expand-arrows-alt',
        iconColor: 'orange',
        title: '콘텐츠 확장',
        description: '하나의 글감을 다양한 플랫폼용 글로 변형합니다.'
      },
      {
        icon: 'fa-thumbs-up',
        iconColor: 'blue',
        title: '공감 유발',
        description: '독자의 마음을 움직이는 감성적인 글쓰기를 배웁니다.'
      },
      {
        icon: 'fa-bullseye',
        iconColor: 'red',
        title: '타겟 맞춤',
        description: '읽는 사람에 딱 맞춰 톤앤매너를 자유자재로 조절합니다.'
      }
    ],
    featureSection: {
      title: '플랫폼을 넘나드는 <span class="text-[#4A6CF7]">글쓰기 마스터</span>,<br />AI와 함께라면 가능합니다.',
      description: '블로그부터 보도자료까지, 어떤 형식이든 프로처럼 작성하세요.'
    }
  },
  "21": {
    badge: "AI를 활용해 엑셀 문서 작성, 함수·수식 생성, 데이터 정리 업무를 빠르고 정확하게 수행",
    title: "엑셀을 몰라도 되는 AI 활용 엑셀 업무 자동화 실무 과정",
    point: " 엑셀 문서 작성 및 계산 업무를 AI를 통해 자동화함으로써 업무 시간 단축과 오류 감소",
    target: "기업·기관 행정, 기획, 운영, 회계 보조, 일반 사무 실무자회계 보조, 일반 사무 실무자",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    originalPrice: "250,000",
    memberPrice: "200,000",
    hours: "4시간",
    schedule: ["2025. 04. 29", "2025. 05. 07", "2025. 09. 15", "2025. 10. 12"],
    features: [
      {
        icon: 'fa-table',
        iconColor: 'green',
        title: '수식 자동 생성',
        description: '복잡한 함수를 외울 필요 없이, 말로 설명하면 AI가 짜줍니다.'
      },
      {
        icon: 'fa-broom',
        iconColor: 'blue',
        title: '데이터 정리',
        description: '지저분한 데이터를 AI가 순식간에 깔끔하게 정리해줍니다.'
      },
      {
        icon: 'fa-chart-pie',
        iconColor: 'purple',
        title: '시각화 자동화',
        description: '숫자만 넣으면 보기 좋은 차트와 그래프가 완성됩니다.'
      }
    ],
    featureSection: {
      title: '엑셀 스트레스 안녕, <span class="text-[#4A6CF7]">AI 엑셀 비서</span>가<br />퇴근을 앞당겨드립니다.',
      description: '컴활 자격증 없어도 괜찮습니다. AI가 최고의 엑셀 전문가니까요.'
    }
  }
};