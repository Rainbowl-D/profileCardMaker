// 1. 유틸리티 함수 (ID 기반 선택으로 통일)
const $ = id => document.getElementById(id);

let state = {
  titles: {
    main: 'Profile Card',
    progress: 'PROGRESS',
    mood: 'ETC',
    stats: 'STATS',
    goodBad: '오너 성향',
    etc: '오너란',
    fileName:'프로필 카드'
  },
  infoRows: [
    { id: genId(), label: '이름', value: '', isTag: false },
    { id: genId(), label: '성별', value: '', isTag: false },
    { id: genId(), label: '나이', value: '', isTag: false },
    { id: genId(), label: '신장', value: '', isTag: false },
    { id: genId(), label: '종족', value: '', isTag: false }
  ],
  radar: {
    enabled: true,
    labels: ['근력','지혜','민첩','체력','행운'],
    values: [1,2,3,4,5]
  },
  progress: {
    enabled: true,
    rows: [
      { id: genId(), label: '재력', value: 50 },
      { id: genId(), label: '친화력', value: 50 },
      { id: genId(), label: '매력', value: 50 },
      { id: genId(), label: '인내심', value: 50 },
      { id: genId(), label: '활동성', value: 50 }
    ]
  },
  infoRows02: [
    { id: genId(), label: '성격', value: '온화함, 용감함', isTag: true }, // 태그형 예시
    { id: genId(), label: '특징', value: '', isTag: true }
  ],
  checkList: [
    { id: genId(), label: '연성', checked: true },
    { id: genId(), label: '합의자관', checked: false },
    { id: genId(), label: '커미션', checked: false },
    { id: genId(), label: '역극', checked: false },
    { id: genId(), label: 'TRPG', checked: false },
    { id: genId(), label: '뇨단타', checked: false },
    { id: genId(), label: 'AU', checked: false },
    { id: genId(), label: '2인커뮤', checked: false },
    { id: genId(), label: '밴드', checked: false },
    { id: genId(), label: '오픈카톡', checked: false }
  ],
  etc: ''
};

