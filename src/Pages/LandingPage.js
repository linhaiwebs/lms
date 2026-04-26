import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      {/* Top Bar */}
      <div className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-4 h-14 max-w-lg mx-auto">
          <span className="text-lg font-bold text-indigo-700">WiseAI Finance</span>
          <Link to="/login" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
            ログイン
          </Link>
        </div>
      </div>

      <main className="pt-14">
        {/* Hero Section */}
        <section className="px-4 py-8 max-w-lg mx-auto">
          <div className="inline-flex items-center space-x-1 bg-primary-container/10 px-3 py-1 rounded-full mb-4">
            <span className="material-symbols-outlined text-primary text-[14px]">psychology</span>
            <span className="font-label-md text-[11px] text-primary">AI投資教育プラットフォーム</span>
          </div>
          <h1 className="font-headline-lg text-[28px] text-on-surface tracking-tight leading-tight mb-4">
            AIの力で、<br />
            <span className="text-primary-container">投資をもっと賢く。</span>
          </h1>
          <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed mb-6">
            最新のAI技術で、株式投資の基礎から実践まで。データに基づいた意思決定をサポートする次世代の学習プラットフォーム。
          </p>
          {/* Primary CTA */}
          <Link to="/login" className="block w-full bg-primary-container text-on-primary-container px-6 py-4 rounded-xl font-label-md text-label-md text-center hover:shadow-lg active:scale-[0.98] transition-all mb-3">
            無料で始める →
          </Link>
          <p className="text-center text-[12px] text-outline mb-6">クレジットカード不要・今すぐ開始</p>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
            <img 
              alt="AI投資教育プラットフォームのダッシュボード" 
              className="w-full h-48 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTDb8IaeHi2T2mPkG2pCDIGYGub3paBHts5va-bZd1uTuRfT2b0zCTj11cyKrJ-f9_ugkpa-8ZyVrP1FS0T2PEG2PdoQZ0OOCTpR3Sr89oPdyWY76DblDJz7J5QA6t4TODCeD8OOQUA2Qoq1_jFS9cEQlFvgEv6WZJofXV8Vc8-euDL1dlboYZ49OYsPIueBIfVzdU6lEJXTzA75Z20PI2HH-KuC1K6XC0X1CbwL2APxSaaxntKXBCxqKY65cbkMqoFaO0XC0sIr0" 
            />
          </div>
        </section>

        {/* Social Proof */}
        <section className="px-4 py-6 max-w-lg mx-auto">
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-[0px_4px_20px_rgba(26,33,33,0.05)]">
            <div className="flex items-center justify-around text-center">
              <div>
                <p className="font-headline-md text-headline-md text-primary">10,000+</p>
                <p className="font-caption text-caption text-on-surface-variant">受講者数</p>
              </div>
              <div className="w-px h-10 bg-outline-variant"></div>
              <div>
                <p className="font-headline-md text-headline-md text-secondary">94%</p>
                <p className="font-caption text-caption text-on-surface-variant">満足度</p>
              </div>
              <div className="w-px h-10 bg-outline-variant"></div>
              <div>
                <p className="font-headline-md text-headline-md text-tertiary">50+</p>
                <p className="font-caption text-caption text-on-surface-variant">コース数</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-6 max-w-lg mx-auto">
          <h2 className="font-headline-md text-[20px] text-on-surface mb-6 text-center">3つの特徴</h2>
          
          <div className="space-y-4">
            {/* Feature 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-5 shadow-[0px_4px_20px_rgba(26,33,33,0.05)]">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-container/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary-container text-[20px]">analytics</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-[16px] text-on-surface mb-1">AI市場分析</h3>
                  <p className="font-body-md text-[13px] text-on-surface-variant leading-relaxed">24時間体制で市場データを監視し、重要なトレンドをリアルタイムにお届けします。</p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-5 shadow-[0px_4px_20px_rgba(26,33,33,0.05)]">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary-container/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary text-[20px]">route</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-[16px] text-on-surface mb-1">個別学習プラン</h3>
                  <p className="font-body-md text-[13px] text-on-surface-variant leading-relaxed">あなたのレベルに合わせてAIが最適なカリキュラムを自動生成します。</p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-5 shadow-[0px_4px_20px_rgba(26,33,33,0.05)]">
              <div className="flex items-start space-x-4">
                <div className="bg-tertiary-container/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">security</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-[16px] text-on-surface mb-1">リスクシミュレーション</h3>
                  <p className="font-body-md text-[13px] text-on-surface-variant leading-relaxed">仮想環境で安全に投資体験。リアルな市場シナリオで実践力を養います。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="px-4 py-6 max-w-lg mx-auto">
          <h2 className="font-headline-md text-[20px] text-on-surface mb-6 text-center">人気コース</h2>
          <div className="space-y-4">
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(26,33,33,0.05)]">
              <img 
                alt="Stock market charts" 
                className="w-full h-36 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOkKSYOWESd7WJNV-uYOBv7aAtEhzP0vS0rXUVQtwEIB3i8CoWeMXGpFAEZdCB8vWu28nay-zZgfXb5DzjNTznQo_jbbRmDSWOFt_-s59JPKY-DgQ5B_HQkBrpywIe-hCi-yukaWwaxAxdAH6kgVHL4DIBQrAsgOgK8aP0k15zqk7fHzU80Foq6GXtbHaahSTo2zS5DvZYNBb4KjBnzeYYu8s7ow8au9OrMLm3aCK1QobucSzqldoYaPEYVToikGH0dpFzARCnyAg" 
              />
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-primary-container/10 text-primary font-caption text-[10px] px-2 py-0.5 rounded-full">初級</span>
                  <span className="font-caption text-caption text-outline">全12レッスン</span>
                </div>
                <h3 className="font-headline-md text-[15px] text-on-surface mb-1">AIが導く米国株投資の基礎</h3>
                <p className="font-body-md text-[12px] text-on-surface-variant">米国市場の構造からAIを活用した銘柄選びまで</p>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(26,33,33,0.05)]">
              <img 
                alt="Algorithm trading" 
                className="w-full h-36 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqCJY0Ax88unOQv2ZrurSqJSFipf-zKbslxDoZTQu1ZYE456dTS9lYIQi71dYqltgKT7R1qCo6gB0pY7DS4gHz9lBFUNrIYGaOqvVm7yhQ22T-KBLMUKXmKTOkqcVm-RikWDcccQo-JdW0clEPHB4y0pyQ2hpMqIW4j5p7fRiZ764S506OONL9l5T_N73jsU6sd7ygOUnTwEj8b_QnddpzL-yUqg3zuPJNXs-zwgITyROygrybW3cMYo5lyCLO_bqzK7hQPfZEdDU" 
              />
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-tertiary-container/10 text-tertiary font-caption text-[10px] px-2 py-0.5 rounded-full">中級</span>
                  <span className="font-caption text-caption text-outline">全15レッスン</span>
                </div>
                <h3 className="font-headline-md text-[15px] text-on-surface mb-1">アルゴリズム・トレード入門</h3>
                <p className="font-body-md text-[12px] text-on-surface-variant">PythonとAIで自動売買ルールを構築</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Summary */}
        <section className="px-4 py-6 max-w-lg mx-auto">
          <h2 className="font-headline-md text-[20px] text-on-surface mb-6 text-center">料金プラン</h2>
          <div className="bg-surface-tint rounded-2xl p-6 text-white text-center relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-secondary text-white px-3 py-0.5 rounded-full font-caption text-[10px]">
              人気No.1
            </div>
            <h3 className="font-headline-md text-[18px] mb-1 mt-1">プロプラン</h3>
            <div className="mb-4">
              <span className="font-display-lg text-[36px]">¥2,980</span>
              <span className="font-body-md text-white/80">/月</span>
            </div>
            <ul className="space-y-2 mb-6 text-left">
              <li className="flex items-center space-x-2 font-body-md text-[13px] text-white/90">
                <span className="material-symbols-outlined text-secondary-fixed text-[16px]">check</span>
                <span>全コース無制限アクセス</span>
              </li>
              <li className="flex items-center space-x-2 font-body-md text-[13px] text-white/90">
                <span className="material-symbols-outlined text-secondary-fixed text-[16px]">check</span>
                <span>AI市場分析レポート</span>
              </li>
              <li className="flex items-center space-x-2 font-body-md text-[13px] text-white/90">
                <span className="material-symbols-outlined text-secondary-fixed text-[16px]">check</span>
                <span>専属AIアドバイザー</span>
              </li>
              <li className="flex items-center space-x-2 font-body-md text-[13px] text-white/90">
                <span className="material-symbols-outlined text-secondary-fixed text-[16px]">check</span>
                <span>リスクシミュレーション</span>
              </li>
            </ul>
            <Link to="/login" className="block w-full bg-white text-surface-tint px-6 py-3 rounded-xl font-label-md text-[14px] text-center font-bold hover:shadow-lg active:scale-[0.98] transition-all">
              無料トライアルを開始
            </Link>
          </div>
          <p className="text-center font-caption text-[11px] text-outline mt-3">無料プランもご利用いただけます（クレジットカード不要）</p>
        </section>

        {/* Trust Signals - Google Ads Compliance */}
        <section className="px-4 py-6 max-w-lg mx-auto">
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-[0px_4px_20px_rgba(26,33,33,0.05)]">
            <h3 className="font-headline-md text-[16px] text-on-surface mb-4 text-center">安心のポイント</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-secondary text-[20px]">verified_user</span>
                <span className="font-body-md text-[13px] text-on-surface-variant">SSL暗号化通信で個人情報を保護</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-secondary text-[20px]">shield</span>
                <span className="font-body-md text-[13px] text-on-surface-variant">投資は学習目的のみ。実際の投資助言ではありません</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-secondary text-[20px]">cancel</span>
                <span className="font-body-md text-[13px] text-on-surface-variant">いつでもキャンセル可能・追加料金なし</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 py-8 max-w-lg mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-headline-lg text-[24px] text-on-surface mb-3">今すぐ始めましょう</h2>
            <p className="font-body-md text-[14px] text-on-surface-variant">AIと一緒に、投資の世界を学ぼう</p>
          </div>
          <Link to="/login" className="block w-full bg-primary-container text-on-primary-container px-6 py-4 rounded-xl font-label-md text-label-md text-center hover:shadow-lg active:scale-[0.98] transition-all mb-3">
            無料アカウントを作成 →
          </Link>
          <p className="text-center font-caption text-[11px] text-outline">登録は30秒で完了</p>
        </section>
      </main>

      {/* Footer - Google Ads Compliance */}
      <footer className="bg-slate-50 border-t border-slate-200 py-8 px-4">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-4">
            <span className="font-bold text-slate-900 text-sm">WiseAI Finance</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link className="text-slate-500 hover:text-indigo-600 text-[11px] transition-colors" to="/privacy">プライバシーポリシー</Link>
            <a className="text-slate-500 hover:text-indigo-600 text-[11px] transition-colors" href="/terms">利用規約</a>
            <a className="text-slate-500 hover:text-indigo-600 text-[11px] transition-colors" href="/legal">特定商取引法に基づく表記</a>
            <Link className="text-slate-500 hover:text-indigo-600 text-[11px] transition-colors" to="/login">ログイン</Link>
            <Link className="text-slate-500 hover:text-indigo-600 text-[11px] transition-colors" to="/">ホーム</Link>
          </div>
          <div className="bg-white rounded-lg p-3 mb-4">
            <p className="text-center text-[10px] text-slate-500 leading-relaxed">
              <strong>【投資に関する免責事項】</strong>本サービスは金融教育プラットフォームであり、投資勧誘や特定の金融商品・銘柄の推奨を目的とするものではありません。過去の実績は将来の成果を保証するものではありません。投資にはリスクが伴い、元本割れの可能性があります。投資に関する最終的な判断は、ご自身の責任で行ってください。
            </p>
          </div>
          <p className="text-center text-[10px] text-slate-400">
            運営会社：WiseAI Finance｜お問い合わせ：support@wiseai.finance
          </p>
          <p className="text-center text-[10px] text-slate-400 mt-2">
            © 2026 WiseAI Finance. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
