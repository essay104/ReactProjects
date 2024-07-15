const typeName = (type) => {
  switch (type) {
    case '노말': return 'type-normal';
    case '격투': return 'type-fighting';
    case '비행': return 'type-flying';
    case '독': return 'type-poison';
    case '땅': return 'type-ground';
    case '바위': return 'type-rock';
    case '벌레': return 'type-bug';
    case '고스트': return 'type-ghost';
    case '강철': return 'type-steel';
    case '불꽃': return 'type-fire';
    case '물': return 'type-water';
    case '풀': return 'type-grass';
    case '전기': return 'type-electric';
    case '에스퍼': return 'type-psychic';
    case '얼음': return 'type-ice';
    case '드래곤': return 'type-dragon';
    case '악': return 'type-dark';
    case '페어리': return 'type-fairy';
    default: return '';
  }
};

export default typeName