const DEFAULT_PRESETS = {
  character: {
    state: {
      titles: {
        main: 'Profile Card',
        progress: 'PROGRESS',
        mood: 'ETC',
        stats: 'STATS',
        goodBad: '오너 성향',
        etc: '오너란',
        fileName:'캐릭터 프로필카드'
      },
      infoRows: [
        { id: genId(), label: '이름', value: '', isTag: false },
        { id: genId(), label: '성별', value: '', isTag: false },
        { id: genId(), label: '나이', value: '', isTag: false },
        { id: genId(), label: '신장', value: '', isTag: false },
        { id: genId(), label: '종족', value: '', isTag: false }
      ],
      radar: {
        enabled: true,
        labels: ['근력','지혜','민첩','체력','행운'],
        values: [1,2,3,4,5]
      },
      progress: {
        enabled: true,
        rows: [
          { id: genId(), label: '재력', value: 50 },
          { id: genId(), label: '친화력', value: 50 },
          { id: genId(), label: '매력', value: 50 },
          { id: genId(), label: '인내심', value: 50 },
          { id: genId(), label: '활동성', value: 50 }
        ]
      },
      infoRows02: [
        { id: genId(), label: '성격', value: '온화함, 용감함', isTag: true }, // 태그형 예시
        { id: genId(), label: '특징', value: '', isTag: true }
      ],
      checkList: [
        { id: genId(), label: '연성', checked: true },
        { id: genId(), label: '합의자관', checked: false },
        { id: genId(), label: '커미션', checked: false },
        { id: genId(), label: '역극', checked: false },
        { id: genId(), label: 'TRPG', checked: false },
        { id: genId(), label: '뇨단타', checked: false },
        { id: genId(), label: 'AU', checked: false },
        { id: genId(), label: '2인커뮤', checked: false },
        { id: genId(), label: '밴드', checked: false },
        { id: genId(), label: '오픈카톡', checked: false }
      ],
      etc: ''
    }
  },
  trpg: {
    state: {
      titles: { main: '닉네임', progress: '숙련도', mood: '간판PC', stats: 'Play Style', goodBad: '사용 툴', etc: '기타',fileName:'TRPG 프로필카드' },
      infoRows: [
        { id: genId(), label: '닉네임', value: '', isTag: false },
        { id: genId(), label: '포지션', value: 'GM = PL', isTag: false },
        { id: genId(), label: '플레이 타입', value: '온라인,오프라인,보이스세션,텍스트세션', isTag: true },
        { id: genId(), label: '선호 시간대', value: '오후7시,오후8시,오후9시,오후12시 ~ 심야', isTag: true }
      ],
      radar: { enabled: true, labels: ['장문 타이핑','관전','중간밥탐','사담분리','롤꾸'], values: [3, 4, 2, 5, 1] },
      progress: { enabled: true, rows: [
                                        { id: genId(), label: 'CoC 7th', value: 80 },
                                        { id: genId(), label: '인세인', value: 50 },
                                        { id: genId(), label: '마기카로기아', value: 50 },
                                        { id: genId(), label: '더블크로스', value: 50 },
                                        { id: genId(), label: '언성듀엣', value: 50 }
                                      ] },
      infoRows02: [{ id: genId(), label: '보유룰', value: 'CoC 7th,인세인,마기카로기아,더블크로스,언성듀엣', isTag: true }],
      checkList: [
                  { id: genId(), label: 'Roll20', checked: true }, 
                  { id: genId(), label: '도톤도후', checked: false },
                  { id: genId(), label: '디스코드', checked: false },
                  { id: genId(), label: '오프탁', checked: false },
                  { id: genId(), label: '코코포리아', checked: false },
                  { id: genId(), label: '그 외', checked: false }
                ],
      etc: '기타 주의사항'
    }
  },
  twitte: {
    state: {
      titles: { main: '닉네임', progress: '주력 장르', mood: '마이 붐', stats: '활동 형태', goodBad: '주 서식 분야', etc: '기타',fileName:'범용 트친소카드' },
      infoRows: [
        { id: genId(), label: '닉네임', value: '', isTag: false },
        { id: genId(), label: '연령대', value: '성인 / 미성년자', isTag: false },
        { id: genId(), label: '계정 성격', value: '연성,썰,소비,일상트,주접트', isTag: true },
        { id: genId(), label: 'FUB FREE', value: 'O / X', isTag: false }
      ],
      radar: { enabled: true, labels: ['연성','썰','소비','일상트','주접트'], values: [3, 4, 2, 5, 1] },
      progress: { enabled: true, rows: [
                                        { id: genId(), label: '장르명', value: 80 },
                                        { id: genId(), label: '장르명', value: 50 },
                                        { id: genId(), label: '장르명', value: 50 },
                                        { id: genId(), label: '장르명', value: 50 },
                                        { id: genId(), label: '장르명', value: 50 }
                                      ] },
      infoRows02: [
                    { id: genId(), label: '트윗 성격', value: 'RT,마음,구독,일상,욕설,우울,수위', isTag: true },
                    { id: genId(), label: '이별시', value: '블락,블언블,언팔', isTag: true },
                    { id: genId(), label: '지뢰', value: '', isTag: false }
                  ],
      checkList: [
                  { id: genId(), label: '1차', checked: true }, 
                  { id: genId(), label: '2차', checked: false },
                  { id: genId(), label: '만화', checked: false },
                  { id: genId(), label: '애니', checked: false },
                  { id: genId(), label: '웹소설', checked: false },
                  { id: genId(), label: '게임', checked: false },
                  { id: genId(), label: '영화', checked: false },
                  { id: genId(), label: '뮤지컬', checked: false },
                  { id: genId(), label: '아이돌', checked: false },
                  { id: genId(), label: '기타', checked: false }
                ],
      etc: '기타'
    }
  }
};

function genId() { return Math.random().toString(36).substr(2, 9); }

// 2. 배경 설정 함수 (SVG 패턴 생성)
function setBackground() {
  const bgColor = $('cardBgColor').value;
  const accentColor = $('cardAccentColor').value;
  const card = $('card');

  // 1. CSS 변수에 넣을 그라디언트 문자열 생성
  // 첫 번째: 점 패턴 (radial-gradient)
  // 두 번째: 바탕 배경 (linear-gradient)
  const gradientValue = `
    radial-gradient(${accentColor}33 2px, transparent 0), 
    linear-gradient(to bottom, ${bgColor} 65%, ${accentColor})
  `;

  // 2. CSS 변수(--card-back) 업데이트
  document.documentElement.style.setProperty('--card-back', gradientValue);
}

// 3. 렌더링 엔진
function renderAll() {
  renderTitles();
  renderInfoForm();
  renderInfoCard();
  renderInfoForm02();
  renderInfoCard02();
  renderChkForm();
  renderChkCard();
  renderRadarForm();
  renderRadarCard();
  renderProgressForm();
  renderProgressCard();
  renderEtc();
}

