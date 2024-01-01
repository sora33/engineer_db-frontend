type Props = {};
export const SkillExplain: React.FC<Props> = ({}) => {
  return (
    <>
      <p className="">
        レベルの概念は、
        <a
          href="https://www.ipa.go.jp/archive/files/000005100.pdf#page=32"
          target="_blank"
          className="text-orange-500 hover:underline"
        >
          IPAの「ITエンジニアのためのキャリア・レベル定義」
        </a>
        をご参照ください。
      </p>
      <p className="text-sm">
        ・<b>「Lv.3」</b>は、<b>「要求された作業を独力で推進できる」</b>
        レベルです。<span className="">（参考）2~4年目のエンジニア*</span>
      </p>
      <p className="text-sm">
        ・<b>「Lv.5」</b>
        は、スキルの専門分野が確立し、<b>「社内のテックリード」</b>
        レベルです。 <span className="">（参考）4~年目のエンジニア*</span>
      </p>
      <p className="text-sm">
        ・<b>「Lv.7」</b>
        は、<b>「世界で通用するプレーヤ」</b>
        で最も高いレベルです。
      </p>
      <p className="text-sm">※ 年数は目安です。</p>
    </>
  );
};
