import { HeroHeader } from "../components/HeroHeader";
import { ProfileSection } from "../components/ProfileSection";
import { ValuePropositionSection } from "../components/ValuePropositionSection";
import { UseCaseSection } from "../components/UseCaseSection";
import { ServiceSection } from "../components/ServiceSection";
import { CTAArea } from "../components/CTAArea";
import { PortfolioSection } from "../components/PortfolioSection";
import { PriceSection } from "../components/PriceSection";
import { PrintPrice } from "../components/PrintPrice";
import { ServiceList } from "../components/ServiceList";
import { Process } from "../components/Process";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* テスト用ボタン - CSSが効くかどうか確認用 */}
      <button className="test-button">CSSテストボタン</button>
      
      {/* Tailwind CSSのテスト */}
      <div className="mt-8 p-4 bg-blue-500 text-white rounded-lg">
        <h1 className="text-2xl font-bold">Tailwind CSS テスト</h1>
        <p className="mt-2">このテキストが青い背景で表示されれば、Tailwind CSSが正常に動作しています。</p>
      </div>
      
      {/* シンプルなコンポーネントテスト */}
      <div className="mt-8 p-4 bg-green-500 text-white rounded-lg">
        <h2 className="text-xl font-bold">コンポーネントテスト</h2>
        <p className="mt-2">この部分が緑の背景で表示されれば、基本的なスタイリングが効いています。</p>
      </div>
    </div>
  );
}