// 버튼 이벤트 바인딩
$('addInfoRow').onclick = () => { 
  state.infoRows.push({ id: genId(), label: '항목', value: '', isTag: false }); 
  renderAll(); 
};
$('addInfoRow02').onclick = () => {
  state.infoRows02.push({ id: genId(), label: '항목', value: '' });
  renderAll();
};

// 태그형 항목 추가 버튼
const addTagBtn = $('addTagInfoRow');
if(addTagBtn) {
  addTagBtn.onclick = () => {
    state.infoRows.push({ id: genId(), label: '태그', value: '', isTag: true });
    renderAll();
  };
}
// 태그형 항목 추가 버튼
const addTagBtn02 = $('addTagInfoRow02');
if(addTagBtn02) {
  addTagBtn02.onclick = () => {
    state.infoRows02.push({ id: genId(), label: '태그', value: '', isTag: true });
    renderAll();
  };
}

function renderInfoForm() {
  const wrap = $('infoFormList');
  wrap.innerHTML = '';
  state.infoRows.forEach(row => {
    const div = document.createElement('div');
    div.className = `info-form-row ${row.isTag ? 'tag-type' : ''}`; // 태그형이면 클래스 추가
    div.innerHTML = `
      <small style="display:block;">${row.isTag ? '[태그형]' : '[일반]'}</small>
      <input type="text" value="${row.label}" placeholder="라벨">
      <input type="text" value="${row.value}" placeholder="${row.isTag ? '쉼표로 구분' : '내용'}">
      <button>✕</button>
    `;
    const [_, labelInput, valueInput, delBtn] = div.children;

    labelInput.oninput = e => { row.label = e.target.value; renderInfoCard(); };
    valueInput.oninput = e => { row.value = e.target.value; renderInfoCard(); };
    delBtn.onclick = () => { 
      state.infoRows = state.infoRows.filter(r => r.id !== row.id); 
      renderAll(); 
    };
    wrap.appendChild(div);
  });
}

function renderInfoCard() {
  const wrap = $('infoContainer');
  wrap.innerHTML = '';
  
  state.infoRows.forEach(r => {
    const div = document.createElement('div');
    div.className = 'info-row';
    
    let valueHTML = '';
    if (r.isTag) {
      // 콤마로 구분하여 태그 생성
      const tags = r.value.split(',').map(s => s.trim()).filter(Boolean);
      valueHTML = `<div class="tags-wrapper">` + 
                  tags.map(t => `<span class="tag">${t}</span>`).join('') + 
                  `</div>`;
    } else {
      valueHTML = `<span>${r.value}</span>`;
    }

    div.innerHTML = `<strong>${r.label}</strong>${valueHTML}`;
    wrap.appendChild(div);
  });
}

function renderInfoForm02() {
  const wrap = $('infoFormList02');
  wrap.innerHTML = '';
  state.infoRows02.forEach(row => {
    const div = document.createElement('div');
    div.className = `info-form-row ${row.isTag ? 'tag-type' : ''}`; // 태그형이면 클래스 추가
    div.innerHTML = `
      <small style="display:block;">${row.isTag ? '[태그형]' : '[일반]'}</small>
      <input type="text" value="${row.label}" placeholder="라벨">
      <input type="text" value="${row.value}" placeholder="${row.isTag ? '쉼표로 구분' : '내용'}">
      <button>✕</button>
    `;
    const [_, labelInput, valueInput, delBtn] = div.children;

    labelInput.oninput = e => { row.label = e.target.value; renderInfoCard02(); };
    valueInput.oninput = e => { row.value = e.target.value; renderInfoCard02(); };
    delBtn.onclick = () => { 
      state.infoRows02 = state.infoRows02.filter(r => r.id !== row.id); 
      renderAll(); 
    };
    wrap.appendChild(div);
  });
}

function renderInfoCard02() {
  const wrap = $('infoContainer02');
  wrap.innerHTML = '';
  
  state.infoRows02.forEach(r => {
    const div = document.createElement('div');
    div.className = 'info-row';
    
    let valueHTML = '';
    if (r.isTag) {
      // 콤마로 구분하여 태그 생성
      const tags = r.value.split(',').map(s => s.trim()).filter(Boolean);
      valueHTML = `<div class="tags-wrapper">` + 
                  tags.map(t => `<span class="tag">${t}</span>`).join('') + 
                  `</div>`;
    } else {
      valueHTML = `<span>${r.value}</span>`;
    }

    div.innerHTML = `<strong>${r.label}</strong>${valueHTML}`;
    wrap.appendChild(div);
  });
}

