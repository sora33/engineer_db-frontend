import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  onChange: (value: string) => void;
};

export const FileterSelect: React.FC<Props> = ({ onChange }) => {
  const handleSelectChange = (value: string) => {
    onChange(value);
  };
  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="すべて" />
      </SelectTrigger>
      <SelectContent>
        {Array.from({ length: 8 }).map((_, i) => (
          <SelectItem key={i} value={i.toString()}>
            {i === 0
              ? "すべて表示"
              : i === 7
              ? `Lv.${i}を表示`
              : `Lv.${i}以上を表示`}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
