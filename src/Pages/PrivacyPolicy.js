import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-extrabold text-brand">WiseAI Finance</Link>
          <Link to="/" className="text-sm text-gray-500 hover:text-brand transition">ホームに戻る</Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">プライバシーポリシー</h1>
        <p className="text-sm text-gray-500 mb-8">最終更新日：2026年4月26日</p>

        <section className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. はじめに</h2>
            <p>WiseAI Finance（以下「当社」）は、本ウェブサイトおよびサービス（以下「本サービス」）の利用者（以下「ユーザー」）の個人情報の保護に努め、個人情報の保護に関する法律その他の関係法令を遵守します。本プライバシーポリシーは、当社がユーザーの個人情報をどのように収集、利用、保護するかについて説明するものです。</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. 収集する情報</h2>
            <p className="mb-3">当社は、以下の情報を収集する場合があります。</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>アカウント情報：</strong>氏名、メールアドレス、パスワード（暗号化済み）</li>
              <li><strong>利用データ：</strong>サービス利用履歴、学習進捗、アクセスログ</li>
              <li><strong>デバイス情報：</strong>IPアドレス、ブラウザの種類、OS、端末識別子</li>
              <li><strong>Cookie情報：</strong>ウェブサイトの利便性向上のためのCookieおよび類似技術</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. 情報の利用目的</h2>
            <p className="mb-3">収集した情報は、以下の目的で利用します。</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>本サービスの提供・運営・改善</li>
              <li>ユーザーサポートおよびお問い合わせへの対応</li>
              <li>パーソナライズされた学習コンテンツの提供</li>
              <li>サービスに関するお知らせやマーケティング情報の送信（同意がある場合）</li>
              <li>利用状況の分析およびサービス品質の向上</li>
              <li>法令に基づく開示要請への対応</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. 第三者への提供</h2>
            <p>当社は、以下の場合を除き、ユーザーの個人情報を第三者に提供しません。</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>ユーザーの同意がある場合</li>
              <li>法令に基づく開示要請がある場合</li>
              <li>人の生命・身体・財産の保護に必要な場合</li>
              <li>業務委託先への必要最小限の提供（適切な管理義務を課します）</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Google広告とトラッキング</h2>
            <p className="mb-3">当社は、Google LLCが提供するGoogle広告およびGoogleアナリティクスを利用しています。これらのサービスは、ユーザーのアクセス情報を収集・分析するためにCookieを使用する場合があります。</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Google広告のコンバージョントラッキング</li>
              <li>Googleアナリティクスによる利用状況分析</li>
              <li>リマーケティング広告の配信</li>
            </ul>
            <p className="mt-3">ユーザーは、<a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-brand underline">Google広告設定</a>にてパーソナライズ広告を無効にすることができます。</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. 情報の安全管理</h2>
            <p>当社は、ユーザーの個人情報を適切に管理し、不正アクセス、紛失、破壊、改ざん、漏洩などを防ぐため、合理的な安全対策を講じます。具体的には、SSL/TLS暗号化通信、アクセス制限、データの暗号化保存などの措置を実施しています。</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. ユーザーの権利</h2>
            <p className="mb-3">ユーザーは、ご自身の個人情報について以下の権利を有します。</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>個人情報の開示請求</li>
              <li>個人情報の訂正・追加・削除</li>
              <li>個人情報の利用停止・第三者提供の停止</li>
              <li>データのポータビリティ（移転）請求</li>
            </ul>
            <p className="mt-3">これらの権利を行使される場合は、お問い合わせフォームよりご連絡ください。</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. 投資に関する免責事項</h2>
            <p className="mb-3">本サービスで提供する投資教育コンテンツは、一般的な情報提供を目的とするものであり、投資勧誘や特定の金融商品の推奨を目的とするものではありません。</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>過去の実績は将来の成果を保証するものではありません</li>
              <li>投資にはリスクが伴い、元本割れの可能性があります</li>
              <li>投資に関する最終的な判断は、ご自身の責任で行ってください</li>
              <li>税制等の制度は予告なく変更される場合があります</li>
            </ul>
            <p className="mt-3">本サービスの情報に基づいて被った損害について、当社は一切の責任を負いません。</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. プライバシーポリシーの変更</h2>
            <p>当社は、法令の変更やサービスの内容変更に伴い、本プライバシーポリシーを改定する場合があります。重要な変更がある場合は、本サービス上で通知いたします。</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. お問い合わせ</h2>
            <p>本プライバシーポリシーに関するご質問やご要望は、以下までお問い合わせください。</p>
            <div className="mt-3 p-4 bg-gray-100 rounded-lg">
              <p><strong>WiseAI Finance</strong></p>
              <p>メール：privacy@wiseai.finance</p>
              <p>ウェブサイト：https://wiseai.finance</p>
            </div>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Link to="/" className="text-brand hover:underline font-medium">← ホームに戻る</Link>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