/* MOOD 이미지 업로드 */
[1, 2].forEach(num => {
  const inputEl = $(`moodInput${num}`);
  if (inputEl) {
    inputEl.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = () => {
        // state에 저장하지 않고 DOM에 직접 적용
        const lis = document.querySelectorAll('.mood-wrapper .img-list li');
        const targetLi = lis[num - 1];
        
        if (targetLi) {
          targetLi.style.backgroundImage = `url(${reader.result})`;
          targetLi.textContent = ''; // 내부 텍스트 비우기
        }
      };
      reader.readAsDataURL(file);
    };
  }
});

/* 오각형 그래프 로직 */
function renderRadarForm(){
  const wrap = $('radarForm');
  wrap.innerHTML = '';
  state.radar.labels.forEach((label,i)=>{
    const row = document.createElement('div');
    row.innerHTML = `
        <input type="text" value="${label}">
        <input type="number" min="0" max="5" step="0.1" value="${state.radar.values[i]}">
      `;
    const [labelInput,valInput] = row.children;
    labelInput.oninput = e=>{ state.radar.labels[i]=e.target.value; renderRadarCard(); };
    valInput.oninput = e=>{ state.radar.values[i]=+e.target.value; renderRadarCard(); };
    wrap.appendChild(row);
  });
}

$('radarToggle').oninput = e=>{
  state.radar.enabled = e.target.checked;
  $('radarWrapper').classList.toggle('hidden', !state.radar.enabled);
};

function renderRadarCard() {
  if (!state.radar.enabled) return;

  const cx = 50, cy = 50, r = 40;
  const gridGroup = $('statGrid');
  if (!gridGroup) return; 
  
  gridGroup.innerHTML = '';

  const labels = state.radar.labels;
  const values = state.radar.values.map(v => Math.min(Math.max(v || 0, 0), 5));
  const valuePoints = [];

  // 각도 계산을 위한 인덱스 맵 (반시계 방향 매칭)
  // i=0(12시): Label1
  // i=1(10시): Label5
  // i=2(7시) : Label4
  // i=3(5시) : Label3
  // i=4(2시) : Label2
  const labelMap = [1, 5, 4, 3, 2]; 

  for (let i = 0; i < 5; i++) {
    // 반시계 방향 각도 계산 (+ i)
    const angle = Math.PI / 2 + i * (2 * Math.PI / 5); 
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    // 1. 방사선 가이드라인
    const l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute('x1', cx); l.setAttribute('y1', cy);
    l.setAttribute('x2', cx + cos * r);
    l.setAttribute('y2', cy - sin * r);
    l.style.stroke = 'var(--card-accent)';
    l.style.strokeWidth = '0.5px';
    l.style.opacity = '0.5';
    gridGroup.appendChild(l);

    // 2. 실제 스탯 좌표 (반시계 방향 순서대로 저장)
    const vr = r * (values[i] / 5);
    valuePoints.push(`${cx + cos * vr},${cy - sin * vr}`);

    // 3. 라벨 텍스트 업데이트 (좌표는 건드리지 않고 텍스트만 교체)
    const targetLabelId = `statLabel${labelMap[i]}`;
    const labelEl = $(targetLabelId);
    if (labelEl) {
      labelEl.textContent = labels[i];
    }
  }

  // 4. 배경 오각형 격자 (반시계 방향)
  for (let level = 1; level <= 5; level++) {
    const gr = r * (level / 5), pts = [];
    for (let i = 0; i < 5; i++) {
      const a = Math.PI / 2 + i * (2 * Math.PI / 5);
      pts.push(`${cx + Math.cos(a) * gr},${cy - Math.sin(a) * gr}`);
    }
    const p = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    p.setAttribute('points', pts.join(' '));
    p.style.fill = 'none';
    p.style.stroke = 'var(--card-accent)';
    p.style.strokeWidth = '0.5px';
    p.style.opacity = '1';
    gridGroup.appendChild(p);
  }

  // 5. 스탯 폴리라인 그리기
  if(valuePoints.length > 0) valuePoints.push(valuePoints[0]);

  const svg = $('statSVG');
  const polyline = svg.querySelector('polyline');
  if(polyline) {
    polyline.setAttribute('points', valuePoints.join(' '));
  }
}

