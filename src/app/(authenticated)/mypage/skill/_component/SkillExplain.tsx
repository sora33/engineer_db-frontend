type Props = {};
export const SkillExplain: React.FC<Props> = ({}) => {
  return (
    <div className="text-sm">
      <p className="">
        レベルの概念は、下記を参考にしてください。 詳細は、
        <a
          href="https://www.ipa.go.jp/archive/files/000005100.pdf#page=32"
          target="_blank"
          className="text-orange-500 hover:underline"
        >
          IPAの「ITエンジニアのためのキャリア・レベル定義」
        </a>
        をご参照ください。
      </p>
      <p>
        ・<b>「Lv.3」</b>は<b>「要求を独力で推進できる自立エンジニア」</b>
        のレベルです。<span className="">ex. 2~4年目のエンジニア</span>
      </p>
      <p>
        ・<b>「Lv.5」</b>は<b>「社内のテックリード」</b>
        で専門分野が確立しているレベルです。
        <span className="">ex. 4年目~のエンジニア</span>
      </p>
      <p>
        ・<b>「Lv.7」</b>は<b>「世界で通用するエキスパート」</b>
        で最も高いレベルです。
      </p>
    </div>
  );
};
