'use client';

import { useEffect, useState } from 'react';
import './styles.css';

function NeonRing() {
  const [scale, setScale] = useState(1); // 초기 크기를 1로 설정

  useEffect(() => {
    const handleScroll = () => {
      // 현재 스크롤 위치
      const scrollY = window.scrollY || window.pageYOffset;
      const newScale = 1 + (scrollY * 2.5) / 1000; // 스크롤 위치에 따라 크기를 동적으로 변경
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트 될 때 리스너를 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 이펙트는 한 번만 실행

  return <div className="neon-ring" style={{ transform: `scale(${scale})` }} />;
}

export default NeonRing;