function renderProgressForm(){
  const wrap = $('progressFormList');
  wrap.innerHTML = '';
  state.progress.rows.forEach(row=>{
    const div = document.createElement('div');
    div.innerHTML = `<input type="text" value="${row.label}"><input type="number" min="0" max="100" value="${row.value}"><button>✕</button>`;
    const [labelInput,valInput,delBtn] = div.children;
    labelInput.oninput = e=>{ row.label=e.target.value; renderProgressCard(); };
    valInput.oninput = e=>{ row.value=+e.target.value; renderProgressCard(); };
    delBtn.onclick = ()=>{ state.progress.rows = state.progress.rows.filter(r=>r.id!==row.id); renderAll(); };
    wrap.appendChild(div);
  });
}

$('addProgressRow').onclick = ()=>{ state.progress.rows.push({ id:genId(), label:'STAT', value:50 }); renderAll(); };

$('progressToggle').oninput = e=>{
  state.progress.enabled = e.target.checked;
  $('progressWrapper').classList.toggle('hidden', !state.progress.enabled);
};

function renderProgressCard(){
  if(!state.progress.enabled) return;
  const dl = $('progressList');
  dl.innerHTML = '';
  state.progress.rows.forEach(r=>{
    const dt = document.createElement('dt');
    dt.textContent = r.label;
    const dd = document.createElement('dd');
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.width = r.value + '%';
    dd.appendChild(bar);
    dl.appendChild(dt);
    dl.appendChild(dd);
  });
}

/* Good/Bad 체크리스트 로직 */
$('addChkRow').onclick = () => {
  state.checkList.push({ id: genId(), label: '새 항목', checked: false });
  renderAll();
};

function renderChkForm() {
  const wrap = $('chkFormList');
  wrap.innerHTML = '';
  state.checkList.forEach(row => {
    const div = document.createElement('div');
    div.innerHTML = `
      <input type="checkbox" ${row.checked ? 'checked' : ''}>
      <input type="text" value="${row.label}">
      <button>✕</button>
    `;
    
    // index에 맞춰 정확히 요소를 참조 (0: 체크박스, 1: 텍스트입력, 2: 삭제버튼)
    const chkInput = div.children[0];
    const labelInput = div.children[1];
    const delBtn = div.children[2];

    // 텍스트 변경 시 state 업데이트 및 카드 갱신
    labelInput.oninput = e => { 
      row.label = e.target.value; 
      renderChkCard(); 
    };

    // 체크 상태 변경 시 state 업데이트 및 카드 갱신
    chkInput.onchange = e => { 
      row.checked = e.target.checked; 
      renderChkCard(); 
    };

    delBtn.onclick = () => {
      state.checkList = state.checkList.filter(r => r.id !== row.id);
      renderAll();
    };
    wrap.appendChild(div);
  });
}

function renderChkCard() {
  const wrap = document.querySelector('.chk-wrapper');
  if (!wrap) return;
  // 1. 기존 리스트들만 제거 (타이틀 'info-tit'는 유지)
  const existingLists = wrap.querySelectorAll('.chk-list');
  existingLists.forEach(el => el.remove());

  // 2. 현재 state 기반으로 리스트 생성
  state.checkList.forEach(r => {
    const dl = document.createElement('dl');
    dl.className = 'chk-list';
    dl.innerHTML = `
      <dt>${r.label}</dt>
      <dd><input type="checkbox" ${r.checked ? 'checked' : ''} onclick="return false;"></dd>
    `;
    wrap.appendChild(dl);
  });
}

$('etcInput').oninput = e=>{ state.etc = e.target.value; $('etcValue').textContent = state.etc; };

// 4. 색상 추출 및 적용 로직
function rgbToHsl(r, g, b){
  r/=255; g/=255; b/=255;
  const max = Math.max(r,g,b), min = Math.min(r,g,b);
  let h,s,l = (max+min)/2;
  if(max===min){ h=s=0; }else{
    const d = max-min;
    s = l>0.5 ? d/(2-max-min) : d/(max+min);
    switch(max){
      case r: h=(g-b)/d+(g<b?6:0); break;
      case g: h=(b-r)/d+2; break;
      case b: h=(r-g)/d+4; break;
    }
    h*=60;
  }
  return {h,s,l};
}

