import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin, BookOpen, Music, Target, DollarSign, Users, CreditCard, MessageCircle, AlertTriangle, Sparkles, Heart, Zap, CheckCircle2, ArrowUp, Volume2, VolumeX } from 'lucide-react';

const BackgroundEffects = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-600/20 blur-[120px]" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-600/20 blur-[120px]" />
    <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-fuchsia-600/10 blur-[100px]" />
  </div>
);

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 relative selection:bg-pink-500/30">
      <BackgroundEffects />
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="relative w-full overflow-hidden mb-16 shadow-2xl shadow-pink-500/10 border-b border-white/10">
          {/* Video Background */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center bg-slate-900">
            <iframe
              src={`https://www.youtube.com/embed/KQxrz86muh8?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&controls=0&showinfo=0&rel=0&playlist=KQxrz86muh8&playsinline=1`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] sm:w-[200%] sm:h-[200%] md:w-[150%] md:h-[150%] max-w-none"
              style={{ border: 0, pointerEvents: 'none' }}
              allow="autoplay; encrypted-media"
              title="Background Video"
            />
            {/* Overlay to make text readable */}
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-transparent"></div>
          </div>

          {/* Sound Toggle Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-6 right-6 z-20 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-pink-400"
            aria-label={isMuted ? "소리 켜기" : "소리 끄기"}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>

          <div className="relative z-10 text-center space-y-4 sm:space-y-6 py-16 sm:py-24 md:py-32 px-4 max-w-4xl mx-auto">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-flex items-center justify-center p-2 sm:p-3 mb-2 sm:mb-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 mr-2" />
              <span className="text-xs sm:text-sm font-medium tracking-wider text-white uppercase drop-shadow-md">Yoon & Nadia</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 ml-2" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white drop-shadow-2xl leading-tight">
              바차타 <span className="text-gradient">벨리사</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 mt-2 sm:mt-4 block drop-shadow-lg">BELLEZA 한곡반</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto italic drop-shadow-md px-2 leading-relaxed">
              "트렌디한 소셜 패턴 & 레벨업을 위한 완벽한 선택"
            </p>
          </div>
        </motion.div>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8 sm:space-y-12">
          {/* Grid Layout for Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Class Overview */}
            <motion.div variants={itemVariants} className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center text-white">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-pink-400" />
                수업 개요
              </h2>
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 border border-white/10">
                    <Calendar className="w-5 h-5 text-pink-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">일정</p>
                    <p className="font-medium text-lg">2026. 3. 8 (일) ~ 4. 26 (일)</p>
                    <p className="text-sm text-pink-400 mt-1">총 7주 과정 (3/15 휴강)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 border border-white/10">
                    <Clock className="w-5 h-5 text-pink-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">시간</p>
                    <p className="font-medium text-lg">매주 일요일 오후 5시 ~ 7시</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 border border-white/10">
                    <MapPin className="w-5 h-5 text-pink-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">장소</p>
                    <p className="font-medium text-lg">맘보빠 큰홀</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Curriculum */}
            <motion.div variants={itemVariants} className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center text-white">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-violet-400" />
                수업 내용
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                기초부터 고급까지 탄탄한 원리 트레이닝과 소셜 트레이닝을 병행하며 한 곡을 완성하는 과정입니다.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Zap, title: "기본기 & 원리", desc: "Basic + 소셜 원리 패턴 트레이닝" },
                  { icon: Users, title: "디테일 업", desc: "리드-팔로우 무브먼트 및 풋워크" },
                  { icon: Music, title: "음악성", desc: "음악에 맞춘 뮤지컬리티 트레이닝" },
                  { icon: Target, title: "목표", desc: "트레이닝 + 한 곡 완벽 마스터 (공연은 선택 사항)" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start bg-white/5 p-3 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                    <item.icon className="w-5 h-5 text-violet-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white block mb-0.5">{item.title}</span>
                      <span className="text-sm text-slate-400">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Pricing & Discounts */}
            <motion.div variants={itemVariants} className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden group md:col-span-2">
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-emerald-500/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center text-white">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-emerald-400" />
                수강료 및 할인 혜택
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white/5 rounded-2xl p-5 sm:p-6 border border-white/10 flex flex-col justify-center items-center text-center">
                  <p className="text-sm sm:text-base text-slate-400 mb-1 sm:mb-2">기본 수강료</p>
                  <p className="text-3xl sm:text-4xl font-black text-white">28<span className="text-lg sm:text-xl font-medium text-slate-400 ml-1">만원</span></p>
                </div>
                
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-emerald-300 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      할인 혜택
                    </h3>
                    <span className="text-xs font-medium px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                      최대 3만원 중복 할인 가능
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-white/5 to-white/0 p-5 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-colors">
                      <div className="flex items-center mb-2">
                        <Heart className="w-5 h-5 text-pink-400 mr-2" />
                        <h4 className="font-bold text-white">커플 할인</h4>
                      </div>
                      <p className="text-sm text-slate-300">커플 등록 시 각 <strong className="text-emerald-400">1만원 할인</strong></p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-white/5 to-white/0 p-5 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-colors">
                      <div className="flex items-center mb-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" />
                        <h4 className="font-bold text-white">동시 수강 할인</h4>
                      </div>
                      <p className="text-sm text-slate-300"><strong className="text-emerald-400">2만원 할인</strong></p>
                      <p className="text-xs text-slate-500 mt-1">월요일 살사 또는 화요일 바차타 중 1개 이상 동시 수강 시</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Registration & Contact */}
            <motion.div variants={itemVariants} className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden group md:col-span-2 bg-gradient-to-r from-slate-900/80 to-slate-800/80">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center text-white">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-400" />
                신청 및 문의
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-slate-400 mb-2 flex items-center">
                      <CreditCard className="w-4 h-4 mr-2" /> 입금 계좌
                    </p>
                    <div className="bg-black/30 p-4 rounded-xl border border-white/5 flex items-center justify-between group-hover:border-blue-500/30 transition-colors">
                      <div>
                        <p className="font-mono text-lg text-white">카카오뱅크 3333-06-7563428</p>
                        <p className="text-sm text-slate-400 mt-1">예금주: 서천우</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-slate-400 mb-2 flex items-center">
                      <MessageCircle className="w-4 h-4 mr-2" /> 문의처
                    </p>
                    <div className="bg-black/30 p-4 rounded-xl border border-white/5 group-hover:border-blue-500/30 transition-colors">
                      <p className="text-white">나디아 카카오톡 ID <span className="text-blue-400 font-bold ml-2">diadia66</span></p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 flex items-start">
                    <AlertTriangle className="w-6 h-6 text-red-400 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-red-400 font-bold mb-2">유의사항</h4>
                      <p className="text-red-200/80 text-sm leading-relaxed">
                        수업 시작 후에는 환불이 불가합니다. 신중한 등록 부탁드립니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
          
          <motion.div variants={itemVariants} className="text-center pt-6 sm:pt-8 pb-4 px-4 sm:px-0">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdKQkitdD0Mdv42S1236G3tYT4oVNNKQp-HiqjwY_DxKmykPQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-16 sm:h-20 w-full sm:w-auto active:scale-95 transition-transform overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-slate-950 group"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ec4899_0%,#8b5cf6_50%,#ec4899_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 group-hover:bg-slate-900 transition-colors px-8 sm:px-16 py-2 text-xl sm:text-2xl font-black text-white backdrop-blur-3xl shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-pink-400 animate-pulse" />
                수강 신청하기
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 text-violet-400 animate-pulse" />
              </span>
            </a>
          </motion.div>
          
        </main>
      </motion.div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 sm:p-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg shadow-pink-500/30 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            aria-label="맨 위로 가기"
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
