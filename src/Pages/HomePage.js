import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background text-on-background font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm border-b border-slate-200/50 text-indigo-600 font-body-md antialiased">
        <div className="flex justify-between items-center px-4 md:px-8 h-16 max-w-7xl mx-auto">
          <Link to="/" className="text-xl font-bold tracking-tight text-indigo-700">WiseAI Finance</Link>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-indigo-600 font-semibold border-b-2 border-indigo-600 py-5" href="#hero">ホーム</a>
            <a className="text-slate-600 hover:text-indigo-500 transition-all py-5" href="#features">会社概要</a>
            <a className="text-slate-600 hover:text-indigo-500 transition-all py-5" href="#pricing">料金プラン</a>
            <a className="text-slate-600 hover:text-indigo-500 transition-all py-5" href="#contact">お問い合わせ</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link className="text-slate-600 hover:text-indigo-500 font-medium" to="/login">ログイン</Link>
            <Link className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all shadow-sm font-medium" to="/signup">新規登録</Link>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3">
            <a className="block text-indigo-600 font-semibold py-2" href="#hero" onClick={() => setMobileMenuOpen(false)}>ホーム</a>
            <a className="block text-slate-600 hover:text-indigo-500 py-2" href="#features" onClick={() => setMobileMenuOpen(false)}>会社概要</a>
            <a className="block text-slate-600 hover:text-indigo-500 py-2" href="#pricing" onClick={() => setMobileMenuOpen(false)}>料金プラン</a>
            <a className="block text-slate-600 hover:text-indigo-500 py-2" href="#contact" onClick={() => setMobileMenuOpen(false)}>お問い合わせ</a>
            <div className="pt-3 border-t border-slate-200 space-y-2">
              <Link className="block text-slate-600 hover:text-indigo-500 font-medium py-2" to="/login" onClick={() => setMobileMenuOpen(false)}>ログイン</Link>
              <Link className="block bg-indigo-600 text-white px-4 py-2 rounded-lg text-center font-medium" to="/signup" onClick={() => setMobileMenuOpen(false)}>新規登録</Link>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section id="hero" className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low to-surface opacity-50 -z-10 rounded-3xl"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary-container/10 px-3 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-primary text-[16px]">psychology</span>
                <span className="font-label-md text-label-md text-primary">次世代のAI投資プラットフォーム</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
                AIの力で、<br />
                <span className="text-primary-container">投資をもっと賢く。</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                データ駆動のアプローチと高度な機械学習アルゴリズムで、あなたの金融リテラシーと投資戦略を次のレベルへと引き上げます。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/signup" className="bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-label-md text-label-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2">
                  <span>無料で始める</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <button className="bg-transparent border border-outline text-on-surface px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-all flex items-center justify-center space-x-2">
                  <span className="material-symbols-outlined text-[18px]">play_circle</span>
                  <span>デモを見る</span>
                </button>
              </div>
            </div>
            {/* Hero Visualization */}
            <div className="relative mt-12 lg:mt-0">
              <img 
                alt="Abstract representation of financial data analysis with glowing lines and geometric shapes on a light background" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTDb8IaeHi2T2mPkG2pCDIGYGub3paBHts5va-bZd1uTuRfT2b0zCTj11cyKrJ-f9_ugkpa-8ZyVrP1FS0T2PEG2PdoQZ0OOCTpR3Sr89oPdyWY76DblDJz7J5QA6t4TODCeD8OOQUA2Qoq1_jFS9cEQlFvgEv6WZJofXV8Vc8-euDL1dlboYZ49OYsPIueBIfVzdU6lEJXTzA75Z20PI2HH-KuC1K6XC0X1CbwL2APxSaaxntKXBCxqKY65cbkMqoFaO0XC0sIr0" 
              />
              {/* Floating Glass Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-xl border border-white shadow-lg p-6 rounded-xl w-64">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-secondary-container/20 p-2 rounded-full">
                    <span className="material-symbols-outlined text-secondary">trending_up</span>
                  </div>
                  <div>
                    <p className="font-caption text-caption text-on-surface-variant">AI予測スコア</p>
                    <p className="font-headline-md text-headline-md text-on-surface">94.2%</p>
                  </div>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full mt-2">
                  <div className="bg-secondary h-2 rounded-full w-[94%]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Why Choose Us */}
        <section id="features" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">次世代の投資学習体験</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">複雑な金融データをAIがシンプルに解き明かし、あなたに最適な学習パスを提供します。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Bento Item 1 (Large) */}
            <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)] flex flex-col justify-between">
              <div>
                <div className="bg-primary-container/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary-container text-[24px]">analytics</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">リアルタイムAI市場分析</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">膨大なニュースや市場データを24時間監視し、重要なトレンドやリスクを瞬時に抽出して分かりやすく解説します。</p>
              </div>
              <div className="mt-8 bg-surface rounded-xl h-48 border border-outline-variant flex items-center justify-center">
                <div className="text-center">
                  <span className="material-symbols-outlined text-primary text-[48px]">monitoring</span>
                  <p className="font-body-md text-body-md text-outline mt-2">リアルタイム市場分析ダッシュボード</p>
                </div>
              </div>
            </div>
            {/* Bento Item 2 */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)]">
              <div className="bg-secondary-container/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-[24px]">route</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">パーソナライズされた学習</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">あなたの知識レベルや投資目標に合わせて、AIが最適なカリキュラムを自動生成します。</p>
            </div>
            {/* Bento Item 3 */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)]">
              <div className="bg-tertiary-container/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary text-[24px]">security</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">リスクシミュレーション</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">仮想環境でポートフォリオを構築し、様々な市場シナリオにおけるリスクを安全に体験できます。</p>
            </div>
            {/* Bento Item 4 (Horizontal) */}
            <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)] flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex-shrink-0">
                <img 
                  alt="Close up of a financial dashboard on a tablet showing clean modern graphs" 
                  className="w-32 h-32 rounded-xl object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUmXqU5sfVxOoIO4bjH9bBjF-H3PK2LaMFCdowOnf7SiMgThe7dx9-DrsPHakaf12W47F8-KentUNqcbllPBSiCGOpSpZGnvmqid0GjiWSBOBo_OjQt-b1TFPVv2udxEhZkvJlNoVHMNUk6HezO91HmgV06ih2iyw8cEMGfe97bT5al6zTzMJ08HthmowPBZBeo8WAxddzsP5O0SfEcdleXn-1G92aIMBTqbyDyDMAf1DiLY41V5iFA0RJb8aqks5807EhpeLNCso" 
                />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">専属のAIアドバイザー</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">投資に関する疑問をいつでもAIに質問可能。専門用語も分かりやすく解説します。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">人気コース</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">厳選された実践的なカリキュラム</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(26,33,33,0.05)] group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-48">
                <img 
                  alt="Stock market charts and technical analysis on multiple computer screens" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOkKSYOWESd7WJNV-uYOBv7aAtEhzP0vS0rXUVQtwEIB3i8CoWeMXGpFAEZdCB8vWu28nay-zZgfXb5DzjNTznQo_jbbRmDSWOFt_-s59JPKY-DgQ5B_HQkBrpywIe-hCi-yukaWwaxAxdAH6kgVHL4DIBQrAsgOgK8aP0k15zqk7fHzU80Foq6GXtbHaahSTo2zS5DvZYNBb4KjBnzeYYu8s7ow8au9OrMLm3aCK1QobucSzqldoYaPEYVToikGH0dpFzARCnyAg" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-caption text-caption text-on-surface">
                  初級
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-[20px] text-on-surface mb-2 group-hover:text-primary-container transition-colors">AIが導く米国株投資の基礎</h3>
                <p className="font-body-md text-[14px] text-on-surface-variant mb-4">米国市場の構造から、AIを活用した優良銘柄のスクリーニング手法までを基礎から学びます。</p>
                <div className="flex items-center justify-between border-t border-outline-variant pt-4">
                  <span className="font-caption text-caption text-outline">全12レッスン</span>
                  <span className="material-symbols-outlined text-outline">bookmark_border</span>
                </div>
              </div>
            </div>
            {/* Course Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(26,33,33,0.05)] group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-48">
                <img 
                  alt="Cybersecurity and technology concept with glowing code lines" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqCJY0Ax88unOQv2ZrurSqJSFipf-zKbslxDoZTQu1ZYE456dTS9lYIQi71dYqltgKT7R1qCo6gB0pY7DS4gHz9lBFUNrIYGaOqvVm7yhQ22T-KBLMUKXmKTOkqcVm-RikWDcccQo-JdW0clEPHB4y0pyQ2hpMqIW4j5p7fRiZ764S506OONL9l5T_N73jsU6sd7ygOUnTwEj8b_QnddpzL-yUqg3zuPJNXs-zwgITyROygrybW3cMYo5lyCLO_bqzK7hQPfZEdDU" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-caption text-caption text-on-surface">
                  中級
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-[20px] text-on-surface mb-2 group-hover:text-primary-container transition-colors">アルゴリズム・トレード入門</h3>
                <p className="font-body-md text-[14px] text-on-surface-variant mb-4">PythonとAIを用いて、基本的な自動売買ルールの構築とバックテストの実行方法を習得します。</p>
                <div className="flex items-center justify-between border-t border-outline-variant pt-4">
                  <span className="font-caption text-caption text-outline">全15レッスン</span>
                  <span className="material-symbols-outlined text-outline">bookmark_border</span>
                </div>
              </div>
            </div>
            {/* Course Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(26,33,33,0.05)] group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-48">
                <img 
                  alt="Abstract business presentation showing interconnected nodes and pie charts" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhKUk67I_LQVvbvT5_AlrtjZJZDqo2vi1oQOW0aAxQjGaVABgEuPoc_BqAHNm9xA4TayTwBoN_Cz-TyEznVvzav0IVGP0WxTJRgGwgQN1x7KO7V_YLRBcFsOeZ1_XjrfOFKEgjNAc8zmuZi-FUt1QCBcbdZKSJ4qoP2akDLQcTYq8p9NdnEl59Ng2baCQN3OfRqn2rslZ8RSVPuRvS56ZYtJSZ9OcdOiSqk5VOfNl8knX16IEY9bftcFr4OEBSIXon5TFW732QPQg" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-caption text-caption text-on-surface">
                  上級
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-[20px] text-on-surface mb-2 group-hover:text-primary-container transition-colors">ポートフォリオ最適化戦略</h3>
                <p className="font-body-md text-[14px] text-on-surface-variant mb-4">モダンポートフォリオ理論に基づく、AIによるリスク調整後リターンの最大化アプローチ。</p>
                <div className="flex items-center justify-between border-t border-outline-variant pt-4">
                  <span className="font-caption text-caption text-outline">全10レッスン</span>
                  <span className="material-symbols-outlined text-outline">bookmark_border</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">料金プラン</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">あなたの学習スタイルに合わせてプランをお選びください。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)] border border-outline-variant/30">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">フリー</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">まずは無料で始める</p>
              <div className="mb-6">
                <span className="font-display-lg text-display-lg text-on-surface">¥0</span>
                <span className="font-body-md text-body-md text-on-surface-variant">/月</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2 font-body-md text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                  <span>基本コース3本</span>
                </li>
                <li className="flex items-center space-x-2 font-body-md text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                  <span>市場データ閲覧</span>
                </li>
                <li className="flex items-center space-x-2 font-body-md text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                  <span>コミュニティ参加</span>
                </li>
              </ul>
              <Link to="/signup" className="block text-center bg-transparent border border-primary text-primary px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-all">
                無料で始める
              </Link>
            </div>
            {/* Pro Plan */}
            <div className="bg-surface-tint rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.1)] text-white relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full font-caption text-caption">
                人気No.1
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">プロ</h3>
              <p className="font-body-md text-body-md text-white/80 mb-6">本格的に学ぶ方に</p>
              <div className="mb-6">
                <span className="font-display-lg text-display-lg">¥2,980</span>
                <span className="font-body-md text-body-md text-white/80">/月</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2 font-body-md text-body-md text-white/90">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">check_circle</span>
                  <span>全コースアクセス</span>
                </li>
                <li className="flex items-center space-x-2 font-body-md text-body-md text-white/90">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">check_circle</span>
                  <span>AI市場分析レポート</span>
                </li>
                <li className="flex items-center space-x-2 font-body-md text-body-md text-white/90">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">check_circle</span>
                  <span>リスクシミュレーション</span>
                </li>
                <li className="flex items-center space-x-2 font-body-md text-body-md text-white/90">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">check_circle</span>
                  <span>専属AIアドバイザー</span>
                </li>
              </ul>
              <Link to="/signup" className="block text-center bg-white text-surface-tint px-6 py-3 rounded-lg font-label-md text-label-md hover:shadow-lg hover:-translate-y-0.5 transition-all font-bold">
                プロプランで始める
              </Link>
            </div>
            {/* Enterprise Plan */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)] border border-outline-variant/30">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">エンタープライズ</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">チーム・法人向け</p>
              <div className="mb-6">
                <span className="font-display-lg text-display-lg text-on-surface">お問い合わせ</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2 font-body-md text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                  <span>プロの全機能</span>
                </li>
                <li className="flex items-center space-x-2 font-body-md text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                  <span>チーム管理機能</span>
                </li>
                <li className="flex items-center space-x-2 font-body-md text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                  <span>カスタムカリキュラム</span>
                </li>
                <li className="flex items-center space-x-2 font-body-md text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                  <span>専任サポート</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-transparent border border-primary text-primary px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-all">
                お問い合わせ
              </a>
            </div>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
          <div className="bg-surface-tint rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-headline-lg text-headline-lg text-white mb-6">今すぐ投資の未来を体験しよう</h2>
              <p className="font-body-lg text-body-lg text-white/80 mb-10">無料アカウントを作成して、AIによる最新の市場分析とパーソナライズされた学習コースにアクセスしましょう。</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/signup" className="bg-white text-surface-tint px-8 py-4 rounded-lg font-label-md text-[16px] hover:shadow-lg hover:-translate-y-0.5 transition-all font-bold">
                  無料アカウント登録
                </Link>
                <Link to="/login" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-lg font-label-md text-[16px] hover:bg-white/10 transition-all">
                  ログイン
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">お問い合わせ</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">ご質問やご要望がございましたら、お気軽にお問い合わせください。</p>
          </div>
          <div className="max-w-2xl mx-auto bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_4px_20px_rgba(26,33,33,0.05)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2">お名前</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md" placeholder="山田 太郎" />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2">メールアドレス</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md" placeholder="example@email.com" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block font-label-md text-label-md text-on-surface-variant mb-2">メッセージ</label>
              <textarea rows="5" className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md resize-none" placeholder="お問い合わせ内容をご記入ください"></textarea>
            </div>
            <button className="w-full bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-label-md text-label-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
              送信する
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-slate-200 bg-slate-50 text-slate-900 text-xs font-body-md">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="font-bold text-slate-900 text-lg mb-4">WiseAI Finance</div>
            <p className="text-slate-500 mb-4">© 2026 WiseAI Finance. All rights reserved.</p>
          </div>
          <div className="md:col-span-3 flex flex-col sm:flex-row gap-6 justify-end">
            <Link className="text-slate-500 hover:text-indigo-600 transition-colors" to="/privacy">プライバシーポリシー</Link>
            <a className="text-slate-500 hover:text-indigo-600 transition-colors" href="#">利用規約</a>
            <a className="text-slate-500 hover:text-indigo-600 transition-colors" href="#">特定商取引法に基づく表記</a>
            <a className="text-slate-500 hover:text-indigo-600 transition-colors" href="#">ヘルプセンター</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