function rgbToHex(r,g,b){
  return '#' + [r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('');
}

function setCSSColor(varName, c){
  document.documentElement.style.setProperty(varName, `rgb(${Math.round(c.r)},${Math.round(c.g)},${Math.round(c.b)})`);
}

function extractPaletteAndApply(src){
  const img = new Image();
  img.onload = ()=>{
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    c.width = img.width;
    c.height = img.height;
    ctx.drawImage(img,0,0);

    const data = ctx.getImageData(0,0,c.width,c.height).data;

    const samples = [];
    for(let i=0;i<data.length;i+=20){
      const r = data[i];
      const g = data[i+1];
      const b = data[i+2];
      const a = data[i+3];

      // 투명한 픽셀 무시
      if(a < 50) continue;

      const hsl = rgbToHsl(r,g,b);
      samples.push({r,g,b,h:hsl.h,l:hsl.l,s:hsl.s});
    }

    // 밝고 어두운 기준색
    const lightest = samples.reduce((a,b)=> a.l > b.l ? a : b);
    const darkest  = samples.reduce((a,b)=> a.l < b.l ? a : b);

    // Hue 히스토그램 (10도 단위 버킷)
    const buckets = {};
    samples.forEach(c=>{
      const key = Math.round(c.h / 10) * 10;
      buckets[key] = buckets[key] || [];
      buckets[key].push(c);
    });

    // 가장 많이 나온 Hue 버킷
    const dominantBucket = Object.values(buckets)
      .sort((a,b)=> b.length - a.length)[0];

    // 그 버킷의 평균색 = 배경색
    const baseColor = dominantBucket.reduce((acc,c)=>{
      acc.r += c.r; acc.g += c.g; acc.b += c.b; acc.l += c.l; acc.h += c.h;
      return acc;
    },{r:0,g:0,b:0,l:0,h:0});

    baseColor.r = Math.round(baseColor.r / dominantBucket.length);
    baseColor.g = Math.round(baseColor.g / dominantBucket.length);
    baseColor.b = Math.round(baseColor.b / dominantBucket.length);
    baseColor.l /= dominantBucket.length;
    baseColor.h /= dominantBucket.length;

    // 배경 명도 기준 텍스트 색
    const textColor = baseColor.l > 0.5 ? darkest : lightest;

    /* === accent / stat 색 === */
    // 평균 hue (또는 지배 hue)
    const avgHue = samples.reduce((s,c)=>s+c.h,0)/samples.length;
    
    // hue 차이 * 채도 점수
    const ranked = samples
      .filter(c => c.s > 0.3) // 채도가 너무 낮은 회색조 제외
      .map(c => {
        // 1. 배경(Base)과의 명도 차이 (0 ~ 1)
        const diffFromBase = Math.abs(c.l - baseColor.l);
        
        // 2. 텍스트(Text)와의 명도 차이 (0 ~ 1)
        const diffFromText = Math.abs(c.l - textColor.l);
        
        // 3. [대비 균형 점수] 
        // 양쪽 모두와 명도 차이가 크게 날수록(중간 지점일수록) 높은 점수 부여
        // Math.min을 사용하면 어느 한쪽이라도 겹치는 색은 점수가 급락합니다.
        const contrastScore = Math.min(diffFromBase, diffFromText);

        // 4. 색상 선명도 가중치
        const hueDiff = Math.abs(c.h - baseColor.h) / 180;

        // 5. 최종 점수 산정
        // 채도 * 배경과의 색상차 * 대비 점수(제곱을 하여 중간 지점 가중치 강화)
        const vividScore = c.s * hueDiff * Math.pow(contrastScore, 2);
        
        return { ...c, score: vividScore };
      })
      .sort((a, b) => b.score - a.score);

    const accent = ranked[0];

    // statColor는 accent와 색상(Hue)이 겹치지 않는 선명한 색 선택
    const statCandidates = ranked.filter(c => 
      Math.abs(c.h - accent.h) > 25 // 강조색과 최소 25도 이상 차이나는 색
    );
    const statAccent = statCandidates.length ? statCandidates[0] : (ranked[1] || accent);
    
    setCSSColor('--card-bg', baseColor);
    setCSSColor('--card-text', textColor);
    setCSSColor('--card-accent', accent);
    setCSSColor('--stat-color', statAccent);
    
    $('cardBgColor').value = rgbToHex(baseColor.r, baseColor.g, baseColor.b);
    $('cardTextColor').value = rgbToHex(textColor.r, textColor.g, textColor.b);
    $('cardAccentColor').value = rgbToHex(accent.r, accent.g, accent.b);
    $('statColor').value = rgbToHex(statAccent.r, statAccent.g, statAccent.b);
    setBackground();
  };
  img.src = src;
}

// 5. 이벤트 바인딩
$('imgInput').onchange = e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    $('charWrapper').style.backgroundImage = `url(${reader.result})`;
    extractPaletteAndApply(reader.result);
  };
  reader.readAsDataURL(file);
};

$('cardBgColor').oninput = e => { document.documentElement.style.setProperty('--card-bg',e.target.value); setBackground(); };
$('cardTextColor').oninput=e=>document.documentElement.style.setProperty('--card-text',e.target.value);
$('cardAccentColor').oninput=e=> { document.documentElement.style.setProperty('--card-accent',e.target.value); setBackground(); };
$('statColor').oninput=e=>document.documentElement.style.setProperty('--stat-color',e.target.value);

$('toggleEditor').onclick = ()=>{ 
  $('editorPanel').classList.toggle('folded'); 
  $('cardArea').classList.toggle('folded');
};

// etc 데이터를 렌더링하는 함수 추가
function renderEtc() {
  const etcInput = $('etcInput');
  const etcValue = $('etcValue');

  // value를 가져와서 form 영역에 넣음
  etcInput.value = state.etc || '';
  
  if (etcInput && etcValue) {
    // value를 가져와서 텍스트 영역에 넣음
    etcValue.textContent = state.etc || '';
    
    etcInput.oninput = (e) => {
      state.etc = e.target.value;
      etcValue.textContent = state.etc; // textContent는 줄바꿈 문자를 포함합니다.
    };
  }
}

//제목 변경
const titleInputs = {
  main: 'titMain',
  progress: 'titProgress',
  mood: 'titMood',
  stats: 'titStats',
  goodBad: 'titGoodBad',
  etc: 'titetc',
  fileName: 'titPreset'
};

Object.entries(titleInputs).forEach(([key, id]) => {
  $(id).oninput = (e) => {
    state.titles[key] = e.target.value;
    renderTitles();
  };
});

function renderTitles() {
  // 메인 타이틀
  const mainTit = document.querySelector('.card-tit');
  if (mainTit) mainTit.innerText = state.titles.main;

  // 각 섹션 타이틀
  const progressTit = document.querySelector('.progress-wrapper .info-tit');
  if (progressTit) progressTit.innerText = state.titles.progress;

  const moodTit = document.querySelector('.mood-wrapper .info-tit');
  if (moodTit) moodTit.innerText = state.titles.mood;

  const statsTit = document.querySelector('.stat-wrapper .info-tit');
  if (statsTit) statsTit.innerText = state.titles.stats;

  const chkTit = document.querySelector('.chk-wrapper .info-tit');
  if (chkTit) chkTit.innerText = state.titles.goodBad;

  const etcTit = document.querySelector('.etc-section .info-tit');
  if (etcTit) etcTit.innerText = state.titles.etc;
}


// saveImage 함수 (dom-to-image 버전)
$('saveImage').onclick = () => {
  const cardArea = $('cardArea');
  const card = $('card');


  // 1. 현재 에디터가 펼쳐져 있는지 확인 (folded 클래스가 없는 상태)
  const isOpened = !cardArea.classList.contains('folded');
  // 2. 캡처를 위해 에디터를 강제로 접음 (scale 1.0 상태로 만들기)
  if (isOpened) {
    card.style.transition = 'none';
    cardArea.classList.add('folded');
  }
  
  // 폰트나 이미지가 로드될 시간을 위해 약간의 지연을 주거나 
  // 바로 실행해도 dom-to-image는 내부적으로 처리를 시도합니다.
  domtoimage.toPng(card, {
    quality: 1.0,
    bgcolor: 'transparent',
    // dom-to-image는 가끔 폰트 로딩 문제로 첫 캡쳐가 깨질 수 있으므로 
    // 스타일을 강제로 넣어주는 필터나 옵션을 쓰기도 합니다.
  })
  .then((dataUrl) => {
    const link = document.createElement('a');
    link.download = `${state.titles.fileName}_${state.titles.main}.png`;
    link.href = dataUrl;
    link.click();
  })
  .catch((error) => {
    console.error('이미지 저장 중 오류 발생:', error);
    alert('이미지 생성에 실패했습니다. 콘솔을 확인해주세요.');
  })
  .finally(() => {
    // 4. 저장 프로세스가 끝나면 원래 상태로 복구
    if (cardArea.classList.contains('folded')) {
      card.style.transition = 'transform ease 0.5s';
      cardArea.classList.remove('folded');
    }
  });
};

// 초기화 호출
renderAll();

// --- 프리셋 저장 (JSON -> TXT 다운로드) ---
$('savePreset').onclick = () => {
  // 현재의 모든 상태값과 색상값을 하나의 객체로 묶음
  const presetData = {
    state: state, // 인포, 레이더, 프로그레스 등 모든 텍스트 데이터
    colors: {
      bg: $('cardBgColor').value,
      text: $('cardTextColor').value,
      accent: $('cardAccentColor').value,
      stat: $('statColor').value
    }
  };

  // 문자열로 변환 (들여쓰기 포함)
  const dataStr = JSON.stringify(presetData, null, 2);
  const blob = new Blob([dataStr], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `${state.titles.fileName}_무부프카프리셋.txt`; // 파일명 설정
  link.click();

  URL.revokeObjectURL(url);
};

// --- 프리셋 불러오기 (TXT 읽기 -> 상태 복구) ---
$('loadPreset').onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const imported = JSON.parse(event.target.result);

      // 1. 내부 데이터(state) 교체
      state = imported.state;

      // 2. 색상 복구 및 CSS 변수 반영
      const c = imported.colors;
      if (c) {
        document.documentElement.style.setProperty('--card-bg', c.bg);
        document.documentElement.style.setProperty('--card-text', c.text);
        document.documentElement.style.setProperty('--card-accent', c.accent);
        document.documentElement.style.setProperty('--stat-color', c.stat);

        $('cardBgColor').value = c.bg;
        $('cardTextColor').value = c.text;
        $('cardAccentColor').value = c.accent;
        $('statColor').value = c.stat;
      }

      // 3. UI 전체 갱신
      setBackground(); // 배경 그라디언트 재생성
      renderAll();    // 폼 및 카드 렌더링 호출
      
      alert('프리셋이 적용되었습니다!');
    } catch (err) {
      alert('유효한 프리셋 파일이 아닙니다.');
      console.error(err);
    }
  };
  reader.readAsText(file);
};

// 세팅된 프리셋을 적용하는 함수
function applyBuiltInPreset(presetKey) {
  const data = DEFAULT_PRESETS[presetKey];
  if (!data) return;

  if (!confirm(`해당 프리셋을 적용하시겠습니까? 현재 작성 중인 내용은 사라집니다.`)) return;

  // 상태 깊은 복사 (참조 연결 끊기)
  state = JSON.parse(JSON.stringify(data.state));

  // 색상 복구 및 CSS 변수 반영
  const c = data.colors;
  if (c) {
    document.documentElement.style.setProperty('--card-bg', c.bg);
    document.documentElement.style.setProperty('--card-text', c.text);
    document.documentElement.style.setProperty('--card-accent', c.accent);
    document.documentElement.style.setProperty('--stat-color', c.stat);

    $('cardBgColor').value = c.bg;
    $('cardTextColor').value = c.text;
    $('cardAccentColor').value = c.accent;
    $('statColor').value = c.stat;
  }

  // 제목 세팅
  if (state.titles) {
    $('titMain').value = state.titles.main || '';
    $('titProgress').value = state.titles.progress || '';
    $('titMood').value = state.titles.mood || '';
    $('titStats').value = state.titles.stats || '';
    $('titGoodBad').value = state.titles.goodBad || '';
    $('titetc').value = state.titles.etc || '';
    $('titPreset').value = state.titles.fileName || '';
  }

  // UI 전체 갱신
  setBackground(); 
  renderAll();    

  $('etcInput').value = state.etc || '';
  
  alert('프리셋이 적용되었습니다!');
}


/* 가이드 팝업 */
// 가이드 모달 제어 요소
const modal = $('guideModal');
const openBtn = $('openGuide'); // 도움말 버튼
const closeBtn = $('closeGuide');
const confirmBtn = $('guideConfirmBtn');

// 모달 열기 함수
const openModal = () => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

// 모달 닫기 함수
const closeModal = () => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

// 이벤트 연결
openBtn.onclick = openModal;
closeBtn.onclick = closeModal;
confirmBtn.onclick = closeModal;

// 영역 바깥(딤 처리된 부분) 클릭 시 닫기
window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
